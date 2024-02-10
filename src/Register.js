import React from 'react';
import { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
function Register()
{
  const [uname, setUname] = useState('')
  const [uemail, setUemail] = useState('')
  const [upass, setUpass] = useState('')
  const [ucpass, setUcpass] = useState('')
  const handleApi = (e) => {
    const url = "http://localhost:4000/register"
    const formData = new FormData()
    formData.append('uname', uname)
    formData.append('uemail', uemail)
    formData.append('upass', upass)
    formData.append('ucpass', ucpass)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
  }

    return (
        <MDBContainer fluid>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">User Registration</p>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput placeholder='Enter Name' type='text' className='w-100' onChange={(e)=>setUname(e.target.value)} required/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput placeholder='Enter Email' type='email' onChange={(e)=>setUemail(e.target.value)}required/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput placeholder='Enter password' type='password' onChange={(e)=>setUpass(e.target.value)}required/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput placeholder='Confirmed Password' type='password' onChange={(e)=>setUcpass(e.target.value)}required/>
                  </div>
    
                
                  <MDBBtn className='mb-4' size='lg' onClick={handleApi}>Submit</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
}
export default Register