import { useState } from 'react';
import {DashBoardContainer,Logo,TabItemsContainer,NavItem,ContactsIcon,AddContactIcon,ContactsContainer,Content} from './DashBoardStyledComponents';
import AllContacts from "../AllContacts"
import  AddContact  from '../AddContact';
const DashBoard = () => {
    const [activeTab, setActiveTab] = useState("all");
    

    const clickedAllContacts = () => {
        setActiveTab("all");
    }

    const clickedAddContact = () => {
        setActiveTab("add");
    }
    

    return (
        <ContactsContainer>
    <DashBoardContainer>
        <Logo src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"/>
        <TabItemsContainer>
            <NavItem onClick = {clickedAllContacts} 
            isActive = {activeTab === "all"}> 
             <ContactsIcon/> All Contacts</NavItem>
            <NavItem onClick = {clickedAddContact} isActive = {activeTab === 'add'}> <AddContactIcon/> Add Contact</NavItem>
        </TabItemsContainer>
        {/* <NavItem onClick = {clickedAddContact} > <Logouticon/>Log Out</NavItem> */}
        <h1> </h1>
    </DashBoardContainer>
    <Content>
    {
        activeTab === "all" && <AllContacts/>
    }
    {
        activeTab === "add" && <AddContact/>
    }
    </Content>
    </ContactsContainer>)
}

export default DashBoard;