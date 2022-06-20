import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom'
const AddProduct = () => {
    const [error,setError] = useState('')

    const nameRef = useRef()
    const priceRef = useRef()
    const quantityRef = useRef()
    const navigate = useNavigate()
    const handleAddProduct = e =>{
        const pdName = nameRef.current.value;
        const price =  priceRef.current.value;
        const quantity = quantityRef.current.value;
        const product = {pdName,price,quantity}
        //   error condition
        if (!pdName && !price && !quantity) {
             setError("please fill up the all fild")
        }else if (!pdName) {
            setError('please fill up the product name')
        }else if (!price) {
            setError('please fill up the product price')
        }else if (!quantity) {
            setError('please fill up the product quantity')
        }else{
            // product data will post if you fill up all filed

            fetch("http://localhost:5000/addProduct",{
                method:'post',
                body:JSON.stringify(product),
                headers:{
                    'content-type':"application/json"
                },
               })
                 .then(res =>res.json())
                 .then(data => {
                    if (data.insertedId) {
                        alert('produced added in database')
                        e.target.reset()
                        navigate('/manageProduct',{replace:true})
                    }
                 })
        }
        e.preventDefault()

    }
    return (
        <div className='mt-5'>
            <form className='bg-info w-25 m-auto text-center p-3' onSubmit={handleAddProduct}>
            <h3 className='text-white'>Added Product</h3>
                 <input type="text" className='form-control' name="name"ref={nameRef} placeholder='add product' /> <br />
                 <input type="number" className='form-control' name="price" ref={priceRef}  placeholder='price' /> <br /> 
                 <input type="number" className='form-control' name="quantity" ref={quantityRef} placeholder='quantity' id="" />  <br /> 
                  <p className='text-white'>{error}</p>
                 <input type="submit" className='btn btn-dark w-100' value="addProduct" />
            </form>
        </div>
    );
};

export default AddProduct;