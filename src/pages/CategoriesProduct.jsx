import React, { useState, useEffect } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { Spinner,CardGroup} from 'reactstrap';
import CardSale from '../components/CardSale'
import MyPagination from '../components/MyPagination';
const CategoriesProduct = () => {

    const {loading, total,  productCategories, methods} = useProducts();
    const [currentPage, setCurrentPage] = useState(1)
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsCategories(paramsURL.id, currentPage)
    }, [currentPage])

    const totalNumber = Math.ceil(total / 5);
    return (
        <div>
            categories product  page
            {
            loading 
            ?
            <div className='spinner_center'>
                <Spinner>Loading...</Spinner>
            </div> 
            : 
            <CardGroup className='container_gorup_card'>
                {productCategories.map((item, index) => 
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

export default CategoriesProduct;