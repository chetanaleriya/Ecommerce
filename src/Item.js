import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'; 
import logo from "./logo.svg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
function Item()
{
  
  const location = useLocation();
  const carddata = location.state;
  const [carddata1,setCarddata]=useState({})
  useEffect(()=>
  {
   fetch("http://localhost:4000/").then((result)=>{
       // console.log(result)
       result.json().then((data)=>
       {
        let carddata2 = data.find(element => element.pid == carddata.name);
           // console.log(restaurant)
          
           setCarddata(carddata2)
       })
    })
  },[])
      return(
        <div>
         <MDBCard >
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={carddata1.pimage} width="300px"/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{color:"red"}}>{carddata1.pname}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{carddata1.pprice} RS</MDBCardTitle>
            <MDBCardText>
            {carddata1.pdesc}
            </MDBCardText>
            <Button variant="primary" >Buy Now</Button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
        </div>
      )
}
export default Item