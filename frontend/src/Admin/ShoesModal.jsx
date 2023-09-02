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
} from '@chakra-ui/react'

export const ShoesModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [state, setState] = useState("")
    const [image, setImage] = useState([])
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
                            <Input ref={initialRef} placeholder='Title' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Images</FormLabel>
                            <Input type='text' placeholder='Images' onChange={(e) => {
                                let data = e.target.value;
                                console.log("data", data);
                                let pic = data.split(",")
                                // console.log(pic)
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
                            <Input type='number' placeholder='Price' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Category</FormLabel>
                            <Select placeholder='Select Category' onChange={(e) => { setState(e.target.value) }}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="kids">Kids</option>
                            </Select>

                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Size</FormLabel>
                            <Input placeholder='Size' />
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
        </div>
    )
}
