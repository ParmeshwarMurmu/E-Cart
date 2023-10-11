import React, { useContext, } from 'react'
import styled from "styled-components"
import { Box, Button, Image, Text, } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { appContent } from '../Context/ContextApi'
import { WomenOffers } from '../Comp2/WomenOffers'
import { WomenSlideShow } from '../Comp2/WomenSlideShow'
import { ShoesOffer } from '../Comp2/ShoesOffer'
import { ShoesOfferSlideShow } from '../Comp2/ShoesOfferSlideShow'
import mensNewArrivial from '../Images/mensNewArrivial.png'
import { MenShoesOffer } from '../MenCompSlide/MenShoesOffer'
import { MenShoweslideshow } from '../MenCompSlide/MenShoweslideshow'
import { MenTrending } from '../SlideShows/MenTrending'
import { WomenTrending } from '../SlideShows/WomenTrending'
import { WomenShoesTrending } from '../SlideShows/WomenShoesTrending'
import {MenShoesTrending} from '../SlideShows/MenShoesTrending'
import { MenSlideShow } from '../SlideShows/MenSlideShow'
import { MenFormalSlideShow } from '../SlideShows/MenFormalSlideShow'
import { WomenKuttasKutis } from '../SlideShows/WomenKuttasKutis'
import { WomenHeelsTrending } from '../SlideShows/WomenHeelsTrending'
import { MenShoesBootsSlideShow } from '../SlideShows/MenShoesBootsSlideShow'




export const Home = () => {


  return (
    <DIV>

      {/* Mensection slideshow */}
      <div className='mens'>
        <div style={{}}>
          <Box >
            <Image className='menImage' src={mensNewArrivial} alt='Mens' />
          </Box>
        </div>

        <div style={{ width: "75%" }}>
          <MenSlideShow />

          <MenFormalSlideShow />
        </div>

        
      </div>

      {/* Men Trending */}

      <div className='menTrending'>
      
      <div className='viewAll'>
        <div>
        <Text fontSize={'2xl'}>Trending</Text>
        <Button colorScheme='blue'>View All</Button>
        </div>
      </div>

      <div className='trending' style={{ border: "2px solid black"}}>
      <MenTrending />
      </div>

      </div>

      

      {/* women offers and slidedjow */}

      <div className='womensOffers'>
        <div style={{ width: "50%" }}>
          <WomenOffers />

        </div>

        <div style={{ width: "50%" }}>

          <WomenSlideShow />
       
          <WomenKuttasKutis />
        </div>
      </div>

      {/* Women Trendings */}

      <div className='menTrending'>
      
      <div className='viewAll' style={{border: "2px solid green"}}>
        <div>
        <Text fontSize={'2xl'}>Trending</Text>
        <Button colorScheme='blue'>View All</Button>
        </div>
      </div>

      <div className='trending' style={{ border: "2px solid black"}}>
      <WomenTrending />
      </div>

      </div>


      {/* Women Shoes Offers */}

      <div className='shoesOffers'>

        <div style={{ width: "50%" }}>
          <ShoesOffer />

          <WomenHeelsTrending />
        </div>



        <div style={{ width: "50%" }}>
          <ShoesOfferSlideShow />

          
        </div>

      </div>

      {/* Women Shoes Trending */}

      <div className='menTrending'>
      
      <div className='viewAll'>
        <div>
        <Text fontSize={'2xl'}>Trending</Text>
        <Button colorScheme='blue'>View All</Button>
        </div>
      </div>

      <div className='trending' style={{ border: "2px solid black"}}>
      <WomenShoesTrending />
      </div>

      </div>


      {/* Men Shoes Offer */}



      <div className='menShoesOffers'>

        <div style={{ width: "50%" }}>
          <MenShoesOffer />
        </div>



        <div style={{ width: "50%" }}>
          <MenShoweslideshow />

          <MenShoesBootsSlideShow />
        </div>

      </div>

      {/* Men Shoes Trending */}

      <div className='menTrending'>
      
      <div className='viewAll'>
        <div>
        <Text fontSize={'2xl'}>Trending</Text>
        <Button colorScheme='blue'>View All</Button>
        </div>
      </div>

      <div className='trending' style={{ border: "2px solid black"}}>
      <MenShoesTrending />
      </div>

      </div>





    </DIV>
  )
}

const DIV = styled.div`

.viewAll{
  display: flex;
  justify-content: center;
  align-items: center;
}

.menTrending{
  display: flex;
  margin-top: 40px;
}

.menShoesOffers{
  margin-top: 40px;
  display: flex;
}

.womensOffers{
 
  margin-top: 40px;
  /* width: 50%; */
  display: flex;
  
}

.shoesOffers{

  display: flex;
  margin-top: 40px;
}

.mens {
  /* background-color: aliceblue; */
  display: flex;
 } 

 .mens > div{
  /* border: 2px solid black; */
 }

 .trending{
  width: 95%;
 }

 @media screen and (max-width: 768px) {
      /* Your styles for large devices go here */

    .trending{
      width: 90%;
    }
   
      
    }


    @media screen and (max-width: 639px) {
      /* Your styles for large devices go here */

      .menImage{
        height: 324px;
        
      }
      
   
      
    }



`
