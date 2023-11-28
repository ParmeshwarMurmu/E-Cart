import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { EmptyCart } from './Home/EmptyCart';

export const UserOrderComponent = ({ orderDate, products }) => {


  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return '#38FB09';
      case 'shipped':
        return 'orange';
      case 'pending':
        return '#FB2A2A';
      default:
        return 'gray'; // Default color for unknown status
    }
  };

  return (
    <DIV>


      {
        products.map((el) => (
          <div key={el._id}>

            {
              el.productModel === 'shoe' ? (<div className='productContainer'>

                <div className='orderImages'>
                  <Image w={'100%'} src={el.shoesProduct.images[0]} alt='shoe images' />
                </div>

                <div>

                  <div>
                    {el.shoesProduct.title}
                  </div>

                  <div>
                    <Button variant={'none'}
                      style={{ backgroundColor: getStatusColor(el.deleiveredStatus) }}

                    >{
                        el.deleiveredStatus === 'pending' ? "Pending" : el.deleiveredStatus === 'delivered' ? "Delivered" : "Shipped"
                      }
                    </Button>
                  </div>

                </div>

              </div>) : el.productModel === 'women' ? <div className='productContainer'>

                <div className='orderImages'>
                  <Image src={el.womensProduct.images[0]} alt='women images' />
                </div>

                <div>

                  <div>
                    {el.womensProduct.title}
                  </div>

                  <div>
                    <Button variant={'none'}
                      style={{ backgroundColor: getStatusColor(el.deleiveredStatus) }}

                    >{
                        el.deleiveredStatus === 'pending' ? "Pending" : el.deleiveredStatus === 'delivered' ? "Delivered" : "Shipped"
                      }
                    </Button>
                  </div>

                </div>

              </div> : <div className='productContainer'>

                <div className='orderImages'>
                  <Image w={'100%'} src={el.mensProduct.images[0]} alt='mens images' />
                </div>

                <div>

                  <div>
                    {el.mensProduct.title}
                  </div>

                  <div>
                    <Button variant={'none'}
                      style={{ backgroundColor: getStatusColor(el.deleiveredStatus) }}

                    >{
                        el.deleiveredStatus === 'pending' ? "Pending" : el.deleiveredStatus === 'delivered' ? "Delivered" : "Shipped"
                      }
                    </Button>
                  </div>

                </div>

              </div>
            }

          </div>
        ))
      }

    </DIV>
  )
}


const DIV = styled.div`

/* border: 2px solid blue; */
/* height: 500px; */

.orderImages{
  width: 10%;
}



.productContainer{
  
  display: flex;
  /* border: 2px solid red; */

  /* display: grid;
  grid-template-columns: repeat(5, 1fr); */
  /* gap: 0px; */
  margin-bottom: 20px;
}

.productContainer > div{
  margin-left: 10px;
}

Button{
  margin-top: 20px;
}

@media screen and (max-width: 900px) {
    
      .productContainer{
        flex-direction: column;
      }


      .orderImages{
      width: 20%;
       }
   
      
    }


    @media screen and (max-width: 420px) {
    
    

    .orderImages{
    width: 40%;
    margin-bottom: 20px;
     }
 
    
  }



`
