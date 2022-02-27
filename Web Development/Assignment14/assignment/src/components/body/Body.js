import React from 'react'
import '../body/Body.css'
import img3 from './../../assets/img3.png'
import img4 from './../../assets/img4.png'
import img5 from './../../assets/img5.png'
import img7 from './../../assets/img7.png'
import img8 from './../../assets/img8.png'
import img9 from './../../assets/img9.png'
import img10 from './../../assets/img10.png'
import img11 from './../../assets/img11.png'
import img12 from './../../assets/img12.png'
import img13 from './../../assets/img13.png'
import img14 from './../../assets/img14.png'
import img15 from './../../assets/img15.png'
import img16 from './../../assets/img16.png'
import img17 from './../../assets/img17.png'
import img18 from './../../assets/img18.png'
import img20 from './../../assets/img20.png'
import img21 from './../../assets/img21.png'
import img22 from './../../assets/img22.png'

import Button from '../button/Button'


export default function Body() {
    return (
        <div>
           
            <div className="container-fluid" id='con2'>
               
                <div className="row" id='con2row1'>
                    <div className="col-1"></div>
                    <div className="col-md-4 col-sm-12" id='con2h1'>
                        <h1>Building things is <br /> our mission.</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-9"></div>
                    <div className="col-md-3 col-sm-12" id='con2row2' >
                        <p id='con2p1'>Feature Projects</p>
                        <p id='con2p2'>The National University of Architecture</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-1">
                        <Button title="Back" margin-left="30px" /></div>
                    <div className="col-1">
                        <Button title="Next" /></div>
                </div>
            </div>
          
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-md-3 col-sm-12" id='con3row1'>Our Reputation</div>
                </div>
                
                <div className="row" id='con3row2'>
                    <div className="col-2"></div>

                   
                    <div className="col-md-2 col-sm-6" id='con3row2card1'>
                        <img src={img4} alt="" />
                        <p className='con3row2p1'>Best Services</p>
                        <p className='con3row2p2'>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-2 col-sm-6" id='con3row2card2'>
                        <img src={img4} alt="" />
                        <p className='con3row2p1'>Best Team</p>
                        <p className='con3row2p2' >Cursus semper tellus volutpat aliquet lacus. </p>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-2 col-sm-6" id='con3row2card3'>
                        <img src={img5} alt="" />
                        <p className='con3row2p1'>Best </p>
                        <p className='con3row2p2'>Ultricies at ipsum nunc, tristique nam lectus.</p>
                    </div>
                </div>
            </div>
            
            <div className="container" id='con4-1'>
                <div className="container-fluid">
                   
                    <div className="row" id='con4-2'>
                        <div className="col-7" ></div>
                        <div className="col-md-5 col-sm-12" id='con4row1'><p id='con4row1p1'>About us</p>
                            <p id='con4row1p2'>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br /> <br /> We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                            <Button title="More On Our History" />
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-md-3 col-sm-12" id='con5row1'>Services</div>
                </div>
               
                <div className="row" id='con3row2'>
                    <div className="col-2"></div>
                    <div className="col-md-2 col-sm-6" id='con5row2card1'>
                        <img src={img7} alt="" />
                        <p className='con5row2p'>Construction</p>

                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-2 col-sm-6" id='con5row2card2'>
                        <img src={img8} alt="" />
                        <p className='con5row2p'>Renovation</p>

                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-2 col-sm-6" id='con5row2card3'>
                        <img src={img9} alt="" />
                        <p className='con5row2p'>consultation</p>

                    </div>
                </div>
                
                <div className="row" id='con5row3'>
                    <div className="col-2"></div>
                    <div className="col-md-2 col-sm-6" id='con5row3card1'>
                        <img src={img10} alt="" />
                        <p className='con5row3p'>Repair Services</p>

                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-2 col-sm-6" id='con5row3card2'>
                        <img src={img11} alt="" />
                        <p className='con5row3p'>Arcitecture</p>

                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-2 col-sm-6" id='con5row3card3'>
                        <img src={img12} alt="" />
                        <p className='con5row3p'>Electric</p>

                    </div>
                </div>

            </div>
           
            <div className="container-fluid">
                
                <div className="row" >
                    <div className="col-4"></div>
                    <div className="col-md-2 col-sm-12" id='con6row1'><h1>84</h1>

                        <p>Happy Client</p></div>
                    <div className="col-1" id='con6row1img'><img src={img14} alt="" /></div>
                </div>
                
                <div className="row" >
                    <div className="col-1"></div>
                    <div className="col-1" id='con6row2img'><img src={img13} alt="" /></div>
                    <div className="col-md-2 col-sm-12" id='con6row2h1'><h1>123</h1>
                        <p>Proj completed</p></div>
                    <div className="col-4"></div>
                    <div className="col-md-3 col-sm-12"><h2 id='con6row2h2'>30 Years    Experience</h2>
                        <p id='con6row2p'>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                        <Button title="Contact Us" />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-4"></div>
                    <div className="col-md-2 col-sm-12" id='con6row3h1'><h1>37</h1>

                        <p>Awards Win</p></div>
                    <div className="col-1" id='con6row3img'><img src={img15} alt="" /></div>
                </div>
               
                <div className="row" >
                    <div className="col-2"></div>
                    <div className="col-md-2 col-sm-12" id='con6row4h1'><h1>30</h1>

                        <p>Year in Business</p></div>
                    <div className="col-1" id='con6row4img'><img src={img16} alt="" /></div>
                </div>
            </div>
            
            <div className="container-fluid" id='con7'>
                
                <div className="row" id='con7row1'>
                    <div className="col-1"></div>
                    <div className="col-md-7 col-sm-12" id='con7row1p'>
                        <p >Free consultation with exceptional quality</p>
                        <p> Just one call away: +84 1102 2703 </p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-3 col-sm-12" >
                        <Button title="Get your consultation" /></div>
                </div>
            </div>
         
            <div className="container">
               
                <div className="row">

                    <div className="col-1"><h3 id='con8row1'>Projects</h3></div>
                </div>
               
                <div className="row">

                    <div className="col-2" id='con8row2'><p>All</p><p>Commercial</p><p>Residential</p>
                        <p>Others</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5" ><img src={img18} alt="" />

                    </div>
                    <div className="col-4"><img src={img20} alt="" /></div>
                </div>
               
                <div className="row" id='con8row3'>
                    <div className="col-3"></div>
                    <div className="col-5" ><img src={img18} alt="" />

                    </div>
                    <div className="col-4"><img src={img20} alt="" /></div>
                </div>
               
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-1">
                        <Button title="Back" />
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Button title="Next" />
                    </div>
                </div>
            </div>
           
            <form action="">
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-md-5 col-sm-12" id='con9row1'>
                            <h4>What can us do for you?</h4>
                            <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>

                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-md-2 col-sm-12">
                            <input type="text" placeholder='Your Name' required />
                            <input type="text" placeholder='Reason for Contacting' required
                                className='con9row2input' />
                        </div>
                        <div className="col-md-2 col-sm-12" id='con9row2'>
                            <input type="text" placeholder='Email' required />
                            <input type="text" placeholder='Phone' required className='con9row2input' /></div>
                    </div>
                
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-md-4 col-sm-12" >
                            <input type="text" placeholder='Messages' required id='con9row3' />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-1" id='con9row4btn'>
                            <Button title="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
