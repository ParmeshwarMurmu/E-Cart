import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

export const SideBar = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const initialBrand = searchParams.getAll("brand")
    const [brand, setBrand] = useState(initialBrand || [])
    const initialColor = searchParams.getAll("color")
    const [color, setColor] = useState(initialColor || [])
    const initialCategory = searchParams.getAll("category")
    const [category, setCategory] = useState(initialCategory || [])

    const { allColors, allCategory, allBrands, allGender, isLoading, isError, isData } = useSelector((store) => {
        return {

            isLoading: store.allMenProductReducer.isLoading,
            isError: store.allMenProductReducer.isError,
            isData: store.allMenProductReducer.isData,
            allColors: store.allMenProductReducer.allColors,
            allCategory: store.allMenProductReducer.allCategory,
            allBrands: store.allMenProductReducer.allBrands,
            allGender: store.allMenProductReducer.allGender
        }

    }, shallowEqual)



    const brandHandler = (e) => {

        const { value } = e.target;
        let newBrand = [...brand];

        if (newBrand.includes(value)) {

            newBrand = newBrand.filter(el => el !== value)
        }
        else {
            newBrand.push(value)
        }

        setBrand(newBrand)
    }

    // console.log(brand)

    const categoryHandler = (e) => {
        const { value } = e.target
        let newCategory = [...category]
        if (newCategory.includes(value)) {

            newCategory = newCategory.filter(el => el !== value)
        }
        else {
            newCategory.push(value)
        }

        setCategory(newCategory)
    }

    const colorHandler = (e)=>{
        const {value} = e.target;

        let newColor = [...color];
        if(newColor.includes(value)){
            newColor = newColor.filter(el => el !== value)
        }
        else{
            newColor.push(value)
        }

        setColor(newColor)
    }

   

    useEffect(() => {

        const params = {
            brand: brand,
            category: category,
            color: color
        }

        setSearchParams(params)
        


    }, [brand, category, color])




    return (
        <DIV>
            <Accordion defaultIndex={[0]} allowMultiple>
                {
                //        isData && allGender.length > 0 && <AccordionItem>
                //        <h2>
                //            <AccordionButton>
                //                <Box as="span" flex='1' textAlign='left'>
                //                    Filter By Gender
                //                </Box>
                //                <AccordionIcon />
                //            </AccordionButton>
                //        </h2>
                //        <AccordionPanel pb={4}>
   
                //            {
                //                allGender.map((el, index) => (
                //                    <div key={index}>
                //                        <input type="checkbox" value={el} onChange={categoryHandler}  />
                //                        <label htmlFor="">{el}</label>
                //                    </div>
   
                //                ))
                //            }
   
                          
   
   
                //        </AccordionPanel>
                //    </AccordionItem>
                }
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Filter By Category
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        {
                           isData &&  allCategory.map((el, index) => (
                                <div key={index}>
                                    <input type="checkbox" value={el} onChange={categoryHandler} checked={category.includes(el)} />
                                    <label htmlFor="">{el}</label>
                                </div>

                            ))
                        }

                       


                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Filter By Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {
                            isData && allBrands.map((el, index) => (
                                <div key={index}>
                                    <input type="checkbox" value={el} onChange={brandHandler} checked={brand.includes(el)} />
                                    <label htmlFor="">{el}</label>
                                </div>

                            ))
                        }
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Filter By Color
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    {
                            isData && allColors.map((el, index) => (
                                <div key={index}>
                                    <input type="checkbox" value={el} onChange={colorHandler} checked={color.includes(el)} />
                                    <label htmlFor="">{el}</label>
                                </div>

                            ))
                        }
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Filter By Price
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <div>
                            <div>
                                <input type="radio" value={"asc"} name='order' />
                                <label htmlFor="">Low To High</label>
                            </div>

                            <div>
                                <input type="radio" value={"desc"} name='order' />
                                <label htmlFor="">High To Low</label>
                            </div>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                
            </Accordion>
        </DIV>
    )
}

const DIV = styled.div`

label {
    text-transform: capitalize;
    margin-left: 10px;
}

    
    
`
