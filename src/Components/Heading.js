import React from 'react'
import { Link } from 'react-router-dom';
import {  
     NavbarBrand,
     Navbar,
     Nav,
     NavItem,
     Container,
} from "reactstrap";

export const Heading = () => {
     return (
          <div>
               <Navbar color="dark">
                    <Container>    
                         <NavbarBrand href="/">My Group</NavbarBrand>
                         <Nav>
                              <NavItem>
                                   <Link className="btn btn-primary" to="/add"> Add User</Link>
                              </NavItem>
                         </Nav>
                    </Container>
               </Navbar>
          </div>
     )
}
