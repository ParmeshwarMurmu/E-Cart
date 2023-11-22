import { useToast } from '@chakra-ui/react';
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { cartPageData } from '../Redux/cartReducer/action';

export const DeleteBtn = ({ _id }) => {

    const toast = useToast();
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('E-Cart_userId')

    const delHandler = () => {
        // console.log('token', token)
        axios.delete(`https://e-cart-5jh7.onrender.com/user/cart/${_id}`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
            .then((res) => {
                if(res.data.msg === "Item Removed Successfully"){
                    toast({
                        title: 'Deleted',
                        description: `${res.data.msg}`,
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                      })
                      dispatch(cartPageData(token, userId))

                }
                else{
                    toast({
                        title: 'Delete Item',
                        description: `Something went wrong`,
                        status: 'warning',
                        duration: 4000,
                        isClosable: true,
                      })
                }
                
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <DIV>

            <button class="noselect" onClick={delHandler} ><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
        </DIV>
    )
}

const DIV = styled.div`

button {
 width: 150px;
 height: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

button, button span {
 transition: 200ms;
}

button .text {
 transform: translateX(35px);
 color: white;
 font-weight: bold;
}

button .icon {
 position: absolute;
 border-left: 1px solid #c41b1b;
 transform: translateX(110px);
 height: 40px;
 width: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
}

button svg {
 width: 15px;
 fill: #eee;
}

button:hover {
 background: #ff3636;
}

button:hover .text {
 color: transparent;
}

button:hover .icon {
 width: 150px;
 border-left: none;
 transform: translateX(0);
}

button:focus {
 outline: none;
}

button:active .icon svg {
 transform: scale(0.8);
}
    
`
