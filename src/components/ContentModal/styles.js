import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 1024px){
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }
`;

export const ContentAbout = styled.div`
  padding: 10px;
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  justify-content: space-evenly;
  font-weight: 300;

  @media (max-width: 1024px){
    width: 58%;
    padding: 0;
    height: 100%;
  }
`;
export const ContentPortrait = styled.img`
  display: none;
  border-radius: 10px;

  @media (max-width: 1024px){
    display: flex;
    width: 38%;
  }

  @media (max-width: 425px){
    display: flex;
    width: 38%;
    object-fit: contain;
  }
`;

export const ContentLandscape = styled.img`
  border-radius: 10px;
  height: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentTagline = styled.i`
  padding-bottom: 10px;
  color: black;
  align-self: center;
  padding-top: 20px;
  padding: 40px;
`;

export const ContentTitle = styled.span`
  height: 12%;
  font-size: 35px;
  padding: 20px;
  color: black;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

@media(max-width: 1024px){
    font-size: 45px;
    text-align:center;
}

@media(max-width: 768px){
    font-size: 40px;
    padding-left: 1.1em;
    text-align: center;
}

@media(max-width: 425px){
    font-size: 25px;
}

@media(max-width: 320px){
    font-size: 20px;
}

`;

export const ContentDescription = styled.span`
  display: flex;
  height: 40%;
  overflow-y: scroll;
  padding: 15px;
  border-radius: 20px;
  color: black;
  font-family: 'Roboto', sans-serif;
  scrollbar-width: thin; /* Firefox */
  box-shadow: inset 0 0 5px #000000;
  text-align: justify;

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 1024px){
    font-size: 22px;
  }

  @media (max-width: 425px){
    font-size: 15px;
    text-align: justify;
  }

  @media (max-width: 375px){
    font-size: 15px;
    padding-bottom: 10px;
    text-align: justify;
  }
`;

export const ContentIframe = styled.iframe`
display: block;
margin-left: auto;
margin-right: auto;

@media(max-width: 1590px){
    width: 520px;
    height: auto;
}

@media(max-width: 768px){
    width: 320px;
    height: auto;
}

@media(max-width: 425px){
    width: 200px;
    height: auto;
}

@media(max-width: 320px){
    width: 160px;
    height: auto;
}
`;

