import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
export default class Hearder extends Component {
    render() {
        return (
          <Navbar fixed="top" className="p-0">
            <Container>
              <Navbar.Brand href="#home">
                <img src="/assets/image/logo.png" alt="Logo" className="logo"/>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Bảng điều khiển</Nav.Link>
                <Nav.Link href="#features">Giới thiệu</Nav.Link>
                <Nav.Link href="#pricing">Thanh toán</Nav.Link>
                <Nav.Link href="#pricing">Hóa đơn</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}
