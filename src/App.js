import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import * as React from 'react';
import db from './firebase';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react'

function App() {

  const [notes,setNotes] = useState([]);

  useEffect( () => {
    getDocs(collection(db, "notes"))
     .then(res => setNotes( res.docs.map( doc => ({ id: doc.id, ...doc.data()}))))
     .catch(err => console.log(err))
  } , [])


console.log(notes);
  

  // let notes = [
  //   {title:"schedule",
  //    desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //    img:"logo192.png",
  //    key:0
  //   },
  //   {title:"schedule",
  //    desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //    img:"logo192.png",
  //    key:1
  //   },
  //   {title:"schedule",
  //    desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //    img:"logo192.png",
  //    key:2
  //   },
  //   {title:"schedule",
  //    desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //    img:"logo192.png",
  //    key:3
  //   }, 
  // ]


  return (
    <div className="App">
      <Navbar/>
      {/* <CardContainer notes={notes} /> */}
    </div>
  );
}

export default App;