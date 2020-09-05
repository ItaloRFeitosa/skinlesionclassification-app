import styled, {keyframes, css} from 'styled-components';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;;
  }
`;

const breath = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;;
  }
`;

const addFadeIn = (time) => css`
  animation: ${fadeIn} ${time}s ease-in-out;
  transition: box-shadow ${time}s ease-in-out;
`;

const opacity = (opacityValue) => css`
  opacity: ${opacityValue};

`;

const addBreath = (time) => css`
  animation: ${breath} ${time}s infinite;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 16px auto 0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Content = styled.div`

  color: #3A3E3B;
  width: 100%;

  padding: 36px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;
export const MeanResult = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Image = styled.div`
  border-radius: 8px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  ${props => props.loading ? addBreath(1.5) : opacity(1)}
  transition: 1s linear;

  img {
    grid-column: 1;
    border-radius: 8px;
    height: 240px;
    width: 320px;
    object-fit: cover;
    grid-row: 1 / 3;
    ${props => props.loading ? opacity(0) : addFadeIn(1)}
  }
  p {
    grid-column: 1;
    background: #049f5999;
    grid-row: 2;

    color: white;
    align-self: end;
    text-align: end;
    padding: 16px;
    border-radius: 0 0 8px 8px;
    ${props => props.loading ? opacity(0) : addFadeIn(1)}
  }
`;
export const Results = styled.div``;
