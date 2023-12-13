import React from 'react'
import './home.css'

import Navbar from '../navbar/navbar'
import Carousel from '../carousel/carousel'

import ImageOne from '../images/hvacone.jpg'
import ImageTwo from '../images/hvactwo.jpg'
import ImageThree from '../images/hvacthree.jpg'
import ImageFour from '../images/hvacfour.jpg'
import ImageFive from '../images/hvacfive.jpg'
import ImageSix from '../images/hvacsix.jpg'

import Logo from '../images/hvaclogo.png'

const home = () => {
  return (
    <div className='all-container'>
        <div>
            <Navbar />
        </div>
        <div className='divider-info'>
            
        </div>
        <div className='section-one'>
            {/* <div>BluGreen </div>
            <div>Heating And Cooling Systems</div> */}
            <img className='title' src={Logo} alt="logo"/>
        </div>
        <div className='section-two'>
          <div className='carousel-home-container'>
            <Carousel 
              images={[ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix]}
            />
          </div>
          <div className='informational'>
            <div className='content-title'>Hi</div>
            <div className='content-two'>This is stuff</div>
          </div>
        </div>
    </div>
  )
}

export default home