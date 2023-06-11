import { useState, useEffect } from "react";
import { Oval } from  'react-loader-spinner'

import { AllContactsContainer, AllContactsTitle, SearchContainer, SearchInput, SearchIcon, CardsContainer } from "./AllContactsStyledComponents";
import ContactCard from "../ContactCard";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://contacts-backend-64jn.onrender.com/contacts');
      const data = await response.json();
      setContacts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error retrieving contacts:', error);
      setLoading(false);
    }
  };

  return (
    <AllContactsContainer>
      <AllContactsTitle>
        All Contacts
      </AllContactsTitle>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search By Name" />
        <SearchIcon />
      </SearchContainer>
      <CardsContainer>
        {loading ? (
          <Oval
              height={80}
              width={80}
              color="blue"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="light-blue"
              strokeWidth={2}
              strokeWidthSecondary={2}

/>
        ) : (
          contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </CardsContainer>
    </AllContactsContainer>
  );
}

export default AllContacts;
