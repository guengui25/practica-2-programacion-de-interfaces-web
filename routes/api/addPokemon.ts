import Axios from "npm:axios";
import { FreshContext, Handlers } from "$fresh/server.ts";
import {Pokemon} from "../../types.ts";

/*
Add a new Pokémon
curl -X POST -H "Content-Type: application/json" -d '{"name":"Charizard","image":"charizard.jpg","sound":"charizard.mp3","creator":"Ash"}' http://localhost:3000/
*/

export const handler: Handlers = {
   POST: async (req: Request, ctx: FreshContext<unknown, Pokemon>) => {
    try{
      const {name, image, sound, creator} = await req.json();
      const pokemon = {name, image, sound, creator};
      const response = await Axios.post<Pokemon>("https://lospoquimones.deno.dev/", pokemon);
      return ctx.render(response.data);
    }catch(e){
      console.error(e);
      throw new Error(e);
    }
    },
};