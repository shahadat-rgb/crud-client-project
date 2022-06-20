import React, { useEffect, useState } from 'react';
import {useParams,useNavigate}  from 'react-router-dom'
const UpdateProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [updatePrd,setUpdatePrd] = useState({})
    const {pdName,price,quantity} = updatePrd
    useEffect(()=>{
        const url = `http://localhost:5000/manageProcut/update/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdatePrd(data))
    },[id])
    const handlePrdChange = e =>{
        const productChangeValue = e.target.value;
        const productUpdate = { pdName : productChangeValue , price, quantity }
        setUpdatePrd(productUpdate)
    }
    const handlePriceChange = e =>{
        const priceChangeValue = e.target.value;
        const priceUpdate = { price : priceChangeValue,pdName, quantity }
        setUpdatePrd(priceUpdate)
    }
    const handleQuantityChange = e =>{
        const quantityChangeValue = e.target.value;
        const quantityUpdate = { quantity : quantityChangeValue , pdName,price }
        setUpdatePrd(quantityUpdate)
    }
    const handleUpdateProduct = e =>{
        fetch(`http://localhost:5000/manageProcut/update/${id}`,{
          method:"put",
          headers:{
            'content-type':"application/json"
          },
          body:JSON.stringify(updatePrd)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                 alert("product updated successfully")
                 navigate('/manageProduct',{replace:true})
            }
        })
       e.preventDefault()
    }
    return (
        <div className='text-center'>
             <ul>
                <li >product : {pdName} :: price : $ {price} :: quantity: {quantity}</li>
                <form onSubmit={handleUpdateProduct}>
                    <input type="text" onChange={handlePrdChange} name="product" value={pdName || ''}/> <br /> 
                    <input type="number" onChange={handlePriceChange} name="price" value={price || ''} /> <br />
                    <input type="number" onChange={handleQuantityChange} name='quantity' value={quantity || ''} /> <br />
                    <input type="submit" value="updateProduct" />
                </form>
             </ul>
        </div>
    );
};

export default UpdateProduct;