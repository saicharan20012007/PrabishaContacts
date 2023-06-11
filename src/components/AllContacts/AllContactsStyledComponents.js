import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';


export const AllContactsContainer = styled.div`
min-height:100vh;
`

export const AllContactsTitle = styled.h2`
color:#362e68;
font-weight:400;
font-size:33px;
line-height:43px;
margin-left:50px;`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  height:50px;
  justify-content:space-between;
  margin:30px;
  border-radius:15px;
  cursor:pointer;
`;


export const SearchInput = styled.input`
  border: none;
  outline: none;
  width:85%;
  font-size: 18px;
  margin-left:5px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #666;
  font-size: 30px;
  align-self:right;
  margin-right:15px;
`;

export const CardsContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`