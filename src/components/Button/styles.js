import styled from "styled-components";



export const Button = styled.button`
  width: 342px;
  height: 74px;
  background-color:${props => props.buttonBack ? 'transparent' : '#baf329;'}; 
  border-radius: 14px;
  border: ${props => props.buttonBack ? ' 1px solid #ffffff;' :  'none'};
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  margin-top:${props => props.buttonBack ? '120px' : ''};
  /* color: #ffffff; */
  color: black;
  cursor: pointer;
  gap: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  #imgseta {
    width: 24px;
    ${props => props.buttonBack && `  transform: rotateY(140deg);`}
  }
`;

