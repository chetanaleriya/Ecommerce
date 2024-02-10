import React, { useState } from 'react';
import axios from "axios";
import UserProfile from './UserProfile';
import { useNavigate } from "react-router-dom";
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
function Login()
{
  const [uname,setName]=useState()
  const [upass,setPass]=useState()
  const navigate = useNavigate();
 
  function submitForm()
  {
     //console.log(uname,upass)
     const url = "http://localhost:4000/register"
     const formData = new FormData()
     formData.append('uname', uname)
     formData.append('upass', upass)
     axios.get(url, formData).then(result => {
      let restaurant = result.data.find(element => element.uname == uname && element.upass==upass);
       //alert(result.data)
       //console.log(restaurant)
       if(restaurant==undefined)
       {
        alert("Wrong Id or password")
       }
       else{
       // alert("Login")
        UserProfile.setName(uname)
        navigate("/post")

       }
     })
  }
    return (
      <MDBContainer fluid>
    
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">User Login</p>

             

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput placeholder='Enter Name' type='text' onChange={(e)=>setName(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput placeholder='Enter password' type='password' onChange={(e)=>setPass(e.target.value)}/>
              </div>
            
              <MDBBtn className='mb-4' size='lg' onClick={submitForm}>Submit</MDBBtn>

            </MDBCol>

           

          </MDBRow>

 
        </MDBCardBody>
      </MDBCard>
     

    </MDBContainer>
      );
}
export default Login