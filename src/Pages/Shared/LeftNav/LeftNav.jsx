import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect (() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
        
    } , [])
    return (

        <div>
            <h4 className='mt-2'>All Category:</h4>

            <div className='ps-4'>

            {
                categories.map(category => <p 
                key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-dark text-decoration-none'>{category.name}</Link>
                </p>)
            }

            </div>

            


            
        </div>
    );
};

export default LeftNav;