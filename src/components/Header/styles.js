import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
cursor: pointer;
position: relative;
display: flex;
justify-content: center;
text-transform: uppercase;
background-color:#2c5288;
font-size: 3vw;
padding-top: 10px;
box-shadow: 0px 1px 5px black;
color: white;
z-index: 100;
@media (max-width: 1000px) {
    padding-top: 15px;
    font-size: 6.4vw;
  }
`;
