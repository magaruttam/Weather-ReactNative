import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Header = ({title}) => {
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Svg style={style.icon} viewBox="0 0 640 640">
          <Path
            fill="#BBC3FF"
            d="M32 400c0 79.5 64.5 144 144 144h304c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1C375.5 127.3 327.4 96 272 96c-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5C73 282.7 32 336.6 32 400z"
          />
        </Svg>
        <Text style={style.title}>{title}</Text>
      </View>
      <Svg style={style.icon} viewBox="0 0 640 640">
        <Path
          fill="#DFE0FE"
          d="M320 64c-13.3 0-24 10.7-24 24v9.7c-81.4 11.6-144 81.7-144 166.3v14.5c0 37.7-10 74.7-29 107.3l-21.9 37.4c-3.3 5.8-5.1 12.3-5.1 19 0 20.9 16.9 37.8 37.8 37.8h372.4c20.9 0 37.8-16.9 37.8-37.8 0-6.7-1.8-13.3-5.1-19L517 385.7c-19-32.6-29-69.6-29-107.3v-14.5c0-84.6-62.6-154.7-144-166.3v-9.7c0-13.3-10.7-24-24-24zm168.4 368H151.5l12.9-22.1C187.7 370 200 324.6 200 278.5V264c0-66.3 53.7-120 120-120s120 53.7 120 120v14.5c0 46.2 12.3 91.5 35.5 131.4l12.9 22.1zm-236.3 96c9.9 28 36.6 48 67.9 48 31.3 0 58-20 67.9-48H252.1z"
        />
      </Svg>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  icon: {
    height: 24,
    width: 24
  },
  title: {
    color: '#DFE0FE',
    fontWeight: 'bold',
    fontSize: 16
  }
})
export default Header