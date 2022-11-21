import { View, StyleSheet, Pressable } from 'react-native'
import Constants from 'expo-constants'
import theme from '../utils/theme'
import Text from './Text'

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.secundary,
		height: 50,
	},
	// ...
})

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Text theming='tab'>Repositories</Text>
			</Pressable>
		</View>
	)
}

export default AppBar


//TODO Another good idea might be to separate the app bar's tab into its own component such as 
//AppBarTab so that it is easy to add new tabs in the future.