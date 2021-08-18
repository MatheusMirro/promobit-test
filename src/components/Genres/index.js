import React, { useEffect } from 'react';
import { Chip } from "@material-ui/core";
import axios from 'axios';

function Genres({ selectedGenres, genres, setSelectedGenres, setGenres, setPage, type }) {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  }

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=07b26e6d739634f4db4e60fd5c04f2b5&language=en-US`);
    setGenres(data.genres);
  };

  console.log(genres);

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };

  }, [])
  return (
    <div> <br />
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
          style={{ margin: '15px' }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ marginRight: '38px' }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
