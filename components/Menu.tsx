import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Search" | "Add";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        List Pokemones
      </a>
      <a href="/search" class={selected === "Search" ? "selected" : ""}>
        Search Pokemones
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Add new Pokemon
      </a>
    </div>
  );
};

export default Menu;