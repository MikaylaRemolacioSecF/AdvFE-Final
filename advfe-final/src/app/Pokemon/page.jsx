'use client';
import React, { useState } from 'react';

function RandomPokemon() {
  const [pokemon, setPokemon] = useState([]);  //list of pokemon
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // function to get 3 random pokemon ids from 1 to 151
  const getRandomPokemonIds = () => {
    const ids = new Set();
    while (ids.size < 3) {
      const randomId = Math.floor(Math.random() * 200); //random id from 1 to 151
      ids.add(randomId);
    }
    return [...ids];
  };

  // function to fetch pokemon data from the api
  const fetchPokemon = async () => {
    setLoading(true);      // show loading message
    setError(null);        // reset error

    try {
      const ids = getRandomPokemonIds(); // get 3 random ids

      // fetch data for each pokemon id
      const promises = ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
          if (!res.ok) throw new Error('failed to fetch pokemon');
          return res.json();
        })
      );

      // wait for all fetches to complete
      const results = await Promise.all(promises);
      setPokemon(results); // store the results in state
    } catch (err) {
      setError(err.message); // show error message if something wrong
      setPokemon([]);
    } finally {
      setLoading(false); // hide loading message
    }
  };

  return (
    <div>
      <h3>Get 3 Starter Pokemon</h3>

      {/* button to get random pokemon */}
      <button onClick={fetchPokemon}>Get pokemon</button>

      {loading && <p>loading...</p>}
      {error && <p style={{ color: 'red' }}>error: {error}</p>}

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        {pokemon.map((poke) => (
          <div
            key={poke.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '150px',
            }}
          >
            <h3 style={{ textTransform: 'capitalize' }}>{poke.name}</h3>
            <img src={poke.sprites.front_default} alt={poke.name} />
          </div>
        ))}
      </div><br />
    </div>
  );
}

export default RandomPokemon;
