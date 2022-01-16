
import '../components/header.css'
import img1 from "../images/assets/img1.jpg"
import img2 from '../images/assets/img2.png'
import img3 from '../images/assets/img3.jpg'
import img4 from '../images/assets/img4.jpg'
import img5 from '../images/assets/img5.jpg'
import img6 from '../images/assets/img6.png'
import img7 from '../images/assets/img7.png'
import img8 from '../images/assets/img8.png'
import img9 from '../images/assets/img9.png'
import img10 from '../images/assets/img10.png'
import img11 from '../images/assets/img11.png'
import img12 from '../images/assets/img12.png'
import img13 from '../images/assets/img13.png'
import img14 from '../images/assets/img14.png'
import img15 from '../images/assets/img15.png'
import img16 from '../images/assets/img16.png'
import img17 from '../images/assets/img17.png'
import img18 from '../images/assets/img18.png'
import img19 from '../images/assets/img19.png'
import img20 from '../images/assets/img20.png'
import img21 from '../images/assets/img21.png'
import img22 from '../images/assets/img22.png'
import img23 from '../images/assets/img23.png'
import img24 from '../images/assets/img24.png'
import img25 from '../images/assets/img25.png'
import img26 from '../images/assets/img26.png'
import img28 from '../images/assets/img28.png'
import img29 from '../images/assets/img29.png'
import img30 from '../images/assets/img30.png'
import img31 from '../images/assets/img31.png'
import img32 from '../images/assets/img32.png'
function Header() {
    return (
        <div>
            {/* container1 */}
            {/* row1 */}
            <div className="container-fluid" id="con1">
                <div className="row" id="row1">
                    <div className="col-1"></div>
                    <div className="col-md-4 col-sm-12">
                        <p>ACE Just rolled out partner programs. <span id="click">Click Now </span> </p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-3 col-sm-12">Any Question?Call Now +923087019223</div>
                    <div className="col-1"></div>
                    <div className="col-md-2 col-sm-12">Contact Support</div>
                </div>
            </div>
            {/*-------------- section1---------- */}
            {/* row2 */}
            <div className="container-fluid" id="con2img1">
                <div className="container-fluid" id="con2img2">

                    <div className="container-fluid" id="con2child1">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-md-2 col-sm-6">
                                <h5>Logo Here</h5>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-md-1 col-sm-6">Solution</div>
                            <div className="col-md-1 col-sm-6">Industry</div>
                            <div className="col-md-1 col-sm-6">Offer</div>
                            <div className="col-md-1 col-sm-6">Data </div>
                            <div className="col-md-1 col-sm-6">About</div>
                            <div className="col-md-1"></div>
                            <div className="col-md-2 col-sm-6">
                                <button id="row2btn">Try for free</button>
                            </div>
                        </div>
                    </div>
                    {/* row3 */}
                    <div className="conatiner-fluid" id="con2child2">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-md-5 col-sm-12">
                                <h5>Its time to Give Your Business</h5>
                                <h1 id="row3h1">A FUTURISTIC SPIN</h1>
                                <p>Hot Any Software On Our Scured Cloud Now</p>
                            </div>
                            <div className="col-3"></div>
                            <div className="col-md-3 col-sm-12"><img src={img3} alt="" id="row3img" /></div>
                        </div>
                    </div>
                    {/* row4 */}
                    <div className="container-fluid" id="con2child3">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-md-2 col-sm-6"> <button id="row4btn1">Try for free</button></div>
                            <div className="col-md-3 col-sm-6"><button id="row4btn2">See plan & offer</button></div>
                            <div className="col-md-3 col-sm-12"><img src={img4} alt="" id="row4img" /></div>
                        </div>
                        {/* row5 */}
                        <div className="row">
                            <div className="col-10"></div>
                            <div className="col-2"><img src={img12} alt="" id="row5img" /></div>

                        </div>

                    </div>
                </div>
            </div>

            {/*---- ---------section2--------------------- */}
            {/* container3 */}
            <div class="container-fluid">
                {/* row6 */}
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2" ><h5>Trusted By</h5></div>
                </div>

                {/* row7 */}
                <div className="row">
                    <div className="col-md-2 col-sm-6"><img src={img6} alt="" className="row7img" /></div>
                    <div className="col-md-2 col-sm-6"><img src={img7} alt="" className="row7img" /></div>
                    <div className="col-md-2 col-sm-6"><img src={img8} alt="" className="row7img" /></div>
                    <div className="col-md-2 col-sm-6"><img src={img9} alt="" className="row7img" /></div>
                    <div className="col-md-2 col-sm-6"><img src={img10} alt="" className="row7img" /></div>
                    <div className="col-md-2 col-sm-6"><img src={img11} alt="" className="row7img" /></div>
                </div>
                {/* row8 */}
                <div class="row">
                    <div class="col-5"></div>
                    <div class="col-2">
                        <hr id="row8" />
                    </div>
                </div>
                {/* row9 */}
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-md-5 col-sm-12" id="row9">
                        <h5>Our Application <span > Hosting Services</span></h5>
                        <p>We host any Application on Our Secured Cloud at nominal prices</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-2 col-sm-12"><img src={img12} alt="" width="200px" /></div>
                </div>
            </div>
            <button id="btn-1">Cloud Hosting</button>
            <button id="btn-2">Buy License</button>
            {/*-------------------------- section3--------------- */}
            {/* container4 */}
            <div className="container-fluid">
                {/* row10 */}
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-2 col-sm-12" id="row10-1">
                        <img src={img13} alt="" id="row10img-1" />
                        <h5 id="row10h5-1">QuickBooks</h5>
                        <hr />
                        <p id="row10p-1"> Lorem ipsum dolor sit amet elit. Sint expedita ipsum harum rem quis error Sint ipsum
                            sit
                            quam eaque itaque unde? </p>
                        <button className="row10btn-1">Book Now</button>
                    </div>



                    <div className="col-md-8 col-sm-12" id="row10-2">
                        <img src={img15} alt="" id="row10img2" />
                        <h5 id="row10h5-2">Heading One</h5>
                        <hr id="line1" />
                        <p className="row10p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ipsam vitae tenetur
                            animi
                            voluptatum deserunt, sit <br /> amet consectetur sit amet consectetur animi voluptatum <br /> nam
                            reiciendis
                            ea
                            quia debitis nulla?</p>
                        <button className="row10btn-1">Compare Plan</button><br />
                        <button id="row10btn3-2">Explore QuickBooks Hosting</button>
                        <p className="row10p-2" >Unlimmited Add-One and Application scan be hosted along
                            with Quickbooks</p>
                    </div>
                </div>
            </div>

            {/* -----------------section4------------------------- */}
            {/* container5 */}
            <div class="container-fluid">
                {/* row11 */}
                <div className="row" id="row11">
                    <div className="col-1"></div>
                    <div className="col-md-4 col-sm-12" id="row11p">
                        <p>Tax Application</p>
                        <p >Hosting</p>
                        <hr id="line2" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-2 col-sm-12"><img src={img16} alt="" className="row11-12img-1" /></div>
                    <div className="col-md-2 col-sm-12"><img src={img17} alt="" className="row11-12img-2" /></div>
                </div>
                {/* row12 */}
                <div className="row" >
                    <div classNam="col-1"></div>
                    <div className="col-md-4 col-sm-12">
                        <p id='row12p'>Lorem ipsum dolor sit quis illum amet consectetur adipisicing elit. Velit delectus quis illum impedit
                            fugit expedita perspiciatis quis illum impedit quam libero animi dignissimos.</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-md-2 col-sm-12"><img src={img18} alt="" className="row11-12img-1" /></div>
                    <div className="col-md-2 col-sm-12"><img src={img19} alt="" className="row11-12img-2" /></div>
                </div>
            </div>
            {/*------------------------- section5----------------------- */}
            {/* container6 */}
            <div className="container">
                {/* row13 */}
                <div className="row" id="row13">
                    <div className="col-1" id="row13empty"></div>
                    <div className="col-md-4 col-sm-12" id="row13p">
                        <p>Have Question?</p>
                        <p >Ask Our Solution Consultant</p>
                        <hr id="line3" />
                        <h6>call pak +92 3087019223</h6>
                    </div>
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-3" id="row13btn-out"><button id="row13btn">Get a Call Back</button></div>
                </div>
            </div>
            {/* -----------section6--------------------- */}
            {/* container7 */}
            <div class="container-fluid">
                {/* row14 */}
                <div className="row" id="row14">
                    <div className="col-2"><img src={img12} alt="" width="200px" /></div>
                    <div className="col-3"></div>
                    <div className="col-md-3 col-sm-12">
                        <hr className="line4" />
                        <h5>Why Ace cloud <span> Hosting </span></h5>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-md-2 col-sm-12"><img src={img12} alt="" width="200px" /></div>
                </div>
                {/* row15 */}
                <div className="row" id="row15">
                    <div className="col-1"></div>
                    <div className="col-md-4 col-sm-12" id="row15p">
                        <h6>Always on Support</h6>
                        <hr id="line5" />
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi ipsum delectus incidunt magni
                            ullam aliquid dolor sit amet accusantium distinctio quo nesciunt. </p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-4 col-sm-12"><img src={img21} alt="" id="row15img" /></div>

                </div>
            </div>

            {/* ------------------section7------------------------ */}
            {/* container8 */}
            <div class="container-fluid">
                {/* row16 */}
                <div class="row" id="row16">
                    <div class="col-5"> </div>
                    <div class="col-3">
                        <hr class="line4" />
                        <h5>Customers <span> Testimonial </span></h5>
                    </div>
                </div>
                {/* row17 */}
                <div class="row" id="row17">
                    <div class="col-1"></div>
                    <div class="col-1"><button class="row17btn">
                        Back </button>
                    </div>
                    <div class="col-2" id="row17card-1">
                        <img src={img29} alt="" id="row17img1-1" />
                        <img src={img22} alt="" id="row17img2-1" />
                        <h6 id="row17p1-1">Name One</h6>
                        <img src={img30} alt="" id="row17img3-1" />
                        <p id="row17p2-1">Lorem ipsum dolor sit amet consectetur </p>
                    </div>

                    <div class="col-1"></div>

                    <div class="col-2" id="row17card-2">
                        <img src={img20} alt="" id="row17img1-2" />
                        <img src={img23} alt="" id="row17img2-2" />
                        <h6 id="row17p1-2">Name Two</h6>
                        <img src={img30} alt="" id="row17img3-2" />
                        <p id="row17p2-2">Lorem ipsum dolor sit amet consectetur dolor sit amet </p>
                    </div>

                    <div class="col-1"></div>

                    <div class="col-2" id="row17card-1">
                        <img src={img29} alt="" id="row17img1-1" />
                        <img src={img24} alt="" id="row17img2-1" />
                        <h6 id="row17p1-1">Name Three</h6>
                        <img src={img30} alt="" id="row17img3-1" />
                        <p id="row17p2-1">Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>

                    <div class="col-1"><button class="row17btn">
                        next </button>
                    </div>
                </div>
            </div>
            {/* -------------------------------section8-------------------------- */}


            {/* container9 */}
            <div class="container">
                {/* row18 */}
                <div class="row" id="row18">
                    <div class="col-1"><img src={img25} alt="" class="row18img" /></div>
                    <div class="col-2">
                        Facebook Rating <img src={img30} alt="" width="90px" />
                    </div>

                    <div class="col-1"><img src={img26} alt="" class="row18img" /></div>
                    <div class="col-2">
                        CPA Journal Rating <img src={img30} alt="" width="90px" />
                    </div>


                    <div class="col-1"><img src={img31} alt="" class="row18img" /></div>
                    <div class="col-2">
                        Searchen Rating <img src={img30} alt="" width="90px" />
                    </div>


                    <div class="col-1"><img src={img28} alt="" class="row18img" /></div>
                    <div class="col-2">
                        Group2 Rating <img src={img30} alt="" width="90px" />
                    </div>

                </div>
            </div>
            {/* ----------------------section9---------------- */}
            {/* container10 */}
            <div className="container-fluid" id="con10">
                {/* row19 */}
                <div className="row" >
                    <div className="col-2"></div>
                    <div className="col-2"><h5 id="row19h5">TRy Our Services Free For 30 Days</h5></div>
                    <div className="col-2"></div>
                    <div className="col-4"><input type="text" name="" id="row19input" placeholder="Type Your Email" /> <button id="row19btn">Subscribe</button></div>
                </div>
            </div>





        </div >

    )

}
export default Header;