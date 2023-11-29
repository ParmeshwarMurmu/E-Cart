import { IconButton, Input, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchTitleAction } from '../Redux/searchReducer/action';
import { SearchIcon } from '@chakra-ui/icons';

export const Searching = () => {

    // const [search, setSearch] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { category } = useSelector((store) => {

        return {
            category: store.searchReducer.category
        }

    }, shallowEqual)


    const searchHandler = () => {

        // console.log("searchedCategory", category)
        // console.log("navigating");
        navigate('/searchBar')

    }



    useEffect(() => {

        const params = {
        }
        category && (params.search = category)

        category && setSearchParams(params)

    }, [searchParams])

    return (
        <div>
            <Stack spacing={3} >

                <div style={{ display: "flex" }}>
                    <Input className='inputColor' placeholder='Ex. jeans, Saree, T-shirts' size='sm' marginRight={4} marginLeft={4} border={'2px solid grey'}
                        onChange={(e) => { dispatch(searchTitleAction(e.target.value)) }}
                    />

                    <div>

                        <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                            p={0}
                            m={0}
                            // h={2}
                            size={'sm'}
                            onClick={searchHandler}

                        />
                    </div>

                </div>
            </Stack>
        </div>
    )
}
