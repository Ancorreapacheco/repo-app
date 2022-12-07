//Testing
//Config package.json and .eslintrc
//npm install --save-dev jest jest-expo eslint-plugin-jest
//npm install --save-dev --legacy-peer-deps react-test-renderer@18.2.0 @testing-library/react-native @testing-library/jest-native


//Routing
//npm install react-router-native
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'

//Apollo Graaphql Client
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'

//Contexto
import AuthStorageContext from './src/context/AuthStorageContext'

import Main from './src/components/Main'
import AuthStorage from './src/utils/authStorage'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

export default function App() {
	return (
		<NativeRouter>
			<ApolloProvider client={apolloClient}>
				<AuthStorageContext.Provider value={authStorage}>
					<Main />
					<StatusBar style='auto' />
				</AuthStorageContext.Provider>
			</ApolloProvider>
		</NativeRouter>
	)
}
