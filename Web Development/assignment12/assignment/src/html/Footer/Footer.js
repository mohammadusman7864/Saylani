import img1 from './pic/logo.png'

function Footer() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
        <h4 className="footer">Popular Searches</h4>
        </div>
         
        <div className="col-lg-3 col-md-3 col-sm-12">
        <h4 className="footer">About Us</h4>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12">
        <h4 className="footer">Quick links</h4>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12">
        <h4 className="footer">Support</h4>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
        <p className="footer_txt">Apartment for Rent <br/>
          Apartment Low to hide <br/> Offices for Buy   <br/>
          Offices for Rent</p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12">
        <p className="footer_txt">Our Story <br/>Team Members  <br/>
        Careers <br/>Contact Us </p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12">
        <p className="footer_txt">Terms of Use <br/>
         Privacy Policy <br/>Contact Support <br/>
         FAQs</p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12">
        <p className="footer_txt">Help Center <br/>
         Loan Support  <br/>Managment <br/>Privacy Policy</p>
        </div>
        </div>

        <div className="row">
        <div className="col">
        <img className='company_icon' src={img1} alt="" />
        </div>

        <div className="col">
        <p className="company">© 2021 Besnik. All Rights Reserved </p>
        </div>
        </div>

   </div>  
    );
  }
  
  export default Footer;
  