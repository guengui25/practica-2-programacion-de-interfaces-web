import { FunctionComponent } from "preact";

import {Pokemon} from "../types.ts"


const PokemonItem: FunctionComponent<Pokemon> = (props) => {
    const {_id,name,image,sound} = props;
    
    const alternativeText = `Photo of the pokemon with id ${_id}`;
    const soundID = `SonidoPokemon ${_id}`;
    const vinculo = `/pokemon/${name}`;

    const PlaySound = () => {
        const sound = document.getElementById(soundID) as HTMLAudioElement;
        if(sound != null) sound.play();
    }

    // AGREGAR LO DEL MODAL PARA ELIMINAR

    const DeletePokemon = () => {
        // Aquí se debe implementar la eliminación del pokemon
    }

    return (
    <div class="PokemonItem">
        <a href={vinculo} class="NombrePokemon">{name}</a>
        <img src={image} class="ImagenPokemon" alt={alternativeText}/>
        <button class="BotonSonido" onClick={PlaySound}>🔊</button>
        <audio id={soundID} src={sound}/>
        <button class="BotonEliminar" onClick={DeletePokemon}>Eliminar</button>
    </div>
    );
}

export default PokemonItem;