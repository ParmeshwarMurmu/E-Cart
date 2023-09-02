import React from 'react'
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

export const MemModal = () => {
    
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
      
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
                    <Input ref={initialRef} placeholder='Title' />
                  </FormControl>

                  <FormControl mt={4}>
                  <FormLabel>Images</FormLabel>
                  <Input type='text' placeholder='Images' onChange={()=>{
                  }} />
                  
                </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Brand</FormLabel>
                    <Input placeholder='Brand' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Color</FormLabel>
                    <Input placeholder='Color' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Price</FormLabel>
                    <Input placeholder='Price' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Category</FormLabel>
                    <Select placeholder='Select Category'>
                    <option value="t-shirts">T-Shirts</option>
                    <option value="formal shirts">Formal Shirts</option>
                    <option value="casual shirts">Casual-Shirts</option>
                    <option value="jeans">Jeans</option>
                    <option value="formal trousers">Formal Trousers</option>
                    <option value="track pants">Track Pants</option>
                    <option value="shorts">Shorts</option>
                    
                    </Select>
                    {/* <Input placeholder='Category' /> */}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Size</FormLabel>
                    <Input placeholder='Price' />
                  </FormControl>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      
  
  
}
