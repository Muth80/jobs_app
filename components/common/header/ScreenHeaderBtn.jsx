import React from 'react'
import {  TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={styles.btnImg(25)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn;