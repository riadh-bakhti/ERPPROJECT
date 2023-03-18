import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name:"client",
    initialState: {
        client:{
        Logo:"",
        CompanyName: "",
        CompanyAdresse: "",
        CompanyStreet: "",
        CompanyCity: "",
        CompanyState: "",
        CompanyZip: "",
        CompanyCountry: "",
        Gst: "",
        Vat: "",
        WebsiteLink: "",
        Phone: "",
        Mobile: "",
        Email: "",
        Tags: "",
        Id: 0,
    },
    clientData :[]

    },
    reducers:{
        toAddLogo: (state,action) => {
            state.client.Logo= action.payload
        },
        toAddCompanyName: (state, action) => {
            state.client.CompanyName = action.payload;
            state.client.Id = Math.random();
        
        },
        toAddCompanyAdresse: (state, action) => {
            state.client.CompanyAdresse = action.payload;
        },
        toAddCompanyStreet:(state, action) => {
            state.client.CompanyStreet = action.payload;
        },
        toAddCompanyCity:(state,action) => {
            state.client.CompanyCity = action.payload; 
        },
        toAddCompanyState:(state,action) => {
            state.client.CompanyState = action.payload; 
        }, 
        toAddCompanyZip:(state,action) => { 
            state.client.CompanyZip = action.payload; 
        },
        toAddCompanyCountry:(state,action) => { 
            state.client.CompanyCountry = action.payload; 
        },  
        toAddGst:(state,action) => { 
            state.client.Gst = action.payload;  
        },
        toAddVat:(state,action) => { 
            state.client.Vat = action.payload;
        },
        toAddWebsiteLink:(state,action) => {   
            state.client.WebsiteLink = action.payload; 
        }, 
        toAddPhone:(state,action) => { 
            state.client.Phone = action.payload;   
        },
        toAddMobile:(state,action) => {
            state.client.Mobile = action.payload;
        },
        toAddEmail:(state,action) => {
            state.client.Email = action.payload; 
        },
        toAddTags:(state,action) => {
            state.client.Tags = action.payload;
        }, 
        toAddClientData:(state,action)=> {
            state.clientData.push(action.payload);
        },

            
    
            

        }
    }
)
export const {toAddLogo,toAddClientData, toAddCompanyName, toAddCompanyAdresse, toAddCompanyStreet, toAddCompanyCity, toAddCompanyState, toAddCompanyZip, toAddCompanyCountry, toAddGst, toAddVat, toAddWebsiteLink, toAddPhone, toAddTags, toAddMobile, toAddEmail } = clientSlice.actions
export default clientSlice.reducer

