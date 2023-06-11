import React, { useState } from 'react';
import './index.css';

import {v4} from 'uuid';  


const AddContact = () => {
  const [showSuccessImage, setShowSuccessImage] = useState(false);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [status, setStatus] = useState('');
  const [work, setWork] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [requirements, setRequirements] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [reference, setReference] = useState('');
  const [remarks, setRemarks] = useState('');
  const [nxtSteps, setNxtSteps] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [revenue, setRevenue] = useState('');

  
  const insertContact = async (newContact) => {
    try {
      const response = await fetch('https://contacts-backend-64jn.onrender.com/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContact),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to insert contact:', error);
    }
  };

  const onAddNewContact = (event) => {
    event.preventDefault();

    const newContact = {
      id: v4(),
      name,
      designation,
      status,
      work,
      company,
      industry,
      requirements,
      reference,
      responsibilities,
      remarks,
      date,
      location,
      email,
      phone,
      website,
      revenue,
    };

    insertContact(newContact)
      .then(() => {
        console.log('Contact added');
        // Reset form fields
        setName('');
        setDesignation('');
        setStatus('');
        setWork('');
        setCompany('');
        setIndustry('');
        setRequirements('');
        setReference('');
        setResponsibilities('');
        setRemarks('');
        setDate('');
        setLocation('');
        setEmail('');
        setPhone('');
        setWebsite('');
        setRevenue('');
        setNxtSteps('');
        setShowSuccessImage(true); // Display success image

        setTimeout(() => {
          setShowSuccessImage(false); // Hide success image after 3 seconds
        }, 3000);
      })
      
      .catch((error) => {
        console.error('Error adding contact:', error);
      });
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const  onChangeDesignation = (event) => {
    setDesignation(event.target.value);
  };
  const  onChangeResponsibilities = (event) => {
    setResponsibilities(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const onChangeWork = (event) => {
    setWork(event.target.value);
  };

  const onChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const onChangeIndustry = (event) => {
    setIndustry(event.target.value);
  };

  const onChangeReference = (event) => {
    setReference(event.target.value);
  };

  const onChangeRemarks= (event) => {
    setRemarks(event.target.value);
  };

  const onChangeRequirements= (event) => {
    setRequirements(event.target.value);
  };

  const onChangeNxtSteps = (event) => {
    setNxtSteps(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeWebsite = (event) => {
    setWebsite(event.target.value);
  };

  const onChangeRevenue = (event) => {
    setRevenue(event.target.value);
  };

 
  

  

  const renderNameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          NAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={name}
          onChange={onChangeName}
          placeholder="Name"
        />
      </>
    );
  };

  const renderCompanyField = () => {
    return (
      <>
        <label className="input-label" htmlFor="company">
          COMPANY
        </label>
        <input
          type="text"
          id="company"
          className="username-input-field"
          value={company}
          onChange={onChangeCompany}
          placeholder="Company"
        />
      </>
    );
  };

  const renderWorkField = () => {
    return (
      <>
        <label className="input-label" htmlFor="work">
          WORK
        </label>
        <input
          type="text"
          id="work"
          className="username-input-field"
          value={work}
          onChange={onChangeWork}
          placeholder="Work"
        />
      </>
    );
  };

  const renderDesignationField = () => {
    return (
      <>
        <label className="input-label" htmlFor="designation">
          DESIGNATION
        </label>
        <input
          type="text"
          id="designation"
          className="username-input-field"
          value={designation}
          onChange={onChangeDesignation}
          placeholder="Designation"
        />
      </>
    );
  };

  const renderIndustryField = () => {
    return (
      <>
        <label className="input-label" htmlFor="industry">
          INDUSTRY
        </label>
        <input
          type="text"
          id="industry"
          className="username-input-field"
          value={industry}
          onChange={onChangeIndustry}
          placeholder="Industry"
        />
      </>
    );
  };

  const renderStatusField = () => {
    return (
      <>
        <label className="input-label" htmlFor="status">
          STATUS
        </label>
        <input
          type="text"
          id="status"
          className="username-input-field"
          value={status}
          onChange={onChangeStatus}
          placeholder="Status"
        />
      </>
    );
  };

  const renderRequirementsField = () => {
    return (
      <>
        <label className="input-label" htmlFor="requirements">
          REQUIREMENTS
        </label>
        <input
          type="text"
          id="requirements"
          className="username-input-field"
          value={requirements}
          onChange={onChangeRequirements}
          placeholder="Requirements"
        />
      </>
    );
  };

  const renderReferenceField = () => {
    return (
      <>
        <label className="input-label" htmlFor="reference">
          REFERENCE
        </label>
        <input
          type="text"
          id="reference"
          className="username-input-field"
          value={reference}
          onChange={onChangeReference}
          placeholder="Reference"
        />
      </>
    );
  };


  const renderResponsibilitiesField = () => {
    return (
      <>
        <label className="input-label" htmlFor="responsibilities">
          RESPONSIBILITIES
        </label>
        <input
          type="text"
          id="responsibilities"
          className="username-input-field"
          value={responsibilities}
          onChange={onChangeResponsibilities}
          placeholder="Responsibilities"
        />
      </>
    );
  };

  
  const renderRemarksField = () => {
    return (
      <>
        <label className="input-label" htmlFor="reference">
          REMARKS
        </label>
        <input
          type="text"
          id="remarks"
          className="username-input-field"
          value={remarks}
          onChange={onChangeRemarks}
          placeholder="Remarks"
        />
      </>
    );
  };


  const renderNxtStepsField = () => {
    return (
      <>
        <label className="input-label" htmlFor="nxtsteps">
          NEXT STEPS
        </label>
        <input
          type="text"
          id="nxtsteps"
          className="username-input-field"
          value={nxtSteps}
          onChange={onChangeNxtSteps}
          placeholder="Next Steps"
        />
      </>
    );
  };

  const renderDateField = () => {
    return (
      <>
        <label className="input-label" htmlFor="date">
         DATE
        </label>
        <input
          type="date"
          id="date"
          className="username-input-field"
          value={date}
          onChange={onChangeDate}
          placeholder="Date"
        />
      </>
    );
  };

  const renderEmailField = () => {
    return (
      <>
        <label className="input-label" htmlFor="email">
         EMAIL
        </label>
        <input
          type="text"
          id="email"
          className="username-input-field"
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
        />
      </>
    );
  };

  const renderLocationField = () => {
    return (
      <>
        <label className="input-label" htmlFor="location">
         LOCATION
        </label>
        <input
          type="text"
          id="location"
          className="username-input-field"
          value={location}
          onChange={onChangeLocation}
          placeholder="Location"
        />
      </>
    );
  };

  const renderPhoneField = () => {
    return (
      <>
        <label className="input-label" htmlFor="phone">
         PHONE
        </label>
        <input
          type="text"
          id="phone"
          className="username-input-field"
          value={phone}
          onChange={onChangePhone}
          placeholder="Phone"
        />
      </>
    );
  };

  const renderWebsiteField = () => {
    return (
      <>
        <label className="input-label" htmlFor="website">
         WEBSITE
        </label>
        <input
          type="text"
          id="website"
          className="username-input-field"
          value={website}
          onChange={onChangeWebsite}
          placeholder="website"
        />
      </>
    );
  };

  const renderRevenueField = () => {
    return (
      <>
        <label className="input-label" htmlFor="revenue">
         REVENUE
        </label>
        <input
          type="text"
          id="revenue"
          className="username-input-field"
          value={revenue}
          onChange={onChangeRevenue}
          placeholder="Revenue"
        />
      </>
    );
  };



  
  

  return (<>
    <h2 className='title'>Add New Contact</h2>
     {!showSuccessImage && <form className="form-container" onSubmit={onAddNewContact} >
        
        <div className="input-container">{renderNameField()}</div>
        <div className="input-container">{renderDesignationField()}</div>
        <div className="input-container">{renderStatusField()}</div>
        <div className="input-container">{renderWorkField()}</div>
        <div className="input-container">{renderCompanyField()}</div>
        <div className="input-container">{renderIndustryField()}</div>
        <div className="input-container">{renderRequirementsField()}</div>
        <div className="input-container">{renderResponsibilitiesField()}</div>
        <div className="input-container">{renderReferenceField()}</div>
        <div className="input-container">{renderRemarksField()}</div>
        <div className="input-container">{renderNxtStepsField()}</div>
        <div className="input-container">{renderDateField()}</div>
        <div className="input-container">{renderLocationField()}</div>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPhoneField()}</div>
        <div className="input-container">{renderWebsiteField()}</div>
        <div className="input-container">{renderRevenueField()}</div>


        <button type="submit" className="login-button" onClick={onAddNewContact}>
          Add Contact
        </button>
        {/* {showSubmitError && <p className="error-message">*{errorMsg}</p>} */}
      </form>}
      {showSuccessImage && (
          <div className="success-image">
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" className = "suc-img" alt="Success" />
            <h2 className='succcess-text'>Contact Added Successfully...</h2>
          </div>
        )}
      </>
   
  );
};

export default AddContact;