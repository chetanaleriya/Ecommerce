import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Foot() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Higher Coading Language
              </h6>
              <p>
               We Provide Full stack Training in Java MEAN,MERN,Python and Android
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Java
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MERN
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MEAN
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Android
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Python
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Node
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Anguler
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               109,306 Prem Plaza,Ashok Nagar,Bhawarkua,Indore
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hcl.indore2023@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91-82368 09542
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91-95662 99542
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          hclindore2023.com
        </a>
      </div>
    </MDBFooter>
  );
}
