import React from 'react'
import { Link } from 'react-router-dom';
import { 
     ListGroupItem,
     ListGroup,
     Button,

} from 'reactstrap';

export const Userlist = () => {
     return (
          <div>
               <ListGroup>
                    <ListGroupItem className="d-flex">
                         <strong>User One</strong>
                    <div className="ml-auto">
                         <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
                         <Button  color="danger ">Delete</Button>
                    </div>
                    </ListGroupItem>
               </ListGroup>
               <ListGroup>
                    <ListGroupItem className="d-flex">
                         <strong>User Two</strong>
                    <div className="ml-auto">
                         <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
                         <Button  color="danger ">Delete</Button>
                    </div>
                    </ListGroupItem>
               </ListGroup>
               
          </div>
     )
}
