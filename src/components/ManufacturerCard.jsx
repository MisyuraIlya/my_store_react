import React from 'react';

const ManufacturerCard = (item) => {

    return (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.country}</h3>
        </div>
    );
};

export default ManufacturerCard;