import './productRe.css'
import Clothes from '../assets/4in1.jpeg' 
import Gray from '../assets/gray.jpeg'
import Black from '../assets/black.jpeg'
import Full from '../assets/full.jpeg'
const ProductReview = () => {
    return ( 
        <div className="productReview">
              <h1 className="home-h1">Products Review</h1>
              <div className="pack">
                <p className='p'>Men</p>
                <p className='p'>\</p>
                <p className='p'>Clothing</p>
                <p className='p'> \</p>
                <p className='p'>Basic Tee 6-Pack</p>
              </div>
            <div className="productsRe-container">
                <div className="clothes">
                    <img className='rewive-img' src={Clothes} alt="4in1" />
                </div>

                <div className="clothes">
                    <img className='rewive-i' src={Gray} alt="4in1" />
                    <img className='rewive-ii' src={Black} alt="4in1" />
                </div>

                <div className="clothes">
                    <img className='rewive-im' src={Full} alt="4in1" />
                </div>
            </div>

            <div className="packdown">
                <div className="packd">
                    <div className="rite">
                        <h3 className='rite-text'>Basic Tee 6-Pack</h3>
                        <p  className='pack-p'> The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>

                        <h5>Highlights</h5>
                        <p className='pack-p'>Hand cut and sewn locally</p>
                        <p  className='pack-p'>Dyed with our proprietary colors</p>
                        <p className='pack-p'>Pre-washed & pre-shrunk</p>
                        <p  className='pack-p'>Ultra-soft 100% cotton</p>

                        <h5>Details</h5>
                        <p  className='pack-p'>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
                    </div>
                       
                    <div className="rite-p">
                    <h3>$134</h3>
                        <div className="size-btn">
                            <p className='pack-p'>size guide</p>
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                        </div>

                        <div className="size-btn">
                            <button>L</button>
                            <button>XL</button>
                            <button>2XL</button>
                        </div>

                        <div className="size-btn">
                            <button>Add to bag</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductReview;