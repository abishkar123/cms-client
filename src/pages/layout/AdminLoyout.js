import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Footer } from './Footer'
import { Header } from './Header'

import { Sidebar } from './Sidebar';

export const AdminLoyout = ({children}) => {
  return (
    <div>
<Header/>
<main className='main'>
  <Container fluid>
    <Row>
      <Col xs="3"className=' side-bar bg-dark  text-light'>
      
        <Sidebar/>
         </Col>
      <Col>{children}</Col>
    </Row>
  </Container>
   
</main>

<Footer/>
      
    </div>
  )
}
