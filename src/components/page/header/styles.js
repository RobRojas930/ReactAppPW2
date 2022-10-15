import styled from 'styled-components';

export const TopNav = styled.div`
  background-color: #333;
  overflow: hidden;
`;
export const TopNavLink = styled.a`
  float: left;
  color: #f2f2f2;
  text-align: center;
  cursor:pointer;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &active {
    background-color: #04aa6d;
    color: white;
  }
  `;

export const TopNavSearchBar = styled.input.attrs({ type: 'text' })`
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 55px;
  font-size: 17px;
  `;

  export const TopNavSearchButton = styled.button`
    float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  `;
