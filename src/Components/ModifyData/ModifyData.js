import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'


export const ModifyData = (props) => {
      const baseURL = props.baseURL;

      const { id } = useParams();

      const [sid, setSId] = useState('');
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [country, setCountry] = useState('');

      useEffect(() => {
            async function getData() {
                  await axios.get(`${baseURL}/students/${id}`)
                        .then((res) => {
                              setSId(res.data.id);
                              setName(res.data.name);
                              setEmail(res.data.email);
                              setCountry(res.data.country);
                        })
            }

            getData();
      }, [])

      const handleChangeSId = (e) => {
            setSId(e.target.value)
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

      const modifyStudent = async () => {
            await axios.put(`${baseURL}/students/${id}`, {
                  name: name,
                  email: email,
                  country: country
            })
                  .then((res) => {
                        console.log(res.data);
                        alert("Data Modified successfully");
                  })
                  .catch((err) => {
                        console.log(err);
                        alert("Error in modifying data");
                  })
      }


      return <>
            <div className="container">
                  <h1>Modify Students Data</h1>
                  <Form>
                        <Form.Group className="mb-3" >
                              <Form.Label>Id</Form.Label>
                              <Form.Control type="text" placeholder="Eg: 01" onChange={handleChangeSId} value={sid} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="Your Name Here!" onChange={handleChangeName} value={name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} value={email} />
                              <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                              </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                              <Form.Label>Country</Form.Label>
                              <Form.Control type="text" placeholder="India" onChange={handleChangeCountry} value={country} />
                        </Form.Group>

                        <Button variant="primary" onClick={modifyStudent}>
                              Modify
                        </Button>
                  </Form>
            </div>

      </>;
};
