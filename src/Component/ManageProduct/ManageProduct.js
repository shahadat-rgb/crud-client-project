import React, { useEffect, useState } from 'react';
import { Container ,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const ManageProduct = () => {
    const [addProduct,setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addProduct')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleDelete = id =>{
       const procced =  window.confirm("Are you sure you want to delete this product")
       if (procced) {
        fetch(`http://localhost:5000/addProduct/${id}`,{
            method:"delete"
        })
        .then(res => res.json())
        .then(data=> {
            if (data.deletedCount > 0) {
                 alert('product data has been deleted')
                 const reamingProduct = addProduct.filter(adPd => adPd._id !== id)
                 setProduct(reamingProduct)
            }
        })
       }
    }
    return (
        <div>
            <h1>all Product count : {addProduct.length}</h1>
             <Container>
              <Row>
              {
                addProduct.map(addPrd => 
                <article key={addPrd._id} className='card bg-dark text-center m-3 text-white font-bold w-25'>
                     <p>product name : {addPrd.pdName}</p>
                     <p>product price : {addPrd.price}</p>
                     <p>product quantity : {addPrd.quantity}</p>
                     <Link to={`/manageProcut/update/${addPrd._id}`}> <button className='btn btn-success'>update</button></Link>
                     <button onClick={()=>handleDelete(addPrd._id)} className='btn btn-danger m-2'>delete</button>
                </article>)
             }
              </Row>
             </Container>
        </div>
    );
};

export default ManageProduct;