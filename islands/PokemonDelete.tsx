import { FunctionComponent } from 'preact';
import { useState } from "preact/hooks";


// Modal para eliminar un pokemon introduciendo su creador

type ModalProps = {
    name: String,
}

const PokemonDelete: FunctionComponent<ModalProps> = (props) => {
    
    const {name} = props;

    const [creator, setCreator] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleDelete = async (e: Event) => {
        e.preventDefault();
        if(!creator){
            setError("Creator is required!");
            return;
        }
        const res = await fetch(`/api/deletePokemon/${name}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                creator,
            }),
        });

        if(res.status === 200){
            setError("Pokemon deleted!");
        }else{
            setError("Error deleting pokemon");
        }
    }

    return(
        <>
            
            <form class="DeletePokemon" onSubmit={handleDelete}>
            <h1 class="Titulo">Delete Pokemon {name}</h1>
                <label>
                    Creator:
                    <input
                        type="text"
                        value={creator}
                        onInput={(e) => setCreator((e.target as HTMLInputElement).value)}
                        autocomplete="off"
                    />
                </label>
                <button type="submit">Delete Pokemon</button>
            </form>
            <p>{error}</p>
        </>
    );

}
export default PokemonDelete;