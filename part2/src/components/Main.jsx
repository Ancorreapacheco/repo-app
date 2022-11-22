// npx expo install expo-constants

import AppBar from './AppBar'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import theme from '../utils/theme'

const styles = StyleSheet.create({
	container: {		
		flexGrow: 1,
		flexShrink: 1,
    backgroundColor: theme.colors.background
	},
})

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />			
			<RepositoryList />
		</View>
	)
}

export default Main
