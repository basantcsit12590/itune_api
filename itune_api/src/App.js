import React, { useEffect, useState } from 'react';
import Artist from "./components/Artist"

function App() {

  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("samsmith");

  useEffect(() => {
    getArtists();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getArtists = async () => {
    const data = await (await fetch(
      `https://itunes.apple.com/search?term=${query}`
    )).json();
      
      console.log(data.results);
      setArtists(data.results);
  }

  const getSearch = e => {
    setQuery(search);
  }

  return (
    <div className="App">
      <div className="search-box"  col-6 md-4  float-right>
        <input type="text" name="query" value={search} onChange={updateSearch}/>
        <button onClick={getSearch}>Search</button>
      </div>
      <div className="artists-wrap">
        {artists.map( artist => (
          <Artist artist={artist} key={artist.trackId}/>
        ))}
      </div>
    </div>
    


  );
}

export default App;
