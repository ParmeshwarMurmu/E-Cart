import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from '@chakra-ui/react'

export const Categories = ({images, alt}) => {
  return (
    <div>
      <WrapItem>
        <Avatar  size='lg' name='Christian Nwamba' src={images} alt={alt} />
      </WrapItem>

      
    </div>
  )
}
