import { useMutation } from '@apollo/client'
import { SIGNIN } from '../graphql/mutations'


const useSignIn = () => {

  const [mutate, result ] = useMutation(SIGNIN,{
    onError:(error) => {
      console.log(error)
    }
  })

  const signIn = async ({ username, password}) => {
    const credentials= {username,password}
    return await mutate({variables: {credentials}})
  }

  return [signIn, result]
  

}

export default useSignIn