import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import styled from "styled-components";
import { AddItem } from './AddItem';

export const AdminHome = () => {
    return (
        <DIV>
            <Tabs className='tabsParent'>
                <TabList className='tabs' >
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Home</Tab>
                    <Tab _selected={{ color: 'white', bg: 'green.400' }} fontSize={'l'}>Add Items</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Home</Tab>
                    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Two</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Home</Tab>
                    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Two</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Home</Tab>
                    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Two</Tab>
                </TabList>
                
                <TabPanels className='tabPannels'>
                    <TabPanel>
                        <p>
                            <button>Click ME</button>
                        </p>
                    </TabPanel>

                    <TabPanel>
                        <AddItem />
                    </TabPanel>

                    <TabPanel>
                        <p>
                            <button>Click ME</button>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>
                            <button>Click ME</button>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>
                            <button>Click ME</button>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </DIV>
    )
}

const DIV = styled.div`
.tabsParent{
    display: flex;
}


.tabs{
    display: flex;
    flex-direction: column;
    width: 10%;
    margin-bottom: 50px;
}

.tabPannels{
    /* display: flex; */
    /* flex-direction: row; */
    /* border: 2px solid red; */
    /* justify-content: space-between; */
    /* margin-top: 20px; */
}

`
