import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles= StyleSheet.create({
  custom:{
    
  }
})


const TextInput = ({style, ...props}) => {

  const textInputStyle= [style, styles.custom]
  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
