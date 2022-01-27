import img1 from './pic/icon 01.png'
import img2 from './pic/icon 02.png'
import img3 from './pic/icon 03.png'
import img4 from './pic/button-property tupe.png'
import img5 from './pic/Button-See all propertyproperty.png'
import img6 from './pic/image.png'
import img7 from './pic/content.png'
import img8 from './pic/iamge.png'
import img9 from './pic/content (1).png'
import img10 from './pic/image (1).png'
import img11 from './pic/content (2).png'
import img12 from './pic/image (2).png'
import img13 from './pic/content (3).png'
import img14 from './pic/arrow.png'


function Body() {
    return (
       <div className="container main">
           <div className="row">
               <div className="col find">
               <h1>What Can We Help You Find?</h1>
               </div>
           </div>

           <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
               <img className='icon' src={img1} alt="" />

               </div>
           
           
               <div className="col-lg-4 col-md-4 col-sm-12">
               <img className='icon' src={img2} alt="" />
               </div>
           

               <div className="col-lg-4 col-md-4 col-sm-12">
               <img className='icon' src={img3} alt="" />
               </div>
         </div>
 
         <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
                   <h1 className='icon_text'>Buy a home</h1>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                   <h1 className='icon_text'>Rent a home</h1>
              </div>
             
              <div className="col-lg-4 col-md-4 col-sm-12">
                   <h1 className='icon_text'>See neighborhoods</h1>
              </div>

       </div>

       <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
                   <p className='icon_p'>With over 1 million+ homes for sale <br/> available on 
                   the website, Trulia can <br/> match you with a house.</p>
              </div>

               <div className="col-lg-4 col-md-4 col-sm-12">
                   <p className='icon_p'>With 35+ filters and
                    custom <br/> keyword search, Trulia can <br/> help you
                     find a home.</p>
              </div>

               <div className="col-lg-4 col-md-4 col-sm-12">
                   <p className='icon_p'>With more neighborhood insights <br/> than 
                   any other real estate website.</p>
              </div>
           
       </div>

       <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-12">
               <h1 className='trending'>Our trending latest <br/> proparty</h1>
               
               </div>
               <div className="col-lg-3 col-md-3 col-sm-12">
               <img className='button' src={img4} alt="" />
               </div>

               <div className="col-lg-3 col-md-3 col-sm-12">
               <img className='button1' src={img5} alt="" />
               </div>
         </div>
        
        
       <div className="row">
               <div className="col">
             <p className='trending_p'>Our unique process gives you peace of 
             mind  from home rent <br/> to services</p>
               </div>
         </div>
       
         <div className="row">
               <div className="col">
               <img className='property' src={img6} alt="" />
               </div>
               <div className="col">
               <img className='property_img' src={img7} alt="" />
               </div>
               <div className="col">
               <img className='property' src={img8} alt="" />
               </div>
               <div className="col">
               <img className='property_img' src={img9} alt="" />
               </div>
              
               </div>

               <div className="row">
               <div className="col">
               <img className='property' src={img10} alt="" />
               </div>
               <div className="col">
               <img className='property_img' src={img11} alt="" />
               </div>
               <div className="col">
               <img className='property' src={img12} alt="" />
               </div>
               <div className="col">
               <img className='property_img' src={img13} alt="" />
               </div>
              
               </div>

               <div className="row">
               <div className="col">
               <div className="text-center">
               <img className='arrow' src={img14} alt="" />
               </div>
               </div>
               </div>

               
     </div>  
       
    );
  }
  
  export default Body;
  