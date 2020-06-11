import styled, {css, keyframes}from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(1px);
  }
`;

const addBounce = css`
  animation: ${bounce} 0.8s infinite;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

`;

export const Button = styled.button`
  align-items: center;
  background: ${props => props.done ? "green":"#03191E"};
  border: none;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: 0.4s;
  opacity: 0.95;
  cursor: pointer;

  ${props => props.loading ? addBounce : ''}

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.23), 0 10px 10px rgba(0,0,0,0.20);
    transform: translateY(-4px);
    opacity: 1;

  }

`;
