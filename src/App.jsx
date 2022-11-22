import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import { Navbar, Contacts, SearchOnMobile, ViewContact, EditContact, AddContact } from './Components/index'
import { GetContacts, DeleteContact, GetAllGroups, CreatNewContact } from "../src/Service/ContactService"
function App() {
  const navgate = useNavigate()
  const [ForseRender, setForseRender] = useState(false)
  const [contacts, Setcontacts] = useState([])
  const [GetGroups, SetGroups] = useState([])
  const [Preloader, setPreloader] = useState(false)
  const [GetQuery, SetQuery] = useState({ text: "" })
  const [GetFilteredContacts, SetFilteredContacts] = useState([])
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
        SetFilteredContacts(ContactsData)
        setPreloader(false)
      } catch (err) {
        console.log(err);
        setPreloader(false)
      }
    }
    FetchData()
  }, [ForseRender])

  const AddNewContactForm = async (e) => {
    e.preventDefault();
    try {
      const { status } = await CreatNewContact(GetNewContact)
      if (status === 201) {
        SetNewContact({})
        setForseRender(!ForseRender)
        navgate('/')
      }
    } catch (err) {
      console.log(err);
    }
  }


  const SetContactInfo = (event) => {
    SetNewContact({ ...GetNewContact, [event.target.name]: event.target.value })
  }

  const DeletContacts = async (ContactID) => {
    try {
      setPreloader(true)
      const { data: deletInfo } = await DeleteContact(ContactID)
      if (deletInfo) {
        const { data: ContactsData } = await GetContacts()
        const { data: GroupsData } = await GetAllGroups()
        SetGroups(GroupsData)
        Setcontacts(ContactsData)
        setPreloader(false)
      } else {

      }
    } catch (error) {
      console.log(error)
      setPreloader(false)
    }
  }

  const contactSearch = (event) => {
    SetQuery({ ...GetQuery, text: event.target.value })
    const allContacts = contacts.filter((item) => {
      return item.FullName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    SetFilteredContacts(allContacts)
  }

  return (
    <>
      <Navbar query={GetQuery} search={contactSearch} />
      <SearchOnMobile />
      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />} />
        <Route path='/Contacts' element={<Contacts contacts={GetFilteredContacts} deletcontact={DeletContacts} loading={Preloader} />} />
        <Route path='/AddContact' element={<AddContact Groups={GetGroups} AddNewContactForm={AddNewContactForm} Loder={Preloader} setcontactinfo={SetContactInfo} getcontactinfo={GetNewContact} />} />
        <Route path='/Contacts/show/:contactId' element={<ViewContact />} />
        <Route path='/Contacts/edit/:contactId' element={<EditContact setForseRender={setForseRender} ForseRender={ForseRender} />} />
      </Routes>
    </>
  );
}

export default App;
