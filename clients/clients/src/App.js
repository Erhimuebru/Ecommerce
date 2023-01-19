import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import UserLogin from './components/login/login';
import NotFound from './components/notfonund/notfound';
import Products from './components/products/products';
import UserReg from './components/register/register';
import AddProducts from './components/addProducts/addProduct'
import { ToastContainer} from 'react-toastify';
import DeleteProduct from './components/deletetproduct/deleteproduct';
import EditProduct from './components/editproduct/editproduct';
import Dashboard from './components/dashboard/dashboard';


function App() {

  return (
    <main className="App">
    <ToastContainer
 position="top-center"
autoClose={9000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
  <Routes>
      <Route path='/' element={<Homepage/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/addproducts' element={<AddProducts/>}/>
       <Route path='/products/dashboard' element={<Dashboard/>}/>
       <Route path='/products/deleteproducts' element={ <DeleteProduct/>}/>
       <Route path='/products/updateproducts' element={  <EditProduct/>}/> 
      <Route path='/users/register' element={<UserReg/>}/>
      <Route path='users/login' element={<UserLogin/>}/>
      <Route path='/*' element={<NotFound/>}/>
  </Routes>
 
  {/* 
    <Route path='/products' element={<Products/>}/>
  
  */}
    </main>
  );
}

export default App;
