import Axios from "npm:axios";
import { FreshContext, Handlers } from "$fresh/server.ts";

import {Pokemon} from "../../../types.ts";

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown>) => {
      
      try{
        const {name} = ctx.params;
  
        const pokemon_request = await Axios.get<Pokemon[]>(`https://lospoquimones.deno.dev/${name}`,);
      
        if (pokemon_request.status !== 200) {
          throw new Error(`Error fetching pokemon data for ${name}`);
        }
  
        // Es necesario retornar el primer elemento del array de pokemon, 
        // ya que la API devuelve un array con un solo elemento
  
        const pokemones:Pokemon[] = pokemon_request.data;
        
        return new Response(JSON.stringify(pokemones),{
            headers: {
                "Content-Type":"application/json"
            }
        })         
        
      }catch(e){
          console.error(e);
          throw new Error(e);
      }
    },
    
    // ARREGLAR 
    DELETE: async (req: Request, ctx: FreshContext) => {

      //curl -X DELETE -H "Content-Type: application/json" -d '{"creator":"Ash"}'
      
      try{

          const {name} = ctx.params;

          const body = await req.json();

          const response = await Axios.delete(`https://lospoquimones.deno.dev/${name}`,{
              data: body
          });
        
        if(response.status !== 200){
            throw new Error(`Error deleting pokemon ${name}`);
        }
        
        return new Response("Pokemon deleted",{
            headers:{
                "Content-Type":"application/json"
            }
        });

      }catch(e){
          console.error(e);
      }
    },
};
  