import React from 'react';
import { img_300, unavailable } from '../../config/config';
import ContentModal from '../ContentModal';
import { Container } from './styles';
import { Image } from './styles';
import { Title } from './styles';
import { Subtitle } from './styles';


function SingleContent({ id, poster, title, date, media_type }) {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Container>
        <Image
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />

        <Title>{title}</Title> <br />
        <Subtitle>
          {media_type === "tv" ? "Série de TV" : "Filme"} <br />
          {date}
        </Subtitle>
      </Container>
    </ContentModal>
  );
}

export default SingleContent;
