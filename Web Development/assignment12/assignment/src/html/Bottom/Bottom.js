import img1 from './pic/Testimonial.png'
import img2 from './pic/Search bar.png'

function Bottom() {
    return (

        <div className="container-fluid">
        <div className="row">
        <div className="col">
        <img className='TESTIMONIALS' src={img1} alt="" />
        </div>
        </div>
        
        <div className='container-fluid black'>
        <div className="row">
        <div className="col">
            <h1 className='Redfin'>Talk to a Redfin Agent</h1>
        </div>
           
        <div className="col">
            <p className='search1'>Where are you searching for homes?</p>
        </div>
        </div>

        <div className="row">
        <div className="col">
            <p className='obligation'>Start your search with an expert local 
            agent—there's <br/> no pressure or obligation.</p>
        </div>

        <div className="col">
        <img className='search_bar' src={img2} alt="" />
        </div>
        </div>
  </div> 

</div>
    );
  }
  
  export default Bottom;