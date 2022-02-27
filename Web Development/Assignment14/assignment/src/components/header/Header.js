import React from 'react'
import "../header/Header.css"


import img1 from './../../assets/img1.png'
import img2 from './../../assets/img2.png'

export default function Header() {
    return (
        <div>
            <div className="container-fluid" id='con1'>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-2 col-sm-12"><img src={img1} alt="" />
                        <img src={img2} alt="" /></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-1 col-sm-6 ">Home</div>
                    <div className="col-md-1 col-sm-6">About us</div>
                    <div className="col-md-1 col-sm-6">Project</div>
                    <div className="col-md-1 col-sm-6">services</div>
                    <div className="col-md-2 col-sm-6" id='contact'>Contact us</div>
                </div>
            </div>
        </div>
    )
}

