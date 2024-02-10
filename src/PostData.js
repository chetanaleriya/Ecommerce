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
function PostData() {
  const [pid, setId] = useState('')
  const [pname, setName] = useState('')
  const [pdesc, setDesc] = useState('')
  const [pprice, setPrice] = useState('')
  const [pimage, setImage] = useState('')
 

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
    
  }
  const handleApi = (e) => {
    const url = "http://localhost:4000/"
    const formData = new FormData()
    formData.append('pid', parseInt(pid))
    formData.append('pname', pname)
    formData.append('pdesc', pdesc)
    formData.append('pprice', parseInt(pprice))
    formData.append('pimage', pimage)
   
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

           
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput placeholder="Product Id" type='number' className='w-100' onChange={(e)=>setId(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput placeholder="Product Name" type='text' onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput placeholder="Product Description" type='text' onChange={(e)=>setDesc(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput placeholder="Product Price"  type='number' onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput type='file' onChange={handleChange} />
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
    // <div>
    //   <input type="number" placeholder="Product Id" onChange={(e)=>setId(e.target.value)} /> <br />
    //  <input type="text" placeholder="Product Name" onChange={(e)=>setName(e.target.value)} /> <br />
    //  <input type="text" placeholder="Product Description" onChange={(e)=>setDesc(e.target.value)} /> <br />
    //  <input type="number" placeholder="Product Price" onChange={(e)=>setPrice(e.target.value)} /> <br />
    //  <input type="file" onChange={handleChange} /> <br />
    //   <button onClick={handleApi} >SUBMIT</button>
    // </div>
  );
}

export default PostData;