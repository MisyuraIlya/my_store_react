import { createContext, useState, useContext, useEffect } from 'react';
import apiCategory from '../api/apiCategory';

const CategoriesContext = createContext();

const useCategories= () => {
    const context = useContext(CategoriesContext);
    if(!context){
        throw new Error('can not run without "CategoriesProvider"');
    }
    return context
}

const CategoriesProvider = (props) => {

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const loadCategories = async() => {
        setLoading(true);
        try{
            const data = await apiCategory.readCategories();
            setCategories(data["hydra:member"]);
        } catch(error){
            console.error('[states/CategoriesProvider] Failed to load data', {error})
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCategories();
    },[])

    const methods = {
        loadCategories,
    }

    const value = {
        loading,
        categories,
        methods
    }

    return (<CategoriesContext.Provider value={value} {...props}/>);
};

export {useCategories, CategoriesProvider};