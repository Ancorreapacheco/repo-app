import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../utils/theme'
import Text from './Text'

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
	return (
		<View style={styles.container}>
			<ScrollView horizontal contentContainerStyle={styles.nav}>
				<Link to='/'>
					<Text theming='tab'>Repositories</Text>
				</Link>
				<Link to='/signin'>
					<Text theming='tab'>Sign In</Text>
				</Link>		
				
			</ScrollView>
		</View>
		//TODO fixing link and router exercise
	)
}

export default AppBar

//TODO Another good idea might be to separate the app bar's tab into its own component such as
//AppBarTab so that it is easy to add new tabs in the future.
