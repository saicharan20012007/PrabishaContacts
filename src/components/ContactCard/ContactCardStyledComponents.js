import styled from 'styled-components';
import {MdDeleteOutline} from 'react-icons/md'
export const Card = styled.div`
padding:7px;
min-height:250px;
width:45%;
box-shadow: rgba(96, 97, 112, 0.16) 0px 1px 2px 0px, rgba(40, 41, 61, 0.08) 0px 0px 1px 0px;
margin-bottom:20px;
border-radius: 16px;
border: 1px solid rgb(203, 213, 225);
background-color: rgb(255, 255, 255);
cursor: pointer;
`

export const CardTopSection = styled.div`
display:flex;
width:100%;`

export const Delete = styled(MdDeleteOutline)`
color:red;
height:25px;
width:25px;`

export const CardTopLeftSection = styled.div`
width:50%;
`

export const CardTopRightSection = styled.div`

width:50%;
`

export const Label = styled.p`
font-weight:500;
font-size:15px;
line-height:17px;
color:#64748b;
margin-right:7px;
margin-top:0px;
margin-bottom:5px;
margin-left:5px;
`

export const Wrapper = styled.div`
display:flex;

`




export const LabelValue = styled.p`
font-weight:500;
font-size:15px;
line-height:17px;
color:#334155;
margin-top:0px;
margin-bottom:5px;`

export const DeleteBtn = styled.button`
background-color: transparent;
border-width:0px;
cursor:pointer;`