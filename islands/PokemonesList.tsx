import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Pokemon } from "../types.ts";
import PokemonItem from "./PokemonItem.tsx";

const PokemonesList: FunctionComponent = () => {
    const [pokemones, setPokemones] = useState<Pokemon[] | null>(null); // Variable de estado para almacenar los pokemones
    const [loading, setLoading] = useState<boolean>(true); // Variable de estado para indicar si se está cargando la información

    // Se podría haber hecho en el handler de la página, pero para que todas las llamadas a la API estén en un solo lugar, se hace aquí
    // Así evito tener que forzar el recargar la página al eliminar un pokemon

    // https://preactjs.com/guide/v10/hooks#useeffect
    useEffect(() => {                           // useEffect se ejecuta después de que el componente se monta (sugerido por GPT)
        
        const fetchPokemones = async () => {    // Función asíncrona para obtener los pokemones de la API
            try {
                const fetch_pokemones = await fetch("/api/getAllPokemon");
                const pokemones_data: Pokemon[] = await fetch_pokemones.json();
                setPokemones(pokemones_data);
                setLoading(false); // Ponemos loading en false para indicar que ya se cargó la información
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        };

        fetchPokemones(); // En el useEffect llamamos a la función fetchPokemones (durante el montaje del componente)
    }, []); // El segundo argumento de useEffect es un array vacío, lo que significa que solo se ejecutará una vez

    return (
        <div className="PokemonesList">
            {loading ? (
                <p>Loading...</p>
            ) : (
                pokemones &&
                pokemones.map((pokemon: Pokemon) => (
                    <PokemonItem
                        key={pokemon._id} // Importante: se debe agregar una key única para cada elemento de la lista
                        _id={pokemon._id}
                        name={pokemon.name}
                        image={pokemon.image}
                        sound={pokemon.sound}
                    />
                ))
            )}
        </div>
    );
};

export default PokemonesList;