import react from 'react';
import "./Platform.css" ;
import PlatformNav from "../PlatformNav/PlatformNav";
import Contacts from '../Modules/Contacts/Contacts';
import StockManagement from '../Modules/GestionDeStock/StockManagment';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const Platform = () => {
    const module = useSelector(state => state.modules);
    console.log(module);
    return (
        <>
        <div>
        <PlatformNav />
        {module === 'gestion de stock'&& <StockManagement />}
        {module === 'Comptabilité'&& <Contacts />}
        
        </div>
            
        </>
    );
}

export default Platform;
