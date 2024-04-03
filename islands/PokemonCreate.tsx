import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

export const PokemonCreate: FunctionComponent = () => {
  const [error, setError] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");

  const handleCreate = async (e: Event) => {
    e.preventDefault();

    setError("");

    if (!name || !image || !sound || !creator) {
      setError("All fields are required!");
      return;
    }

    const res = await fetch("/api/addPokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        sound,
        creator,
      }),
    });

    const data = await res.json();

    //console.log(data);

    if (res.status !== 200) {
      setError(data);
      return;
    }

    setError("Pokemon created!");
  }

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
            autocomplete="off" //Desactiva el autocompletado
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onInput={(e) => setImage((e.target as HTMLInputElement).value)}
            autocomplete="off" //Desactiva el autocompletado
          />
        </label>
        <label>
          Sound:
          <input
            type="text"
            value={sound}
            onInput={(e) => setSound((e.target as HTMLInputElement).value)}
            autocomplete="off" //Desactiva el autocompletado
          />
        </label>
        <label>
          Creator:
          <input
            type="text"
            value={creator}
            onInput={(e) => setCreator((e.target as HTMLInputElement).value)}
            autocomplete="off" //Desactiva el autocompletado
          />
        </label>
        <button onClick={handleCreate}>Create Pokemon</button>
        <p class = "Error">{error}</p>
      </form>
    </div>
  );

  
};

export default PokemonCreate;