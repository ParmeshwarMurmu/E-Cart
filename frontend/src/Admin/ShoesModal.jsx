import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    SelectField,
    useToast,
} from '@chakra-ui/react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { resetShoe, shoeBrandSuccessAction, shoeCategorySuccessAction, shoeColorSuccessAction, shoeGenderSuccessAction, shoeImageSuccessAction, shoePriceSuccessAction, shoeResetSuccessAction, shoeSizeSuccessAction, shoeTitleSuccessAction } from '../Redux/adminShoeReducer/action'
import axios from 'axios'

export const ShoesModal = () => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const dispatch = useDispatch()

    const {title, images, brand, color, price, category, size, gender} = useSelector((store)=>{
        return {
            title: store.adminShoeReducer.title,
            images: store.adminShoeReducer.images,
            brand: store.adminShoeReducer.brand,
            color: store.adminShoeReducer.color,
            price: store.adminShoeReducer.price,
            category: store.adminShoeReducer.category,
            size: store.adminShoeReducer.size,
            gender: store.adminShoeReducer.gender

        }
    }, shallowEqual)


    const shoeData = {
        title,
        images,
        brand,
        color,
        gender,
        price: +price,
        category,
        size
      }


    const imageHandler = (e) => {
        const image = e.target.value.split(",")
        dispatch(shoeImageSuccessAction(image))
      }
    
      const sizeHandler = (e) => {
        const size = e.target.value.split(",")
        dispatch(shoeSizeSuccessAction(size))
      }

      const addShoesData = ()=>{
          shoesDataAdding(shoeData)
        // console.log("shoe dataa")
        // console.log(shoeData);
          dispatch(shoeResetSuccessAction())
      }


      
  const shoesDataAdding = (data) => {
    console.log(data);
    axios.post('https://e-cart-5jh7.onrender.com/adminShoe/add/shoe', data)
    .then((res)=>{
      if (res.data.msg === "Shoe Item Added Successfully") {
        toast({
          title: 'Shoe',
          description: `${res.data.msg}`,
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }
      else{
        toast({
          title: 'Shoe',
          description: `${res.data.msg}`,
          status: 'warning',
          duration: 4000,
          isClosable: true,
        })
      }
  
      
    })
    .catch((err)=>{
      toast({
        title: 'Error Occured',
        description: `Cannot Add men item`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    })
}


    return (
        <div>
            <Button onClick={onOpen} variant={'none'} p={0} m={0}>Add Items</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Items</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input ref={initialRef} placeholder='Title' value={title}
                             onChange={(e) => {
                                dispatch(shoeTitleSuccessAction(e.target.value))
                              }}
                             />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Images</FormLabel>
                            <Input type='text' placeholder='Images' value={images} onChange={imageHandler}  />

                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Brand</FormLabel>
                            <Input placeholder='Brand' value={brand}
                            onChange={(e) => {
                                dispatch(shoeBrandSuccessAction(e.target.value))
                              }}
                             />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Color</FormLabel>
                            <Input placeholder='Color'  value={color}
                            onChange={(e) => {
                                dispatch(shoeColorSuccessAction(e.target.value))
                              }}
                             />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Price</FormLabel>
                            <Input type='number' placeholder='Price'  value={price}
                             onChange={(e) => {
                                dispatch(shoePriceSuccessAction(e.target.value))
                              }}
                             />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Gender</FormLabel>
                            <Select placeholder='Select Gender'  value={gender}
                             onChange={(e) => {
                                dispatch(shoeGenderSuccessAction(e.target.value))
                              }}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>

                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Category</FormLabel>
                            <Select placeholder='Select Category'  value={category}
                             onChange={(e) => {
                                dispatch(shoeCategorySuccessAction(e.target.value))
                              }}
                            >
                                <option value="sport shoe">Sports Shoes</option>
                                <option value="casual shoe">Casual Shoes</option>
                                <option value="formal shoe">Formal Shoes</option>
                                <option value="flats">Flats Shoes</option>
                                <option value="heel">Heels</option>
                                <option value="sandal">Sandals</option>
                                <option value="boots">Boots</option>
                            </Select>

                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Size</FormLabel>
                            <Input placeholder='Size'   value={size}
                            onChange={sizeHandler}
                             />
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}
                        onClick={addShoesData}
                        >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
