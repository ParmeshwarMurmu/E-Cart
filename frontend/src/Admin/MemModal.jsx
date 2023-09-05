import React, { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
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
} from '@chakra-ui/react'

import { useSelector, useDispatch } from "react-redux"
import { addMenData, addMenDataSuccess, brandSuccess, categorySuccess, colorSuccess, imageSuccess, priceSuccess, resetMen, resetSuccess, sizeSuccess, titleSuccess } from '../Redux/adminMenReducer/action'
import axios from 'axios'

export const MemModal = () => {

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();

  const { title, images, brand, color, price, category, size } = useSelector((store) => {
    return {
      title: store.adminMenReducer.title,
      images: store.adminMenReducer.images,
      brand: store.adminMenReducer.brand,
      color: store.adminMenReducer.color,
      price: store.adminMenReducer.price,
      category: store.adminMenReducer.category,
      size: store.adminMenReducer.size,

    }
  })

  const menObj = {
    title,
    images,
    brand,
    color,
    price: +price,
    category,
    size
  }

  const imageHandler = (e) => {
    const image = e.target.value.split(",")
    dispatch(imageSuccess(image))
  }

  const sizeHandler = (e) => {
    const size = e.target.value.split(",")
    dispatch(sizeSuccess(size))
  }


  const menHandlerSave = () => {
    addMenData(menObj)
    dispatch(resetSuccess())

  }

  const addMenData = (data) => {
    

      
      axios.post('http://localhost:8080/admin/add/men', data)
      .then((res)=>{
        if (res.data.msg === "Men Item Added Successfully") {
          toast({
            title: 'Men Item.',
            description: `${res.data.msg}`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
        else{
          toast({
            title: 'Men Item.',
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
    <>
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
                  dispatch(titleSuccess(e.target.value))
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Images</FormLabel>
              <Input type='text' placeholder='Images' value={images} onChange={imageHandler} />

            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input placeholder='Brand' value={brand}
                onChange={(e) => {
                  dispatch(brandSuccess(e.target.value))
                }}

              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Color</FormLabel>
              <Input placeholder='Color' value={color}
                onChange={(e) => {
                  dispatch(colorSuccess(e.target.value))
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input type='number' placeholder='Price' value={price}
                onChange={(e) => {
                  dispatch(priceSuccess(e.target.value))
                }}
              />
            </FormControl>

            <FormControl mt={4}>

              <FormLabel>Category</FormLabel>
              <Select placeholder='Select Category' value={category}
                onChange={(e) => {
                  dispatch(categorySuccess(e.target.value))
                }}
              >
                <option value="t-shirts">T-Shirts</option>
                <option value="formal shirts">Formal Shirts</option>
                <option value="casual shirts">Casual-Shirts</option>
                <option value="jeans">Jeans</option>
                <option value="formal trousers">Formal Trousers</option>
                <option value="track pants">Track Pants</option>
                <option value="shorts">Shorts</option>

              </Select>

            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Size</FormLabel>
              <Input placeholder='Size' value={size}
                onChange={sizeHandler}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={menHandlerSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )



}
