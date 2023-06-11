import React, { useEffect } from 'react';

const LeftNav = () => {

    const [categories, setCategories] = useState ([]);

    useEffect(() => {
         fetch('http://localhost:5000/category')
         .then(res => res.json())
         .then(data => console.log(data))
         .catch(error => console.error(error))

    }, [])

    return (
        <div>
           <h3>Left Nav</h3>
        </div>
    );
};

export default LeftNav;