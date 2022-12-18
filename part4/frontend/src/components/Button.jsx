import { Pressable, Text, StyleSheet } from 'react-native'

import theme from '../utils/theme'

const styles = StyleSheet.create({
	btn:{
    backgroundColor: theme.colors.btn,
    borderRadius: 5,
    minWidth: 60,
    color: theme.colors.white,
    textAlign:'center',
    paddingVertical: 6,
    paddingHorizontal: 12,  
    overflow: "hidden",
    marginHorizontal:30,
    height:40,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold  
  },
  btn__back:{
    backgroundColor: theme.colors.white,
    paddingBottom:10
  }

})

const Button = ({ onPress, label, style }) => {

  const btnStyle = [styles.btn , style]
	return (
		<Pressable onPress={onPress} style={styles.btn__back}>
			<Text style={btnStyle}> {label} </Text>
		</Pressable>
	)
}

export default Button
