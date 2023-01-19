import Header from "../navbar/navbar";
import "./homepage.css"
import { Link } from "react-router-dom";
import Shoe from "../assets/cover.jpeg"
import Cover from "../assets/cover.jpeg"
import Gucci from "../assets/gucci.jpeg"
import Guccipolo from "../assets/guccipolo.jpeg"
import Nike from "../assets/nike.jpeg"
import WhiteS from "../assets/whiteS.jpeg"
import Xl from "../assets/xl.jpeg"
import ProductReview from "../productReview/productRe";
import Footer from "../footer/footer";
import OtherP from "../other/otherP";

const Homepage = () => {
    return ( 
        <>
        <Header />
        <div className="homepage">
            <h1 className="home-h1">Welcom To ShopNow!...</h1>
            <div className="homepage-container">
                <div className="homepage-text">
                    <h2 className="home-h2">Summer styles are <span className="h2-s">finally here </span> </h2>
                    <p className="home-p">Login/Register to add Products And Enjoy 50% Discount On All Current Products</p>
                    <div className="bodyLog">
                        <Link className="bodylog-btn" to="/users/login">Login</Link>
                        <Link className="bodylog-btn" to="/users/register">Register</Link>
                    </div>
                </div>

                <div className="firstbody-img">
                    <div className="first">
                        <img className="firs"  src={Shoe} alt="Shoe" />
                        <img className="firs"  src={Xl} alt="Shoe" />
                    </div>

                    <div className="second">
                        <img className="gucci" src={Gucci} alt="Gucci" />
                        <img src={Guccipolo} alt="Gucci polo" />
                        <img  className="gucci"  src={Nike} alt="Nike" />
                    </div>

                    <div className="first">
                        <img className="firs" src={WhiteS} alt=" White Shoe" />
                        <img className="firs"  src={Cover} alt=" Cover Shoe" />
                    </div>


                </div>
            </div>

            <ProductReview/>
            <OtherP/>
            <Footer/>
        </div>
        </>
    );
}
 
export default Homepage;