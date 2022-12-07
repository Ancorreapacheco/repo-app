import { useMutation, useApolloClient } from '@apollo/client'
import { SIGNIN } from '../graphql/mutations'

//Context
import useAuthStorage from './useAuthStorage'


const useSignIn = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const [mutate, result ] = useMutation(SIGNIN,{
    /* onError:(error) => {
      console.log(error)
    } */
  })

  const signIn = async ({ username, password}) => {
    const credentials= {username,password}
    const { data } = await mutate({variables: {credentials}})    
    const token = data ? data.authenticate.accessToken : null
    if(token){
      await authStorage.setAccessToken(token)
      await apolloClient.resetStore()
    } 
  }

  return [signIn, result]
  

}

export default useSignIn