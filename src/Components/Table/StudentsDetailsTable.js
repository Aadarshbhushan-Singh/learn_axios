import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap'
import './StudentsDetailsTable.css'
import axios from 'axios'
import {Link} from 'react-router-dom'




export const StudentsDetailsTable = (props) => {
  const baseURL = props.baseURL;

  const [array, setArray] = useState([]);
  const [id, setId] = useState();

  async function getData() {
    await axios.get(`${baseURL}/students`)
      .then((res) => {
        setArray(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
        alert("Error whilte fetching the data");
      })
  }

  useEffect(() => {
    getData();

  }, []);

  const deleteData = async (id) => {
    await axios.delete(`${baseURL}/students/${id}`)
      .then((res) => {
        alert("Data deleted successfully");
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        console.log(err);
        alert("Error in deleting data");
      })
  }

  return <>
    <Table striped bordered hover>
      <thead id="table_head">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {array.map((item) => {
          return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.country}</td>
            <td>
              <Link to={`/modifyData/${item.id}`}>
                <Button variant="primary" className="mx-3">Modify</Button>
              </Link>
              <Button variant="danger" className="mx-3" onClick={() => { deleteData(item.id) }}>Delete</Button>
            </td>
          </tr>
        })}

      </tbody>
    </Table>
  </>;
};
