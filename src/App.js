import * as React from 'react';
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from './firebase';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'

function App() {

  const [notes,setNotes] = useState([]);

  useEffect( () => {
    getDocs(collection(db, "notes"))
     .then(res => setNotes( res.docs.map( doc => ({ id: doc.id, ...doc.data()}))))
     .catch(err => console.log(err))
  } , [])

  return (
    <div className="App">
      <Navbar/>
      <CardContainer notes={notes} />
    </div>
  );
}

export default App;