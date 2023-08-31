import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

export const AddItem = () => {
  return (
    <DIV>

<div className='formParentDiv'>

<Text fontSize={'3xl'} as={'b'} textAlign={'center'}>Admin Login</Text>

<form action="">

    <div>
        <StyledInput type='email' placeholder='Email'  />
    </div>

    <div>
    <StyledInput type='password' placeholder='Password'  />
    </div>

    <div className='btn' >
        <Button colorScheme='blue' size='md' px={5} >
            Login
        </Button>
    </div>

</form>
</div>

<div className='formParentDiv'>

<Text fontSize={'3xl'} as={'b'} textAlign={'center'}>Admin Login</Text>

<form action="">

    <div>
        <StyledInput type='email' placeholder='Email'  />
    </div>

    <div>
    <StyledInput type='password' placeholder='Password'  />
    </div>

    <div className='btn' >
        <Button colorScheme='blue' size='md' px={5} >
            Login
        </Button>
    </div>

</form>
</div>


<div className='formParentDiv'>

<Text fontSize={'3xl'} as={'b'} textAlign={'center'}>Admin Login</Text>

<form action="">

    <div>
        <StyledInput type='email' placeholder='Email'  />
    </div>

    <div>
    <StyledInput type='password' placeholder='Password'  />
    </div>

    <div className='btn' >
        <Button colorScheme='blue' size='md' px={5} >
            Login
        </Button>
    </div>

</form>
</div>


<div className='formParentDiv'>

<Text fontSize={'3xl'} as={'b'} textAlign={'center'}>Admin Login</Text>

<form action="">

    <div>
        <StyledInput type='email' placeholder='Email'  />
    </div>

    <div>
    <StyledInput type='password' placeholder='Password'  />
    </div>

    <div className='btn' >
        <Button colorScheme='blue' size='md' px={5} >
            Login
        </Button>
    </div>

</form>
</div>



    </DIV>
  )
}

const DIV = styled.div`


display: flex;
justify-content: center;
align-items: center;
height: 100vh;


.formParentDiv{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;
    border-radius: 5px;
}

input{
    padding: 5px;
    margin-bottom: 10px;
    border: 2px solid gray;
}

form{
    margin-top: 15px;
}

.btn{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
}


    
`

const StyledInput = styled.input`
  border: 2px solid gray; /* Set default border color */
  transition: border-color 0.3s ease; /* Add a smooth transition effect */

  &:focus {
    border-color: #0999ff; /* Change border color when focused */
    outline: none; /* Remove default focus outline */
  }
  `

