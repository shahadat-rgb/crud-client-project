import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Component/AddProduct/AddProduct';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import Navbar from './Component/Navbar/Navbar';
import UpdateProduct from './Component/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
           <Route path='/' element={<AddProduct/>}/>
           <Route path='/manageProduct' element={<ManageProduct/>} />
           <Route path='/manageProcut/update/:id' element={<UpdateProduct/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
