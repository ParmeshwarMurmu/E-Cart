import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import shoppingTime from '../Images/shoppingTime.jpg'
import WomenShoeSlideShow from '../Images/WomenShoeSlideShow.png'
import slideshow1 from '../Images/slideshow1.png'
import slideshow2 from '../Images/slideshow2.png'
import slideshow3 from '../Images/slideshow3.png'
import slideshow4 from '../Images/slideshow4.png'


export const HomeOfferSlideShow = () => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const arr = [
        slideshow3,
        slideshow1,
        slideshow2,
        slideshow4,
        // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AmwMBEQACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAUCAQYAB//EADgQAAIBAwMDAgQEBAQHAAAAAAECAwAEEQUSIRMxQSJRBhRhcSMyobEVM0LBUpHR4UNicoGCwvD/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADYRAAICAQQABQEGBQIHAAAAAAABAhEDBBIhMQUTIkFRcRQyYYGR4QahwdHwsfEVI0JDUnKS/9oADAMBAAIRAxEAPwDzUM5tJprhSHjBwpNeeVSSi+wH0UE1D5i32iEFj3PtWSWLbO7BQoHiDBZScjwKY1J9BtjEF5BAzGZfSR6TSpYpy+6Cca8heEgSFR4GatY5KREhZiSerC3Yc5pq+GQzFfShggX7mpLDHsuERuOSWR9oGPrUSjFcmhVRm9EiptDZPvWjGosNUxEFlIUgnPetCSQSQrd3UltIiwA896bFJrkt9hWViFebnzj2oGUz4T9Bw0YIDd6Q8e5i9vI0ZGnKxKBg+am5QZbaFp7aOzuMhsnHejc98QHyT76G3JEu/LnuKZjk6oFKjivBGm5c7qLstMxPJHJFubknzUXD4LbEoHQyjYSBTJJ7SdnoY4QUHPisVMvaRo7oRs6yuemByue5p8sdq12ZTVhqMr7kDbUJ4NVlwRXLCjQ9Ew3kliT7mlOPA3ajrTlyFm7VFjpWibQuYWUbTnFA4yRVcUDj6kmQr7VzV7UuwVEetV2xnsz+CKGTixqaMw3kpmZZDs20Pkp9FpcjM18jDA9VXHFJOwwEd0jvjbTba7KUqYRIUEoaUd+3FNjLgN/Ia5td8XVQ5HtQOfNEbsQaETKuZAAD2pidKwG2FuOnBBuUndWfbukDt4FFje4TcW7+9G3QNCVxAC+AMEeKdGXpCa4Pjas4AxxQKfItLkYOnqtudwq9zsZtoSFngEoAfrTd5dcDUa3QQAA4+1DcSWyDIVkaRT3rQltoydnbJmj9J7Z70ORKXJZag37QwGRWNrkYmcnUy89sU2M0uBiZiPEYzuyaGbb4BYUvkZVsfagS5LOC7eAZVs1flxbIMx3aT8kesiq2yTCQOSNlPLGmpoYdtsK+A2T7UnIhdcllZx0/WOaCLvgapcAJJiwwpOzzU+6+QHwLxWskk67OF80bypoHssSW0S2u2XG40Cmhm5JE9oFt2UhgQfrVTbfsA5AZbVJ5+oHAwORRqVQ5J2jj25VMKR370PbtAbaCQzGRlhbGB3p7+6Hu4o2lvtmcoBsHil7rRLNgt4j4pe5fIO48W9v05cZ4P1rpuXBnD/LgDJJ2igsJRGbed+mApJUUqcRiiMCYFMMO/wBKS40+C6Oi16o9DbanmV2CcSymXJJyKjzQfRdhYrN5v+HnFVu+C1Fy6PlaKCQBgBV3JoidDqm3nx1GwKVvlFhbg9pYxQ3G9GypoZ5rIpKxy6hDDIAz9KimnyMbRjoBLYuAM5qpStAvoW/EixIhxk4rXodJPVT8uPH1FOairOTi6ZJQzMT1ACv+EYNduHhVKFrlPn/PqD5l8id07RSlz6ljbbGv/NWh6SLeSXvJ0voAnwjOnqGaQdXdJkGTHiuN4l6JKEVUUOjzyUJYsRBVOR71ylmLchaC0/G3tKcCm+duVFJ2HZwd/TY5FV+AYiZ7wHAfip5cBdE+4aNRGdn4nnIrY7Ypcj00fVthKEULjlaXF+qhsUcs4hGmHQANRT5HUN/w9WjMinj2pcW2XtOiJY4s8FvalTSsXKgb3JUflGKUsaYmuQ0e9lzG20keKpT28BRk49CUmny9bJGRTVmVFNmHtXLhjx9qPdwElaH4hJGo7kVmkk2LaY5DFdyMMJIV+xrdg8J1Of7sKXy+P9f6C3kUfcdisryUbFtpX+iqTXpNN4HptPzN7n+P+UB9psY/gdy0S77W4wjZIaMgj9ORXQ3aeOVTbju+bRW/cqV/owctuYA/WR+wzkc8f7VptSdoilXZG1UKy/h8zZOD7ZpeeKjjcnxXuXHIro+0+zWytSpXMjHcxPvXgtfq/tGV7el0a4ppHDMUPK8VkUC1x2Jy3a72Cng05Yynz0dikCrkDNXXJLCdVfal0wOQLWiu6mYesGtqlxwNjBAbjMDdjtz296kSJUzQme5nXbwBRSqK5GOXJVhlMMLqTy3vSd6JvRzT7WG7MpmkK7RwPesupyuDW1AelgZLbarY5weBUWRMTuC2/wCEA0gAx2Apc+XSJwMxpPMw6UMhDeymihgyS5jFv6Ipyiu2NR2DR5+dURD+newH6d66WHwvXZfuw/XgS9Vjxr1MDPbAyqsN1bKvklj/AGFej8I8Flp5ebnjcvb3r9zDqdfCSqDLWmppeldOe+nF0zD0xqu1R98nJrD494trML8jTpJv37r9/wBTs+CeCvXxeW+PzocvPjEXEYt7aU26ZwGjz29u3FeKemy5Jueom5/U9vp/BVh9TimSWuhPcMomM5xnnORTYwx411wdBQ2QuqM6v87BbKt2wit84DZwQe4BPiutptXrNLzjtL9UeV8S0/261jUJNd0/V/Ov5E+W2CAHC7wMUnNrdRnjtyzbXwed8tRd1T/sB6+DhuwrJT9g94tdzLINuOPFOi2DdizW9uBjI5o1OdlN0dKdMAYyvvUdvkKjQZcflodrIVrZEM5Ljj3pccrLjlo1qFvBcYwBgUfmuIe+LfIqkdpATsjYnyeoB+mDVPJKS5HeZo/dyf6L+rByXkC94B/5En+9RQvoZHN4cu4Tf5r+gMXwH8uOAD/pJ/c0Sxxtbmxn2vw2PWnb+sjTX15tzGsK/XYo/tWhafSP/uP/AOf3HQ8V0cfu6Rfr+wS3vdWIzFKVx5VgP2FM2aHE03OV/wDr+43/AI9FKo6aNfX9j65bWLhB1nRwf8cxP/rTX4nT9OSf8v7szy1+lmudLC/8+glNbXsJVmulyx/lgZA969L4Rrc+vbSVKPbfz9ODy+vxaeD3KNX7I9Z8DQrd3D20yJLxvJY/lA9h/vWD+LPtmHTebiyNJdpe5fg/kSzOM4Jv2st/EWj2ENqbkQgPuHK+SfJzXzjS6vNkntcr+p9G8P1OXcsS6PGag6xW8jrkBVJUIoz9hXYwpykkdvJmWHE8svYi6Rc6lFeLMLUhAcsH9JIrfkhhrl2ea1HjSyRcSp/HLi41tZdTtB8pErGOMneGfjBP+lPnkg4el8nnlnafwg0dwsCqZW3g9zWBwpiHx2cBinzkYBNJm2nwA+TpgtsqHPH0NSDk3yRIabT9Pkg2wtmbxzWm0lQzbGuBK4d1hW3eNfQfzAUrcLlk4oECmP5dDuYG8qS6XeMoMfjvS8bXuEsbYE2V3s2sh+tGqbouUGJvasnLjH/ej4QmmBkt42YCU4HvV72l6SdDcdlBEAfTz25pEssmyrNNDbT4jyMfQ0zHklj5GKVDVhAkDenBWr8/c+Q45BuSD1jBXafFXw3wMTTZ5fVjIuozRMDhDgccEYB4r3/gMIrRpw7fZy9c/wDmc9BtG1GfSr2O6t94ZeDtAGR/lXS1GljnxvHNWmYo5HCSlB00etm+N7W5tXiurEjcCMK4YZ8e1eF1v8E5PN83SzS/Do7ui/iDy5LfF/kQ0aNlkkjdJCi7gAQa5uXQ6nT85YNI9lrfE9NrNDOOCabpN/qhc3fBO3GfGKQoNdHkUqQKYwvHuPJpqspjcPySIpPJx2NKmpsulRVMFpPaA+lQBk4PNIakmHSaPOaiBFN+Fkp44rXi9ceexUkYsbvZNkHBFXJOKATaHdk87B9uQTyTWZuKYG1thcKvBAyKiG7CzDqMkrhg6hT4o5Ymlwa9vwG+a3Od+DmosXvYWy0CudOguiMEqTQKTEvCL3Pw8dqmNw1E8guWESm0a9yHxnZ2HvQRyR6EvGxP5G8352BTnxRebjXAMoUN20M0R/FNJnOL+6UlQ8G3Mu3NL3yGRfJG+IY5vn1YEhXT08bu3fjwO3evc/w3nrA4Lu/h/wCwGfGpO5E/1j87fccf2r03my+TN5UPgG45Dp2HcilvLw0TylvsY0+ORmkC/wBIzjPJzxXF8az+Xomv/Jpf1DxYqyX1QYwuCVxkV42M4m1M+W0d32gGieRPokjQtGZthbaapZLBsMtjdEEISQKNOLDimPQwibprIg3L3rA5OMuCN2MtottDJ8wBkt49qZOc3CrL8t9mjsCkAhR7UEYcWFtEGtwzE7hTFkolBf4XKrRkN96bDUJfeHIb6RRwCtU8ifRe7kC0twLgqEbb4NEoRohVspnWMGUHH1rBmVS9JXHuOxy7mweQaCMmnQtpGprSLdkECmeRbsnl3yIy2yyZJHmkOM+0A8Vg9giHMfHvU9cOWC47eSTrFnJfBDEy7lbjcxwB9q7Xhfiq0km5Lv8AD+4vI4zPPMw3EoCYwcb2UgE/QV7fT6t51zSfdWm6/IR6UdeKRdvocmT8qhSS32HmmPUYdjnuVLvktcukWNBsJEhknMbfiHC5Hj/79q8v/Eeq8yUMEOly/wA+v8/ELHjlbkVBZMeSnNeZ2TH7JH3yhJBPpxQPfEry5GDpLSNuzTIuddFeUxyziEAKjk/WijvHRjRmRV6hOMGqljk+QtoxAgaLaWz96KMJV6gkqQH+FdY5D06LdVRErANo5DEdSr3fgVQc2hDD8b9aS8q+AtwykSRYZn3VW5NgWaDwnJAANToI+Myjg4IoXSIzpnRRngUVohoTRsAe+adjufQvJnUTnXwcbAVrSsCMctXJvgDeXaK6oAC7cBaHLHHFUy45J5HQhGpMuHxjPNc6ePngdkxcWh+5slih3quR9ea0QikqMbVMLZWTtGJNij24qQxOKNSzqPFGZpuhKEcYPiqba7HwyblZiS5Ge+KpZkmF5iBtcRtwSKk5om4A16IlyDkUPL5RVtmor6NxnHNFco9oltGnmhblsUaytF72Ya6jjTCH/KhyTk1ZHJsJb3ijjPJoceX2BUmhjrRnnP60/cgtxHS8wSW5rNNcUikaW6aYewq4xphC007h8I/pp/l7kW+T6SdiFAbOKT5VPkE586Ay9QErnmmwwWFtvoo3mq25tFS0UrJ2JNaKaW1cGb7K5S9QIam1takyLuOO9SDkuGW9HEStZlc9SRt0hPHPalTg93I2GNQ4QxLNtY44qeWPceA2ifEaSXvyN8AFJwje9R42ufY5uRUz1ktysUkaooMOO4pefJKFKJSS9zzWrSTPftKkfoXtml7VlVN8mhQht7FmvyEO6LJx3xS/sU1yAsa7TJct2xzxjJ4xWt4LXA/Za4DxFmg2nz70OP79MuF3TNRLskwTT8sL5DkjTvu9I8UhxXYuj6JXL9uKOUVtCa4Dw2zyPnsKStsQeApspc8H9aX9oh8lCKWM3UGVOP3rTtjVhIbNqywiSNGGTtqe9ogIaRNNOrRj8w7e9NWRVRaaMXVlLDsUIQxOG+lVLaxkkqCJZEKA49ROAKkJpcIFSSG4LBI3Tqgc5yKuc+C94tqFtsDZGVzwKqE7L3E2K3AIlQ8e1O7VMlWMoeswR2AbNUohRd8EXVdKuDc7kbGDkYoI5owuLObni1M9h8Jabq17IDczkQoOx80EMKzP0h4sdq2U/jC3SxslW1ctPnke9PjpscMg6OnTjZH028u7cAX+ns8BGCQtbYyxNUG8UoroILXT7y4Z1V41xkKRihnCK5QUOAVzZQRn0OcftWGUPVaI+7BC3RznqKcfWl5NzJKTYzZ2MPV3Mw596DbKqAVvgoS20UCZXazHwKGWPI+EW4yQrIsgVQg2++KGGCXUgNrAkqDzcc0L0YOxlO1khjdEkC7BnkjzVqXs+i0HYo0ARCCoOdo96zpzXpTJ2LXZmhmKwJtXsGzzjzTJqUJNJ9l7dplgTBukUHOAC1ElLb6S7XR2e0VpYpARlRnGe9InkeNW+wnEHL1raUSNHuD52keKdLPS69gGpJg5YDOgZ8uGyftRYZvZ+JdicumKy7kO0eAK0xzc8hKddk6WxuEkEkcbOQeQozWmE4suT5tBBZX1xcqwhk6XnjtVZY43HrkpxeR3R7Sy1B7S2SOKzmZ8Y/Lipilsjwh/lro878Y6ncW4juprd1UEFsjPFRJzkXKexJFHSfie0ubKORkDKR96S8coSoepqSsauLy0lGUtT6uxApqeQXJRZiOC3eBiy7vdadsT7E7UR5NLie4VoFePn1L4oJx44LatFC30QSgs0jqPAFVGLXIMMddi2o2NxbIH6uTn0A96O2XLjor6LphFuJNRk3SNzjwKBxV2y1D3K40ywI/lRVdL5C/I/Poo8TySyS4PAXnIrly5xWYIqrkUJr2EI53qNo4z496X998e4UHwSrT4nV75o/w3SJT6s/mrozwbEpLktT3MDcapJqMyQg7EB3Y3YDGrTWNFNJuyxC7ELESwZf6yc5Brm6uSlVFud9Ap5boK5bIcZMQLdwO/FUoue1FqTk6QXR79p03SbvUu1am3ZOgY32y1pdjHdzASZ9HJLeBWzBB5ZVQS5HrvVtL0jKBAWXjgV0t+LFwkOWJvkLpN/Bfxi4VQuTyMUMZKT3NDKaVIcudQhXCxhWf2Aq5zVcEgmeS1+b55+nOgZe20Gldu0C7vkg2OjxaY5ePc2ey+BTotPmQEpVwiqt5NHh5VAGeBQTyxk+AIydgYdTWGSdFkyzNuH0oWx2+h+ylur9kS0Qkv+dyOFqQ3SdILzE0ex0/S47eBTKWkkxya1LGox+QN7bJPxBpccirLl4yjZHPBrDklLHbaHNRlERj1dbhflYlZ51GDxwKLa5x4AhOlyLTR3KyMBdSqPakbMq4orzpfBNktkK4IwEOQB71x98lKjCu6QOW1SSGS3lVSWUKZMcjPj7VqhKKhv+GFuVEaf4eji0We6jbNxE/LsT6x7fStUdU5yV9AJ0GsIbaexjJhCyrgA9xj/Whll27kxidopoDa4csW8EZ7mscXa3IqPETtxE1yonErKx4HPNMxW7bDgYjh6bfhuwKrlvY0DuUgP+qinYXchQbGKharz5wnUWWpuxLV7ZJkM0hZs9xnFaceoc3yPWZ1RY0exks9NUmUYcZATwPvW9NxjY2LtE3WtdOnWzi0h9ePU7HmpC2EpE3Qb0pPHqV4vWPJxnmj3VwClbsb1bUEvZ42t4uju7gUpyvkkoo9Dp2nWstshkj3P7nml20GoRaO3OiW1v1LmNE/Jyu3FaOIRv5A226G/hKdGjkjESqEORj70ejzKTaoRLqkWJr9YXwEPFMy51F9F442ef8Aii+lutPkgiAVj2YnGKBS8x8jmqRH0eYxRRKwDSvkM/vil6icsLjGHuZ3LmjtzGzTueq/P1psW2rYSZ//2Q=="
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the currentIndex, or reset to 0 if at the end
            setCurrentIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Change the interval time as needed (e.g., 3000 milliseconds or 3 seconds)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [currentIndex, arr.length]);



    return (
        <DIV>

            <div className="slideshow-container">
                {/* {arr.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))} */}
                <img src={arr[currentIndex]} alt={`Slide ${currentIndex}`} style={{ maxWidth: '100%' }} />
            </div>
        </DIV>



    )
}


const DIV = styled.div`

margin-bottom: 30px;

.slideshow-container{
    /* border:2px solid red; */
    width: 100%;
    
}

.slideshow-container img{
    width: 100%;
    height: 40%;
    /* height: 50px; */
}
`