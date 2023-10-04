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

export const SideBar = () => {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [brand, setBrand] = useState([])
    const [category, setCategory] = useState([])


    const brandHandler = (e)=>{

        const {value} = e.target;
        let newBrand = [...brand];

        if(newBrand.includes(value)){

            newBrand = newBrand.filter( el => el !== value)
        }
        else{
            newBrand.push(value)
        }

        setBrand(newBrand)
    }

    // console.log(brand)

    const categoryHandler = (e)=>{
        const {value} = e.target
        let newCategory = [...category]
        if(newCategory.includes(value)){

            newCategory = newCategory.filter(el => el !== value)
        }
        else{
            newCategory.push(value)
        }

        setCategory(newCategory)
    }

    console.log(category)

    useEffect(()=>{

        const params = {
            brand: brand,
            category: category
        }

        setSearchParams(params)


    }, [brand, category])

    


    return (
        <DIV>
            <Accordion defaultIndex={[0]} allowMultiple>
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
                        <div>
                            <input type="checkbox" value={"levis"} onChange={brandHandler} />
                            <label htmlFor="">Levi's</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"nike"} onChange={brandHandler} />
                            <label htmlFor="">Nike</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"adidas"} onChange={brandHandler} />
                            <label htmlFor="">Adidas</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"gucci"} onChange={brandHandler} />
                            <label htmlFor="">Gucci</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"allen solly"} onChange={brandHandler} />
                            <label htmlFor="">Allen Solly</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"zara"} onChange={brandHandler} />
                            <label htmlFor="">Zara</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"louis philippe"} onChange={brandHandler} />
                            <label htmlFor="">Louis Philippe</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"peter england"} onChange={brandHandler} />
                            <label htmlFor="">Peter England</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"raymond"} onChange={brandHandler} />
                            <label htmlFor="">Raymond</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"john miller"} onChange={brandHandler} />
                            <label htmlFor="">John Miller</label>
                        </div>


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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

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
                        <div>
                            <input type="checkbox" value={"t-shirts"} onChange = {categoryHandler} />
                            <label htmlFor="">T-Shirts</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"formal shirts"} onChange = {categoryHandler} />
                            <label htmlFor="">Formal Shirts</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"casual shirts"} onChange = {categoryHandler} />
                            <label htmlFor="">Casual-Shirts</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"jeans"} onChange = {categoryHandler} />
                            <label htmlFor="">Jeans</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"formal trousers"} onChange = {categoryHandler} />
                            <label htmlFor="">Formal RTrousers</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"track pants"} onChange = {categoryHandler} />
                            <label htmlFor="">Track Pants</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"shorts"} onChange = {categoryHandler} />
                            <label htmlFor="">Shorts</label>
                        </div>
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
                            <input type="radio" value={"asc"} name='order'/>
                            <label htmlFor="">Low To High</label>
                        </div>

                        <div>
                            <input type="radio" value={"desc"} name='order'/>
                            <label htmlFor="">High To Low</label>
                        </div>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </DIV>
    )
}

const DIV = styled.div`
    
    label{
        margin-left: 10px;
    }
`
