import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CustomPagination from '../components/Pagination/index';
import SingleContent from '../components/SingleContent/index';
import { Container } from '../styles/pages/Search';
import { SearchContainer } from '../styles/pages/Search';
import { ButtonContainer } from '../styles/pages/Search';

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=07b26e6d739634f4db4e60fd5c04f2b5&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <SearchContainer>
          <TextField
            style={{ flex: 1, width: '30%', backgroundColor: "gray" }}
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          /><br /><br />
          <ButtonContainer
            onClick={fetchSearch}
            variant="contained"
            style={{ display: 'flex', flex: '1', width: '15%' }}
          >
            <SearchIcon fontSize="large" />
          </ButtonContainer>
        </SearchContainer>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5, }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%", backgroundColor: "#f10f10f1" }} label="Buscar por filmes" />
          <Tab style={{ width: "50%", backgroundColor: "#058bc0" }} label="Buscar por séries de TV" />
        </Tabs>
      </ThemeProvider>
      <Container>
        {content && content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={type ? "tv" : "movie"}
            vote_average={c.vote_average}
          />
        ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}<br />
      </Container>
    </div>
  );
};

export default Search;