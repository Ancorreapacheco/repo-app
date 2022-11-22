//Modification of the TExt Core components with styles

import { Text as NativeText, StyleSheet } from "react-native"

import theme from "../utils/theme"

const styles= StyleSheet.create({
  primary:{
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  },
  secondary:{
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal
  },
  tab:{
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  },
  default:{
    color: '#000000'
  }
})

const Text = ({ theming , style, ...props }) => {

  let textStyle
  switch (theming) {
    case 'primary':
      textStyle = styles.primary
      break;
    case 'secondary':
      textStyle = styles.secondary
      break
    case 'tab':
      textStyle = styles.tab
      break
    default:
      textStyle = style
      break;
  }

  textStyle= [textStyle, style]

  return <NativeText style={textStyle} { ...props } />

}

export default Text