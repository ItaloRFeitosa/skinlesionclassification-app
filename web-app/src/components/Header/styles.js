import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #03191E;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  h1 {
    color: #ecf1f8;
    font-size: 28px;
    font-weight: 100;
  }

  nav {
    justify-content: flex-end;
    a {
      margin: 0 30px;
      padding: 24px 30px 22px;
      text-decoration: none;
      font-weight: 500;
      font-size: 24px;
      color: #ecf1f8;
      transition: 0.2s;

      &:hover {
        padding: 24px 30px 27px;
        background: #ecf1f8;
        color: #03191E;
        border-bottom: 10px solid #03191E;
      }
    }

  }

`;

