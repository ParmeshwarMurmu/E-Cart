import React from 'react'
import styled from "styled-components"
import { Box, Button, Image, Text, } from '@chakra-ui/react'
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
import { NavCategories } from '../Components/NavCategories'
import { shallowEqual, useSelector } from 'react-redux'
import { store } from '../Redux/Store/store'
import { HomeOfferSlideShow } from '../Comp2/HomeOfferSlideShow'




export const Home = () => {

  const {isLoading} = useSelector((store)=>{

    return {
      isLoading: store.menShoeTrendingReducer.isLoading
    }
  }, shallowEqual)

  console.log("isLoading", isLoading)


  return (
    <DIV>

      {/* <NavCategories /> */}

      <div>
        <NavCategories />
      </div>

      <HomeOfferSlideShow />

      {/* Mensection slideshow */}
      {/* {
        isLoading ? <SingleProductLoader /> : ( */}

        
          <>
      
      <div className='mens'>
        <div className='menOffer' style={{}}>
          <Box >
            <Image className='menImage' src={mensNewArrivial} alt='Mens' />
          </Box>
        </div>

        <div style={{ width: "75%" }}>
          <MenSlideShow />

          <MenFormalSlideShow />
        </div>

        
      </div>

     

      <div className='menTrending'>
      
      <div className='viewAll'>
        <div>
        <Text fontSize={'2xl'}>Trending</Text>
        <Button colorScheme='blue'>View All</Button>
        </div>
      </div>

      <div className='trending' >
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
      
      <div className='viewAll' >
        <div>
        <Text fontSize={'2xl'}>Trending</Text>
        <Button colorScheme='blue'>View All</Button>
        </div>
      </div>

      <div className='trending' >
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

      <div className='trending' >
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

      <div className='trending' >
      <MenShoesTrending />
      </div>

      </div>

      </>

        {/* )
} */}





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
        /* height: 324px; */
        
      }
      
   
      
    }



    @media screen and (max-width: 425px) {
      /* Your styles for large devices go here */

      .imgDiv{
          /* height: 30px; */
      }

      .sliderImage{
           /* width: 10px; */
      }

      .slider{
        height: 125px;
      }

      .mens{
        flex-direction: column;
      }

      .womensOffers{
        flex-direction: column;
      }


      .shoesOffers{
        flex-direction: column-reverse;
      }

      .menShoesOffers{
        flex-direction: column;
      }

      .menOffer{
        display: none;
      }

      .menTrending{
        flex-direction: column;
      }

      .trending{
        /* width: 100%; */
      }

      
   
      
    }



`
