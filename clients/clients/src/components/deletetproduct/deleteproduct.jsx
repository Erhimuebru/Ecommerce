import "./deleteproduct.css"
import UserNav from "../usernavbar/usernavbar";
import Footer from "../footer/footer"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DeleteProduct = () => {


  const navigate = useNavigate()
  const [product_name, setProductsName] = useState('')
  



  const deleteproduct = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3030/products/deleteproducts/${product_name}`, {
        product_name, 
      })
      .then(
        (response) => {
            navigate('/products')
            toast.success(response.data.message)
          
          console.log(response)
        },
        (error) => {
          toast.error(error.response.data.Error)
          toast.error(error.response.data.message)
          console.log(error)

        }
      )
    
  }



  return (
    <>
     <UserNav/>
    
      <div className='driverReg-container'>
        <div className='driverReg-info'>
          {/* <h2 className='driver-h2'>Add Products</h2> */}
        </div>

        <form action=''>
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='product_name'>
                 Enter Name Of Product You Want To Delete
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='product_name'
                  value={product_name}
                  onChange={(e) => setProductsName(e.target.value)}
                  required
                />
              </div>
            </div>


            <div class='driver-submit'>
              <button className='driver-btn' onClick={deleteproduct}type='submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
   <Footer/>
    </>
  )
}

export default DeleteProduct
