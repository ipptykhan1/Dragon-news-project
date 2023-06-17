import React from 'react';
import photo1 from '../../../assets/qZone1.png'
import photo2 from '../../../assets/qZone2.png'
import photo3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'
import { Container } from 'react-bootstrap';

const Qzon = () => {
    return (
        <div>
          <Container className='mt-5 bg-secondary'>
            <h4 className='text-white' >Qzon:</h4>
            <img src={photo1} />
            <img src={photo2} />
            <img src={photo3} />
            
            </Container>

            <div className='mt-5' >
            <img src={bg} />

        
            </div>


        </div>
       
    );
};

export default Qzon;