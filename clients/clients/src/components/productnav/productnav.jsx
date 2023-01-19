import "./productnav.css"
import { Link, Outlet } from "react-router-dom";

const Productnav = () => {
    return ( 

        <header>
          
        <h1 className="logo"> ShopNow!...</h1>
       
   <nav  className="navbar">      
               
               <ul className="nav-links">
             <li> <Link className="links" to='/'>Home</Link></li> 
             <li> <Link className="links" to='/'>Men</Link></li>  
             <li> <Link className="links" to='/'>Women</Link></li> 
             <li> <Link className="links" to='/'>Kids</Link></li>  
             <li> <Link className="links" to='/products/dashboard'>profile</Link></li> 
       <form class="d-flex" role="search">
       <input class="form-control me-2" type="search" placeholder="Search For Products" aria-label="Search"/>
       <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
       
               </ul>
               </nav>
  
  
   <Outlet/>
  

   </header>

     );
}
 
export default Productnav;