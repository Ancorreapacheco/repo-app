import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

import theme from '../utils/theme'

const styles = StyleSheet.create({ 
  errorText: {
  color:'blue',
  marginTop:5,
  },
  basic:{
    borderColor:theme.colors.textSecondary,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom:10,
    paddingVertical:5,
    minHeight: 50,


  } 

})

const FormikTextInput = ({ name, style, ...props }) => {
	const [field, meta, helpers] = useField(name)
	const showError = meta.touched && meta.error

	return (
		<>
			<TextInput
				onChangeText={(value) => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
        style={[styles.basic, style]}        
				{...props}
			/>
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</>
	)
}

export default FormikTextInput