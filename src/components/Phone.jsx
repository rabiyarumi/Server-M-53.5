import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData()
    return (
        <div>
            <img src={phone.image} alt="" />
            <h2>Name: {phone.name}</h2>
            <h3>Price: {phone.price}</h3>
            <p>{phone.description}</p>

        </div>
    );
};

export default Phone;