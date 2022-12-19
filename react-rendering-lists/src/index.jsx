import React from "react";
import ReactDOM from "react-dom/client"

const PokemonList = () => {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];

  return (
    <ul>
      {pokedex.map((p) => (
        <li key={p.number}>
          <p>{p.name}</p>
        </li>
      ))}
    </ul>
  );
};

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<PokemonList/>);
