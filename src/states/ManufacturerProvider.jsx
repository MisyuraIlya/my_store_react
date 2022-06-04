
import { createContext, useState, useContext, useEffect } from 'react';
import apiManufacturers from '../api/apiManufacturers'

const ManufacturerContext = createContext();

const useManufacturer = () => {
    const context = useContext(ManufacturerContext)
    if(!context){
        throw new Error('can not run without "ManufacturerProvider"');
    } 
    return context;
    }


const ManufacturerProvider = (props) => {

    // states
    const [loading,setLoading] = useState(false);
    const [manufacturer, setManufacturer] = useState([])

    //methods
    const loadManufacturer = async() => {
        setLoading(true);
        try {
            const data = await apiManufacturers.read();
            setManufacturer(data["hydra:member"]);
        } catch(error){
            console.error('[states/ManufacturerProvider] Failed to load data', {error})
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadManufacturer();
    }, [])

    const methods = {
        loadManufacturer,
    }

    const value = {
        loading,
        manufacturer,
        methods
    }

    return (<ManufacturerContext.Provider value={value} {...props}/>);
};

export {useManufacturer, ManufacturerProvider};