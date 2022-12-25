// npx expo install expo-constants
import { StyleSheet, View } from 'react-native'

import theme from '../utils/theme'

//Components
import RepositoryList from './RepositoryList'
import RepositoryView from './RepositoryView'
import AppBar from './AppBar'
import SignIn from './SignIn'
import CreateReview from './CreateReview'


//Routing
import { Route, Routes, Navigate,  } from 'react-router-native';
import SignUp from './SignUp'


//Styles
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
      <Routes>
        <Route path='/repository/:id' element={<RepositoryView/>} />
        <Route path="/create_review" element={<CreateReview />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
	)
}

export default Main
