import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import {  View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import theme from "../utils/theme";

const initialValues= {
  username: '',
  password: ''
}

const styles = StyleSheet.create({
  form:{    
    marginTop:10,
    padding: 10,
    backgroundColor: theme.colors.white,  
    },
    form_btnContainer:{
      alignItems: "center",
    },
    form_btn:{      
    backgroundColor: theme.colors.btn,
    borderRadius: 5,
    minWidth: 60,
    color: theme.colors.white,
    textAlign:'center',
    paddingVertical: 6,
    paddingHorizontal: 12,  
    overflow: "hidden"
    }
  
})

const SigInForm = ({onSubmit}) => {
  return(
    <View style={styles.form}>
      <FormikTextInput name='username' placeholder='Username' />   
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />   
      <Pressable style={styles.form_btnContainer} onPress={onSubmit}>
        <Text style={styles.form_btn} >Sign In</Text>
      </Pressable> 
    </View>
  )
}

const SignIn = () => {


  const login = (values) => {
    console.log('Clickme')
    console.log(values)
  }
  return (
    
    <View>      

      <Formik initialValues={initialValues} onSubmit={login}>
        {({ handleSubmit }) => <SigInForm onSubmit={handleSubmit} />}
      </Formik>     

    </View>
  )
};

export default SignIn;