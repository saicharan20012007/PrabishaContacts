
import {Card,CardTopSection,CardTopLeftSection,CardTopRightSection,Delete,Label,Wrapper,LabelValue,DeleteBtn} from "./ContactCardStyledComponents"

const ContactCard = (props) => {
    const contact = props.contact
    console.log(contact)
    

      const DeleteItem = async () => {
        try {
          const response = await fetch(`https://contacts-backend-64jn.onrender.com/delcontacts/${contact._id}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Failed to delete contact:', error);
        }
        window.location.reload();
      };
      
    return (
        <Card>
        <CardTopSection>
            <CardTopLeftSection>
                <Wrapper><Label>Name:</Label> <LabelValue>{contact.name}</LabelValue></Wrapper>
                <Wrapper><Label>Designation:</Label> <LabelValue>{contact.designation}</LabelValue></Wrapper>
                <Wrapper><Label>Work:</Label> <LabelValue>{contact.work}</LabelValue></Wrapper>
                <Wrapper><Label>Company:</Label> <LabelValue>{contact.company}</LabelValue></Wrapper>
                <Wrapper><Label>Industry:</Label> <LabelValue>{contact.industry}</LabelValue></Wrapper>
            </CardTopLeftSection>
            <CardTopRightSection>
                <Wrapper><Label>Date:</Label> <LabelValue>{contact.date}</LabelValue></Wrapper>
                <Wrapper><Label>Location:</Label> <LabelValue>{contact.location}</LabelValue></Wrapper>
                <Wrapper><Label>Email:</Label> <LabelValue>{contact.email}</LabelValue></Wrapper>
                <Wrapper><Label>Phone:</Label> <LabelValue>{contact.phone}</LabelValue></Wrapper>
                <Wrapper><Label>Website:</Label> <LabelValue>{contact.website}</LabelValue></Wrapper>
            </CardTopRightSection>
        </CardTopSection>
        <Wrapper><Label>Requirements:</Label> <LabelValue>{contact.requirements}</LabelValue></Wrapper>
        <Wrapper><Label>Responsibilities:</Label> <LabelValue>{contact.responsibilities}</LabelValue></Wrapper>
        <Wrapper><Label>Reference:</Label> <LabelValue>{contact.reference}</LabelValue></Wrapper>
        <Wrapper><Label>Remarks:</Label> <LabelValue>{contact.remarks}</LabelValue></Wrapper>

        <Wrapper><Label>Next Steps:</Label> <LabelValue>{contact.nxtSteps}</LabelValue></Wrapper>
     <CardTopSection> 
      <CardTopLeftSection> 
      <Wrapper><Label>Revenue:</Label> <LabelValue>{contact.revenue}</LabelValue></Wrapper>
      </CardTopLeftSection>
     <CardTopRightSection> 
     <Wrapper><Label>Status:</Label> <LabelValue>{contact.status}</LabelValue></Wrapper>
     </CardTopRightSection>
     <CardTopRightSection> 
     <Wrapper><DeleteBtn onClick={DeleteItem}><Delete/></DeleteBtn></Wrapper>
     </CardTopRightSection>
     </CardTopSection>

        </Card>
    )
}

export default ContactCard