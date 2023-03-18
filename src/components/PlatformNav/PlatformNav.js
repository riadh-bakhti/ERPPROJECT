import React from 'react';
import "./PlatformNav.css";
import {useSelector} from "react-redux";

const PlatformNavbar = () => {
  const module = useSelector(state => state.modules);
  const nav_links = [
    ["Demandes de prix", "Bons de commande","Fournisseurs","Articles",],
    ["commandes","a facturer","articles","analyse",],
    ["tableau de bord","vente","achat", "rapport",],
    ["bulletins de l'employé","lot de bulletins de paie",],
    ["employés","contrats","départmements",],
    ["contacts"],
    ["vente","pistes","analyse"],
  ];
  let tab= [];
 
  for (let i = 0; i < nav_links.length; i++) {
  
  
  if (module === "achat") {
    tab = nav_links[0]}
    else if (
      module ==="vente"){ 
        tab = nav_links[1]
      }
      else if (
        module === "comptabilité") {
        tab = nav_links[2]
        }
        else if ( module === "Gestion de paie" )
        {
          tab = nav_links [3]
        }
        else if ( module === "finance"){
          tab = nav_links [4]
        }
      
    {
  }
    
  };

    return (
           <nav className="PlatformNav"> 
                <div className='PlatformNavLogo'>
                <a>GoMyErp</a>
                </div> 

                <div>
                   <ul className='PlatformNav-links'>
                    {tab.map((element)=><li><a>{element}</a></li>)}
                
                
                    </ul>
                </div>
            </nav>
    );
}

export default PlatformNavbar;
