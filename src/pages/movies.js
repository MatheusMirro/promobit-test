import React, { useState, useEffect } from 'react';
import { Container } from '../styles/pages/Movies';
import axios from 'axios';
import SingleContent from '../components/SingleContent/index';
import Genres from '../components/Genres/index';
import CustomPagination from '../components/Pagination/index';
import useGenre from '../components/hooks/useGenre';

function Movies() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=07b26e6d739634f4db4e60fd5c04f2b5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL])
  return (
    <Container>
      <Genres
        selectedGenres={selectedGenres}
        genres={genres}
        setSelectedGenres={setSelectedGenres}
        setGenres={setGenres}
        setPage={setPage}
        type="movie"
      />
      {
        content && content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            vote_average={c.vote_average}
            media_type='movie'
          />
        ))
      }
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )} <br />
    </Container>
  )
}

export default Movies;
