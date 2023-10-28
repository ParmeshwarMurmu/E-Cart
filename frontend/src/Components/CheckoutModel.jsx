import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Payment } from '../Routes/Payment'

export const CheckoutModel = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['xl']

    return (
        <>
          {sizes.map((size) => (
            <Button
              onClick={() => handleSizeClick(size)}
              key={size}
              m={4}
            //   variant={'none'}
            colorScheme='blue'
            >Checkout</Button>
          ))}
    
          <Modal onClose={onClose} size={size} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              {/* <ModalHeader>Modal Title</ModalHeader> */}
              <ModalCloseButton />
              <ModalBody>
                {/* <Lorem count={2} /> */}
                <Payment />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}
