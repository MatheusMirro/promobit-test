import React, { useState, useEffect } from 'react';
import { Container } from '../styles/pages/Home';
import SingleContent from '../components/SingleContent/index';

function Home() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = () => {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=07b26e6d739634f4db4e60fd5c04f2b5&language=en-US")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setContent(json);
      });
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <Container>
      {
        content.results && content.results.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />
        ))
      }
    </Container>
  )
}
export default Home;
