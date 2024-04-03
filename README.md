# Práctica 2 - Hazte con todos

## Rutas

 - `/` -> Página principal en la que se muestren todos los pokemones.
 - `/pokemon/:name` -> Página única por cada pokemon
 - `/search` -> Página de búsqueda de pokemones
 - `/add` -> Página de creación de pokemon


## Enunciado 
En esta práctica deberéis realizar una página web con función de pokedex básica interactiva.
(Si no sabéis que es una pokedex tenéis cosas mas importantes de las que preocuparos)

https://lospoquimones.deno.dev/

Con este api (del cuál podéis ver su documentación en https://github.com/YBlas/PokemonAPI ) podréis acceder a un listado de todos los pokemones, un pokemon en particular y añadir un nuevo pokemon.

Utilizando esta API se pide hacer una página web con las siguientes funciones.

- Página principal en la que se muestren todos los pokemones. 
    - Hacer un componente principal en el que envolver el resto de elementos de la página
    - Crear un componente pokemon genérico para mostrar cada pokemon -> Cada pokemon dispone de una imagen, sonido y nombre. En el componente se deberá de poder ver la imagen, leer el nombre y reproducir el sonido.
    - La imagen y el sonido siempre serán una url a un archivo usable por el navegador.
    - Desde el mismo componente se deberá poder acceder a la opción de eliminar el personaje, con un modal o una nueva página, el modal dará mas nota. -> Para eliminar el pokemon habrá que añadir el creator como método de autenticación.

- Página única por cada pokemon

- Página de búsqueda de pokemones

- Página de creación de pokemon
    
    - Cada pokemon tendrá un formulario en el cuál, además de los datos recibidos regularmente se añadirá el string creator, para que solo el mismo creador pueda eliminarlo.
    
    - La imagen y el sonido deben de ser todos reales, su incorrecto funcionamiento afectará a la nota de su creador (todos debéis de crear al menos uno), os recomiendo utilizar un servicio como https://catbox.moe/ para subir los archivos y añadir los url al API

*El uso de CSS de forma debida para dar valor a la experiencia de uso de la página contará gravemente en la valoración de la práctica*

---

La práctica será desarrollada en el framework Fresh.

La página web se tendrá que desplegar en Deno deploy. En la entrega tendré que ver una url a visitar y un link al repositorio de GitHub donde hayáis subido el código con su respectiva release.

Más avisos para caminantes, antes de ver nada de vuestro código abriré la página en mi navegador de confianza (el cuál no es netscape, tranquilos).

La primera visualización gráfica afectará gravemente a mi opinión sobre el código que leeré Y EJECUTARÉ LOCALMENTE posteriormente.
