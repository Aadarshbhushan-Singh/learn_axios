import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'


export const AddDetails = (props) => {
  const baseURL = props.baseURL;

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [dataArray, setDataArray]=useState([]);
  

  const handleChangeId = (e) => {
    setId(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeCountry = (e) => {
    setCountry(e.target.value)
  }

    const addStudent = async () => {
      await axios.post(`${baseURL}/students`, {
        id: id,
        name: name,
        email: email,
        country: country
      })
        .then((res) => {
          console.log(res)
          alert("Data Added Successfully")
        })
        .catch((err) => {
          alert("This data already exists");
        })
    }

    return <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" placeholder="Eg: 01" onChange={handleChangeId} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name Here!" onChange={handleChangeName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="India" onChange={handleChangeCountry} />
          </Form.Group>

          <Button variant="primary" onClick={addStudent}>
            Submit
          </Button>
        </Form>
      </div>
    </>;
  };
