import { createContext, useState, useContext, useEffect } from 'react';
import apiProducts from '../api/apiProducts';

const ProductsContext = createContext();

const useProducts = () => {
    const context = useContext(ProductsContext)
    if(!context){
        throw new Error('can not run without "ProductsProvider"');
    }
    return context;
}

const ProductsProvider = (props) => {

    const [loading,setLoading] = useState(false);
    const [productsManufacturer, setProductsManufacturer] = useState([])

    const loadProductsManufacturer = async(id) => {
        setLoading(true);
        try{
            const data = await apiProducts.readManufacturer(id);
            setProductsManufacturer(data["hydra:member"]);
        } catch(error) {
            console.error('[states/ProductsProvider] faield to load data')
        } finally {
            setLoading(false);
        }
    }

    const methods = {
        loadProductsManufacturer,
    }

    const value = {
        loading,
        productsManufacturer,
        methods
    }

    return (<ProductsContext.Provider value={value} {...props}/>);
};

export {useProducts, ProductsProvider};