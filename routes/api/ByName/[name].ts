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
        
        console.log(pokemones);

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
    /*
    // POR HACER
    DELETE: async (_req: Request, ctx: FreshContext<unknown>) => {

        return new Response(JSON.stringify(pokemones),{
            headers: {
                "Content-Type":"application/json"
            }
        })         

    }*/
  };
  