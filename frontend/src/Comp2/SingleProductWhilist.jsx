import React from 'react'
import styled from 'styled-components'

export const SingleProductWhilist = () => {
  return (
    <DIV>
    <button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
  </svg>
  Whilist
</button>
</DIV>
  )
}

const DIV = styled.div`
    button {
 width: 200px;
  height: 40px;
  border: none;
  display: flex;
  padding: 0.75rem 1.5rem;
  
  background-color: #ffb224;
  color: #0f0f0f;
  font-size: 1.04em;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  user-select: none;
  gap: 0.75rem;
  box-shadow: 0 4px 6px -1px #488aec31, 0 2px 4px -1px #488aec17;
  transition: all .6s ease;
}

button:hover {
  box-shadow: 0 10px 15px -3px #8aa9d64f, 0 4px 6px -2px #488aec17;
  background-color: #f4e138;
}

button:focus,button:active {
  opacity: .85;
  box-shadow: none;
}

button svg {
  width: 1.25rem;
  height: 1.25rem;
}


`
