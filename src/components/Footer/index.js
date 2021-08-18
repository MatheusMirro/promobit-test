import React from 'react';
import {
  Container,
  TrendingContainer,
  TvContainer,
  MovieContainer,
  SearchContainer,
  Names
} from './styles';

import {
  FaFireAlt,
  FaSearch,
  FaTv,
  FaFolder
} from 'react-icons/fa';

import Link from 'next/link'

function Footer() {
  return (
    <Container>
      <div>
        <TrendingContainer>
          <Link href={'/'}>
            <FaFireAlt />
          </Link>
          <Names>Em alta</Names>
        </TrendingContainer>
      </div>

      <div>
        <MovieContainer>
          <Link href={`/movies`}>
            <FaFolder />
          </Link>
          <Names>Filmes</Names>
        </MovieContainer>
      </div>

      <div>
        <TvContainer>
          <Link href={`/series`}>
            <FaTv />
          </Link>
          <Names>Séries</Names>
        </TvContainer>
      </div>

      <div>
        <SearchContainer>
          <Link href={`/search`}>
            <FaSearch />
          </Link>
          <Names>Buscar</Names>
        </SearchContainer>
      </div>
    </Container>
  )
}

export default Footer
