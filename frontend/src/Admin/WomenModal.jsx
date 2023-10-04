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
import { resetWomen, womenbrandSuccess, womencategorySuccess, womencolorSuccess, womenimageSuccess, womenpriceSuccess, womenresetSuccess, womensizeSuccess, womentitleSuccess } from '../Redux/adminWomenReducer/action'
import axios from 'axios'

export const WomenModal = () => {

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const fileInput = React.createRef();
  const dispatch = useDispatch();

  const { title, images, brand, color, price, category, size } = useSelector((store) => {
    return {
      title: store.adminWomenReducer.title,
      images: store.adminWomenReducer.images,
      brand: store.adminWomenReducer.brand,
      color: store.adminWomenReducer.color,
      price: store.adminWomenReducer.price,
      category: store.adminWomenReducer.category,
      size: store.adminWomenReducer.size,

    }
  }, shallowEqual)

  const womenObj = {
    title,
    images,
    brand,
    color,
    price: +price,
    category,
    size
  }

  console.log("WomenObj", womenObj)

  const imageHandler = (e) => {
    const image = e.target.value.split(",")
    dispatch(womenimageSuccess(image))
  }

  const sizeHandler = (e) => {
    const size = e.target.value.split(",")
    dispatch(womensizeSuccess(size))
  }


  const womenHandlerSave = (e) => {

      // const formData = new FormData();
      // formData.append('title', title);
      // formData.append('brand', brand);
      // formData.append('color', color);
      // formData.append('price', price);
      // formData.append('category', category);
      // formData.append('size', size);
      // formData.append('photos', fileInput.current.files[0]);
      // formData.append('photos', fileInput.current.files[1]);
      // formData.append('photos', fileInput.current.files[2]);
      // formData.append('photos', fileInput.current.files[3]);
      // formData.append('photos', fileInput.current.files[4]);
    
    addWomenData(womenObj)
    // console.log(womenObj)
    dispatch(womenresetSuccess())
  }

  const addWomenData = (data) => {

    axios.post('http://localhost:8080/adminWomen/add/women', data)
      .then((res) => {
        console.log(res)
        if (res.data.msg === "Women Item Added Successfully") {
          toast({
            title: 'Women Item.',
            description: `${res.data.msg}`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
        else {
          toast({
            title: 'Women Item.',
            description: `${res.data.msg}`,
            status: 'warning',
            duration: 4000,
            isClosable: true,
          })
        }

      })
      .catch((err) => {
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

          <form >
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type='text' ref={initialRef} placeholder='Title' value={title}
                onChange={(e) => {
                  dispatch(womentitleSuccess(e.target.value))
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Images</FormLabel>
              <Input type='text' placeholder='Images' value={images} onChange={imageHandler} />
            </FormControl>

            {/* <FormControl mt={4} variant={'none'}>
              <FormLabel>Upload Images</FormLabel>

              
                <Input type='file' placeholder='Images' name='photos'  ref={fileInput} multiple />


            </FormControl> */}

            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input type='text' placeholder='Brand'
                value={brand}
                onChange={(e) => {
                  dispatch(womenbrandSuccess(e.target.value))
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Color</FormLabel>
              <Input type='text' placeholder='Color' value={color}
                onChange={(e) => {
                  dispatch(womencolorSuccess(e.target.value))
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input type='number' placeholder='Price' value={price}
                onChange={(e) => {
                  dispatch(womenpriceSuccess(e.target.value))
                }} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select placeholder='Select Category' value={category}
                onChange={(e) => {
                  dispatch(womencategorySuccess(e.target.value))
                }}>
                <option value="saree">Saree</option>
                <option value="kurtas kurtis">Kurtas Kurtis</option>
                <option value="palazzos">Palazzos</option>
                <option value="blouse">Blouse</option>
                <option value="salwars And patialas">Salwars And Patialas</option>
                <option value="leggings cnd churidars">Leggings And Churidars</option>
                <option value="lehenga cholis">Lehenga Cholis</option>

              </Select>

            </FormControl>

            {
              (category !== 'saree' && category !== 'lehenga cholis') && <FormControl mt={4}>
                <FormLabel>Size</FormLabel>
                <Input type="text" placeholder='Size' value={size}
                  onChange={sizeHandler} />
              </FormControl>
            }

          </form>

        </ModalBody>

        <ModalFooter>
          <Button  colorScheme='blue' mr={3} onClick={womenHandlerSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>



    </div >
  )
}
