import img1 from './pic/house.png'
import img2 from './pic/image 527.png'
import img3 from './pic/image 528.png'
import img4 from './pic/image 529.png'
import img5 from './pic/image 530.png'
import img6 from './pic/image 531.png'

function Header() {
    return (
        <div className="container Header">
        <div className="row">
          <div className="col col-lg-4 col-md-5 col-sm-12">
           <h1 className="search">
           Search for <br/> Homes in your<br/>  Neighborhood
           </h1>
             <p className="text">Online Estate Agency, the modern way to sell your own home.
              You can use griffin residential to market your property.</p>
              <p></p>
          </div>
          <div className="col col-lg-8 col-md-7 col-sm-12">
          <img className='a' src={img1} alt="" />
          </div>
        </div>

        <div className="row">
        <div class="col-lg-4  col-md-2 col-sm-12 "> 
        <img className='img20' src={img2} alt="" />
        </div>

        <div class="col-lg-2  col-md-2 col-sm-12 "> 
        <img className='img20' src={img3} alt="" />
        </div>

        <div class="col-lg-2  col-md-2 col-sm-12 "> 
        <img className='img20' src={img4} alt="" />
        </div>

        <div class="col-lg-2  col-md-2 col-sm-12 "> 
        <img className='img20' src={img5} alt="" />
        </div>
         
         
        <div class="col-lg-2  col-md-2 col-sm-12 "> 
        <img className='img20' src={img6} alt="" />
        </div>

      </div>
      </div>

    );
  }
  
  export default Header;
  