import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Constants from 'expo-constants'
import theme from '../utils/theme'
import Text from './Text'
import { useQuery, useApolloClient } from '@apollo/client'
import { ME } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'
import { useNavigate } from 'react-router-native'


import { Link } from 'react-router-native'

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.secundary,
	},
  nav:{    
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'space-evenly'
    
  }
})

const AppBar = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate= useNavigate()

  const {data} = useQuery(ME,{
    fetchPolicy:'cache-and-network'
  }) 

  const userSigned = data?.me?.username ? true : false
  

  const logOut = async () => {    
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
    navigate('/')
  }
  

  
	return (
		<View style={styles.container}>
			<ScrollView horizontal contentContainerStyle={styles.nav}>
				<Link to='/'>
					<Text theming='tab'>Repositories</Text>
				</Link>
        {userSigned !== true 
        ? <Link to='/signin'> 
            <Text theming='tab'>Sign In</Text> 
          </Link> : null		
        }
        {userSigned !== true 
        ? <Link to='/signup'> 
            <Text theming='tab'>Sign Up</Text> 
          </Link> : null		
        }
        {userSigned === true 
        ? <Pressable onPress={() => navigate('/create_review')}>
            <Text theming='tab'>Create Review</Text>
          </Pressable>
          : null
        }
        {userSigned === true 
        ? <Pressable onPress={logOut}>
          <Text theming='tab'>LogOut</Text>
          </Pressable>
          : null
        }
				
			</ScrollView>
		</View>
		
	)
}

export default AppBar

//TODO Another good idea might be to separate the app bar's tab into its own component such as
//AppBarTab so that it is easy to add new tabs in the future.
