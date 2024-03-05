import Link from '@mui/material/node/Link'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cards from '../components/Card';
const user="https://cdn-icons-png.flaticon.com/512/219/219970.png";
const ngo="https://th.bing.com/th/id/OIP.mnJk1gw6rnURKbzG1tZenwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7";

function UserNgo() {
  return (
    <Nav className="me-auto">
  <div className='container d-flex justify-content-center' style={{
    display:'flex',
    gap: 15,
  }}>
    <Cards image={user} actionType="login" type="user"/>
    <Cards image={ngo} actionType="login" type="Ngo"/>
    </div>
  </Nav>
  )
}

export default UserNgo