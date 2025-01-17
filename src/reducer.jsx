import { createSlice } from "@reduxjs/toolkit";


//create Slice is created in the name of AllValues and is imported
const allValues=createSlice({
    //the slice is named
    name:"valuesContainer",
    initialState:{
        //data object is created with the initial values
        data:{
             productImg:"https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg",
             productName:"Iphone 15",
             productDescription:"We create our own world",
             productRating:"4.09",
             productPrice:75000,
             productDiscount:15.46, 
        },
         //values object is created with the initial values
        values:{
             cart:0,
             productStock:36,
             subTotal:0,
             total:0,
             saved:0,
        }
             
    },
    reducers:{
        //totalCalculation reducer calculates the final price of the item by calculating the subtotal with the discount percentage
       totalCalculation:(state,action)=>{
        const a=state.data.productDiscount/100;
        const b=state.values.subTotal*a;
        const c=Math.floor(state.values.subTotal-b);
        state.values.saved=Math.floor(b);
        state.values.total=c;
       },
       //cartDecrement reducer reduces the items in cart and increases the stock count and calculates the subTotal according to its quantity
       cartDecrement:(state,action)=>{
        if(state.values.cart!=0){
            state.values.cart-=1;
            state.values.productStock+=1;
            state.values.subTotal-=75000;
        }
       },
       //cartIncrement reducer increases the items in cart and decreases the stock count and calculates the subTotal according to its quantity
       cartIncrement:(state,action)=>{
        if(state.values.productStock!=0){
            state.values.cart+=1;
            state.values.productStock-=1;
            state.values.subTotal+=75000;
        }
       }
    }
})
//reducers is destructured and exported from allValues
export const{cartIncrement,cartDecrement,totalCalculation}=allValues.actions;
//allValues is exported by default
export default allValues.reducer;