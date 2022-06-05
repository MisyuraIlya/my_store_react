import React, { useEffect } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { Spinner,CardGroup} from 'reactstrap';
import CardSale from '../components/CardSale'
const CategoriesProduct = () => {

    const {loading, productCategories, methods} = useProducts();
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsCategories(paramsURL.id)
    }, [])

    return (
        <div>
            categories product  page
            {
            loading ? <Spinner>Loading...</Spinner>
            : 
            <CardGroup className='container_gorup_card'>
                {productCategories.map((item, index) => 
                <div key={index}>
                    <CardSale item={item}/>
                </div>
                )}
            </CardGroup>
            }
        </div>
    );
};

export default CategoriesProduct;