import React from 'react'
import styled from "styled-components"

export const WhilistBtn = () => {
    return (
        <DIV>
            <button class="bookmarkBtn">
                <span class="IconContainer">
                    <svg viewBox="0 0 384 512" height="0.9em" class="icon"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
                </span>
                <p class="text">Whilist</p>
            </button>
        </DIV>
    )
}

const DIV = styled.div`
.bookmarkBtn {
  /* width: 80px; */
  width: 100%;
  height: 35px;
  /* border-radius:  0.45em; */
  border: 1px solid rgba(255, 255, 255, 0.349);
  background-color: #ffb224; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .3s;
  overflow: hidden;
}

.IconContainer {
  width: 30px;
  height: 25px;
  background: inherit;
  /* background: linear-gradient(to bottom, rgb(255, 136, 255),rgb(172, 70, 255)); */
  /* border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .3s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #070707;
  z-index: 1;
  transition-duration: .3s;
  font-size: 1.04em;
}

.bookmarkBtn:hover{
  background-color: #fff712;
}

.bookmarkBtn:hover .IconContainer {
  width: 90px;
  border-radius: 40px;
  transition-duration: .3s;
}

.bookmarkBtn:hover .text {
  transform: translate(10px);
  width: 0;
  font-size: 0;
  transition-duration: .3s;
}

.bookmarkBtn:active {
  transform: scale(0.95);
  transition-duration: .3s;
}
    
`