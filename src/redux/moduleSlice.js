import { createSlice } from "@reduxjs/toolkit";

const moduleSlice = createSlice({
    name:"mod",
    initialState: {
        modules: " "
    },
    reducers:{
        vente: (state) => {
            state.modules = "vente"
    
            },
        achat: (state) => {
            state.modules = "achat"
        
            },
        gestionDeStock: (state) => {
            state.modules = "gestion de stock"
        
            },
        comptabilité: (state) => {
            state.modules = "comptabilité"
            
            },
        finance: (state) => {
            state.modules = "finance"
                
            },
        gestionDePaie: (state) => {
            state.modules = "Gestion de paie"
                    
            },

        }
    }
)
export const {vente, gestionDePaie, finance, comptabilité, gestionDeStock, achat} = moduleSlice.actions
export default moduleSlice.reducer

