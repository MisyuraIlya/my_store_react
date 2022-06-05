import React, { useEffect, useState } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { CardGroup, Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import CardSale from '../components/CardSale'
import MyPagination from '../components/MyPagination';

const ManufacturerProduct = () => {

    const {loading, total, productsManufacturer, methods} = useProducts();
    const [currentPage, setCurrentPage] = useState(1)
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsManufacturer(paramsURL.id,currentPage);
    },[currentPage])

    const totalNumber = Math.ceil(total / 5);
    
    return (
        <div>
            prodcut page
            {
            loading 
            ?
            <div className='spinner_center'>
                <Spinner>Loading...</Spinner>
            </div> 
            : 
            <CardGroup className='container_gorup_card'>
                {productsManufacturer.map((item, index) => 
                <div key={index}>
                    <CardSale item={item}/>
                </div>
                )}
            </CardGroup>
            }
            <MyPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalNumber={totalNumber}/>
        </div>
    );
};

export default ManufacturerProduct;