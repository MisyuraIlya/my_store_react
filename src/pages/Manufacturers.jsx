import React, { useEffect, useState } from 'react';

import {useManufacturer} from '../states/ManufacturerProvider'
import ManufacturerCard from '../components/ManufacturerCard';

const Manufacturers = () => {

    const { loading, manufacturer,  methods } = useManufacturer();
    return (
        <div>
            {
                loading 
                ? <h2>loading..</h2> 
                : <ManufacturerCard />
            }
        </div>
    );
};

export default Manufacturers;