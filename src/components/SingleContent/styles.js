import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 435px;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #f2ae30;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const Title = styled.b`
  width: 100%;
  text-align: center;
  font-size:17px;
  padding: 8px 0;
`;

export const Subtitle = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 3px;
  padding: 0 2px;
`;