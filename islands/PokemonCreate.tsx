import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

export const PokemonCreate: FunctionComponent = () => {
  const [error, setError] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");


  return (
    <div>
      <h1 class="Titulo">Create a new Pokemon</h1>
      <form class ="CreatePokemon">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onInput={(e) => setImage((e.target as HTMLInputElement).value)}
          />
        </label>
        <label>
          Sound:
          <input
            type="text"
            value={sound}
            onInput={(e) => setSound((e.target as HTMLInputElement).value)}
          />
        </label>
        <label>
          Creator:
          <input
            type="text"
            value={creator}
            onInput={(e) => setCreator((e.target as HTMLInputElement).value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setError("Pokemon created!");
          }}
        >
          Create Pokemon
        </button>
      </form>
      <p>{error}</p>
    </div>
  );

  
};

export default PokemonCreate;