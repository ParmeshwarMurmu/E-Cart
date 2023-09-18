import React from 'react'
import styled from "styled-components"

export const Grid = () => {
    return (
        <DIV>
            <div className="box red">

            </div>
            <div className="box green"></div>
            <div className="box blue"></div>
            <div className="box yellow"></div>
            <div className="box orange"></div>
            <div className="box black"></div>
        </DIV>
    )
}
const DIV = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);


.black{
    background-color: black;
}

.blue{
  background-color: blue;
  grid-area: 2/1/3/4;
}

.yellow{
  background-color: yellow;
}

.orange{
  background-color: orange;
}

.box{
  height: 200px;
  width: 200px;
}

.red{
  background-color: red;
  grid-area: 1/1/4/2;
}

.green{
  background-color: green;
  grid-area: 1/2/2/4;
}


`
