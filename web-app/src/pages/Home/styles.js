import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 80vh;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Content = styled.div`

  color: #3A3E3B;
  width: 100%;

  padding: 96px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  width: 47%;
  padding: 0 24px;
  h1 {
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 32px;
    margin-top: 15px;
  }

  p {
    line-height: 32px;
    font-size: 18px;
    text-align: justify;
  }
`;

export const Form = styled.div`
  width: 47%;

`;

export const Input = styled.div`
  position: relative;
  margin-bottom: 24px;

  input {
    font-size: 24px;
    width: 100%;
    height: 60px;

    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    transition: 0.4s;
    color: #3A3E3B;

    &:focus {
    border: 2px solid #03191E;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transform: translateY(-4px);

    }

    &:focus + svg{
      color: #03191E;
      top: calc(50% - 4px);
    }


  }

  svg {
    color:#444;
    transition: 0.4s;
    position: absolute;
    transform: translateY(-50%);
    right: 15px;
    top: 50%;
    background: white;
  }
`;
