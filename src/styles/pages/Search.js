import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding-top: 30px;
  padding-bottom: 80px;
  background-color: #058bc0;
`;

export const SearchContainer = styled.div`
  @media (max-width: 1024px){
    margin-right: 30px;
  }

  @media (max-width: 554px){
    margin-right: 10px;
    padding-right: 30px;
  }

  @media (max-width: 425px){
    width: 85%;
  }

  @media (max-width: 320px){
    width: 75%;
  }
`;

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media (max-width: 1440px){
    color: orange;
  }

  @media (max-width: 554px){
    margin-right: 10px;
    padding-right: 30px;
  }

  @media (max-width: 425px){
    width: 85%;
  }

  @media (max-width: 320px){
    width: 75%;
  }
`;