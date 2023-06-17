import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzon from '../Qzon/Qzon';

const RightNav = () => {
    return (
        <div>
            <div>
            <h5 className='mt-5'> Login With: </h5>

            <Button className=' mb-2' variant="outline-primary"> <FaGoogle /> Login with Goggle</Button>
             <br></br>
             <Button variant="outline-secondary"> <FaGithub /> Login with GitHub</Button>
            </div>

            <div>

            <h4 className='mt-4'>Find us on:</h4>

            <ListGroup>
       
            <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
            <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
            <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
            </ListGroup>

            </div>

            <div>
                <Qzon></Qzon>
            </div>
            
        </div>
    );
};

export default RightNav;