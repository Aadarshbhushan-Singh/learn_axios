import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'

const baseURL = 'http://localhost:3001';




function All_Axios_Method() {

  const [arrayState, setArrayState] = useState([]);

  // This is used for get request
  useEffect(async () => {
    await axios.get(`${baseURL}/posts`)
      .then((response) => {
        setArrayState(response.data);
      })
  }, [])

  const addData = async () => {
    alert ("Entered into function")
    // This is put request -- pay attention to the id that has been give in the URL
    
     await axios.put(`${baseURL}/posts/5`, {
       id: 5,
        name: "Monika Singh",
        email: "Monika@gmail.com",
        address: "Nepal"

      })
      .then((response)=>{
        console.log(response)
        alert("Data Modified");
      })
      .catch((err)=>{
        console.log(err)
      })


    // This is post request --- give attention that in post no id has been given in the URL.

     await axios.post(`${baseURL}/posts/`, {
       id: 5,
        name: "Monika Singh",
        email: "Monika@gmail.com",
        address: "Nepal"

      })
      .then((response)=>{
        console.log(response)
        alert("Data Modified");
      })
      .catch((err)=>{
        console.log(err)
      })

    // This is delete request -- pay attention that only id should be given in the data no other parameters.
    await axios.delete(`${baseURL}/posts/7`)
    .then((response)=>{
      console.log(response)
      alert("Data Deleted Successfully")
    })
    .catch((err)=>{
      console.log(err)
      alert("No data found");
    })

    //Creating axios instance -- put this just below import

    const client = axios.create({
      baseURL: 'http://localhost:3001'
    })

    // Instead of adding baseURL everytime, we can create an axios instance and use it in all the requests.
    useEffect(async () => {
      await client.get(`/posts`)
        .then((response) => {
          setArrayState(response.data);
        })
    }, [])

  }
  return (
    <div>
      <h1>Hello world</h1>
      {
        arrayState.map((item) => {
          return <h1 key={item.id}>{item.email}</h1>
        })
      }
      <button onClick={addData}>Make Request</button>

    </div>
  );
}

export default All_Axios_Method;
