import { Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import WomenImages from "../Images/WomenImages.jpg"
import { MemModal } from './MemModal'
import { WomenModal } from './WomenModal'
import { ShoesModal } from './ShoesModal'
import { MobileModal } from './MobileModal'

export const AddItem = () => {
    return (
        <DIV>

            
         

                <div  className='formParentDiv'>

                    <div className='imageParent'>
                        <div className='image'>
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/5/l/g/l-pk19sh09n-surhi-original-imaft8ttegs2zxzh-bb.jpeg?q=70" alt="" />
                        </div>
                    </div>

                    <div className="container">
                        <Text fontSize={'2xl'} as={'b'} style={{ textAlign: "center" }}>Men</Text>
                    </div>
                   


                    <div className='btn' >
                        <Button colorScheme='blue' size='md' px={5} >
                            <MemModal />
                        </Button>
                    </div>

                    <div className='btn' >
                        <Button colorScheme='green' size='md' px={5} >
                            Edit Items
                        </Button>
                    </div>


                </div>





                <div  className='formParentDiv'>


                    <div className='imageParent'>
                        <div className='image'>

                            <img src="https://rukminim2.flixcart.com/image/832/832/l13whow0/sari/z/r/s/free-lajamani-new-desirable-admirable-most-south-indian-bengali-original-imagcr2vmfydhzxe.jpeg?q=70" alt="" />
                        </div>
                    </div>

                    <div className="container">
                        <Text fontSize={'2xl'} as={'b'} style={{ textAlign: "center" }}>Women</Text>
                    </div>
                    {/* <p style={{textAlign: "center"}}>ddw</p> */}


                    <div className='btn' >
                        <Button colorScheme='blue' size='md' px={5} >
                            <WomenModal />
                        </Button>
                    </div>


                    <div className='btn' >
                        <Button colorScheme='green' size='md' px={5} >
                            Edit Items
                        </Button>
                    </div>
                </div>


                <div  className='formParentDiv'>

                    <div className='imageParent'>
                        <div className='image'>
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/l/j/-original-imagrnddj5yqfzzp.jpeg?q=70" alt="" />
                        </div>
                    </div>

                    <div className="container">
                        <Text fontSize={'2xl'} as={'b'} style={{ textAlign: "center" }}>Shoes</Text>
                    </div>
                    {/* <p style={{textAlign: "center"}}>ddw</p> */}


                    <div className='btn' >
                        <Button colorScheme='blue' size='md' px={5} >
                            <ShoesModal />
                        </Button>
                    </div>

                    <div className='btn' >
                        <Button colorScheme='green' size='md' px={5} >
                            Edit Items
                        </Button>
                    </div>


                </div>



                <div  className='formParentDiv'>

                    <div className='imageParent'>
                        <div className='image'>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70" alt="" />
                        </div>
                    </div>

                    <div className="container">
                        <Text fontSize={'2xl'} as={'b'} style={{ textAlign: "center" }}>Mobiles</Text>
                    </div>
                    {/* <p style={{textAlign: "center"}}>ddw</p> */}


                    <div className='btn' >
                        <Button colorScheme='blue' size='md' px={5} >
                            <MobileModal/>
                        </Button>
                    </div>

                    <div className='btn' >
                        <Button colorScheme='green' size='md' px={5} >
                            Edit Items
                        </Button>
                    </div>


                </div>



                <div  className='formParentDiv'>

                    <div className='imageParent'>
                        <div className='image'>
                            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/k/e/l/1-ld-bk054-black-louis-devin-men-original-imagg25gzwqeawhv.jpeg?q=70" alt="" />
                        </div>
                    </div>

                    <div className="container">
                        <Text fontSize={'2xl'} as={'b'} >Watches</Text>
                    </div>
                    {/* <p style={{textAlign: "center"}}>ddw</p> */}


                    <div className='btn' >
                        <Button colorScheme='blue' size='md' px={5} >
                            Add Items
                        </Button>
                    </div>

                    <div className='btn' >
                        <Button colorScheme='green' size='md' px={5} >
                            Edit Items
                        </Button>
                    </div>


                </div>









        </DIV>
    )
}

const DIV = styled.div`

display: flex;
flex-wrap: wrap;

.formParentDiv{
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    /* padding: 20px; */
    border-radius: 5px;
    /* height: 100vh;  */
    margin: 20px;
    width: 15%;
    /* flex-wrap: wrap; */
    border: 2px solid red;
}

.btn{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
}

.container {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  margin-top: 10px;
}

.imageParent{
    
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; 

  }

  .image{
    width: 50%;
  }
    
`
