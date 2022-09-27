import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate ,Navigate } from "react-router-dom"
import { Navbar, Contacts, SearchOnMobile, ViewContact, EditContact, AddContact } from './Components/index'
import { GetContacts, GetAllGroups, CreatNewContact } from "../src/Service/ContactService"

function App() {
  const navgate = useNavigate()
  const [ForseRender, setForseRender]=useState(false)
  const [contacts, Setcontacts] = useState([])
  const [GetGroups, SetGroups] = useState([])
  const [Preloader, setPreloader] = useState(false)
  const [GetNewContact, SetNewContact] = useState({
    FullName: "",
    Photo: "",
    Mobile: "",
    Email: "",
    Job: "",
    Group: "",
  })

  useEffect(() => {
    const FetchData = async () => {
      try {
        setPreloader(true)
        const { data: ContactsData } = await GetContacts()
        const { data: GroupsData } = await GetAllGroups()
        SetGroups(GroupsData)
        Setcontacts(ContactsData)
        setPreloader(false)
      } catch (err) {
        console.log(err);
        setPreloader(false)
      }
    }
    FetchData()
  }, [ForseRender])

  const AddNewContactForm = async (e)=>{
    e.preventDefault();
    try{
      const {status} = await CreatNewContact(GetNewContact)
      if(status === 201 ){
        SetNewContact({ })
        setForseRender(!ForseRender)
        navgate('/')
      }
    }catch (err){
      console.log(err);
    }
  }

  
  const SetContactInfo = (event) => {
    SetNewContact({ ...GetNewContact, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Navbar />
      <SearchOnMobile />
      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />} />
        <Route path='/Contacts' element={<Contacts contacts={contacts} loading={Preloader} />} />
        <Route path='/AddContact' element={<AddContact Groups={GetGroups} AddNewContactForm={AddNewContactForm} Loder={Preloader} setcontactinfo={SetContactInfo} getcontactinfo={GetNewContact} />} />
        <Route path='/Contacts/:contactId' element={<ViewContact />} />
        <Route path='/Contacts/edit/:contactId' element={<EditContact setForseRender={setForseRender} ForseRender={ForseRender}/>} />
      </Routes>
    </>
  );
}

export default App;
