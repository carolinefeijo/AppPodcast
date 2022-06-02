import { Image } from 'react-native'
import React from 'react'

export default TabBarIcon = ({  focused,  icon,  iconFocused, }) => {

    return (
        <Image
            source={focused ? iconFocused : icon  }
       >     
      </Image> 
    
    )
}