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
    const [productCategories, setProductCategories] = useState([])
    const [total, setTotal] = useState()
    

    const loadProductsManufacturer = async (id,page) => {
        setLoading(true);
        try{
            const data = await apiProducts.readManufacturer(id,page);
            setTotal(data["hydra:totalItems"]);
            setProductsManufacturer(data["hydra:member"]);
        } catch(error) {
            console.error('[states/ProductsProvider] faield to load data')
        } finally {
            setLoading(false);
        }
    }

    const loadProductsCategories = async (id,page) => {
        setLoading(true);
        try{
            const data = await apiProducts.readCategories(id,page);
            setTotal(data["hydra:totalItems"])
            setProductCategories(data["hydra:member"]);
        } catch(error) {
            console.error('[states/ProductsProvider] faield to load data')
        } finally {
            setLoading(false);
        }
    }

    const methods = {
        loadProductsManufacturer,
        loadProductsCategories,
    }

    const value = {
        loading,
        productsManufacturer,
        total,
        productCategories,
        methods
    }

    return (<ProductsContext.Provider value={value} {...props}/>);
};

export {useProducts, ProductsProvider};