//Routing
//npm install react-router-native
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'

//Apollo Graaphql Client
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'

import  Constants  from 'expo-constants'

import Main from './src/components/Main'


const apolloClient = createApolloClient()

export default function App() {

  console.log(Constants.manifest)
	return (
		<ApolloProvider client={apolloClient}>
			<NativeRouter>
				<Main />
			</NativeRouter>
			<StatusBar style='auto' />
		</ApolloProvider>
	)
}
