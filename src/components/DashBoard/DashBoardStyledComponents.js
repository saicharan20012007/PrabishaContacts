import styled from 'styled-components';
import { RiContactsBook2Line } from "react-icons/ri";
import {BsPersonAdd} from "react-icons/bs"
import {BiLogOut} from "react-icons/bi"

export const DashBoardContainer = styled.div`
height:100vh;
position:fixed;
width:250px;
background-color: #0d0f7c;
border-right-radius:7px;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;`


export const  Logo = styled.img`
height:100px;
width:180px;
border-radius:7px;`

export const TabItemsContainer = styled.div`


min-width:200px;
`

export const NavItem = styled.div`
  cursor: pointer;
  padding: 5px;
  color:white;
  ${'' /* margin-left:16px;
  margin-right:16px; */}
  font-size:18px;
  border-radius:7px;
  font-weight:600;
  padding-left:20px;
  line-height: 28px;
  height:40px;
  display: flex;
  align-items  :center ;
  
  ${({ isActive }) => isActive && 'background-color: #c99b3b;'}


`;


export const ContactsIcon = styled(RiContactsBook2Line)`
height:25px;
width:25px;
margin-right:10px;`

export const AddContactIcon = styled(BsPersonAdd)`
height:25px;
width:25px;
margin-right:10px;`

export const Logouticon = styled(BiLogOut)`
height:25px;
width:25px;
margin-right:10px;`


export const ContactsContainer = styled.div`
display:flex;
min-height:100vh;
`

export const Content = styled.div`
margin-left:250px;
min-height:100vh;
width:100%;
`