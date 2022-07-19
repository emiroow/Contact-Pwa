import React , {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Contacts from './Components/Contacts';
import SearchOnMobile from './Components/SearchOnMobile';
function App() {
  const [contacts , Setcontacts] = useState([])
  return (
    <>
      <Navbar />
      <SearchOnMobile />
      <Contacts contacts={contacts} />
    </>
  );
}

export default App;
