import React from 'react'
import styled from "styled-components"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export const SideBar = () => {
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
                            <input type="checkbox" value={"levi's"} />
                            <label htmlFor="">Levi's</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"nike"} />
                            <label htmlFor="">Nike</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"adidas"} />
                            <label htmlFor="">Adidas</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"gucci"} />
                            <label htmlFor="">Gucci</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"allen solly"} />
                            <label htmlFor="">Allen Solly</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"zara"} />
                            <label htmlFor="">Zara</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"louis philippe"} />
                            <label htmlFor="">Louis Philippe</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"peter england"} />
                            <label htmlFor="">Peter England</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"raymond"} />
                            <label htmlFor="">Raymond</label>
                        </div>

                        <div>
                            <input type="checkbox" value={"john miller"} />
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
                                Filter By Price
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
