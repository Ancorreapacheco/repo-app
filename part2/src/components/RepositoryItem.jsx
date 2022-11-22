import { View, StyleSheet, Image, Text } from 'react-native'
//import Text from './Text'
import theme from '../utils/theme'
const styles = StyleSheet.create({
	card: {
		marginBottom: 5,
    backgroundColor: theme.colors.white
	},
	card__header: {
		display: 'flex',
		flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: 5,
    marginBottom: 8
    
	},
	card__content: {
		display: 'flex',
    flexGrow:2,
    alignItems: 'flex-start',
    
	},
	card__footer: {
		display: 'flex',
		flexDirection: 'row',
	},card__img:{
    width: 50,
    height: 50,
    borderRadius:5,
    marginRight:10
  },
  card__btn:{
    backgroundColor: theme.colors.btn,
    borderRadius: 5,
    minWidth: 60,
    color: theme.colors.white,
    textAlign:'center',
    paddingVertical: 6,
    paddingHorizontal: 12,    
  },
  marginBottom:{
    marginBottom: 8,
    
  }
})

const RepositoryItem = ({ repository }) => {
  console.log(repository.ownerAvatarUrl)
	return (
		<View style={styles.card}>
			<View style={styles.card__header}>
				<Image style={styles.card__img} source={{uri: repository.ownerAvatarUrl}}/> 
				<View style={styles.card__content}>
					<Text theming='primary' style={styles.marginBottom}>{repository.fullName}</Text>
					<Text style={styles.marginBottom}>{repository.description}</Text>
					<Text style={styles.card__btn}>{repository.language}</Text>
				</View>
			</View>
			<View style={styles.card__footer}>
				<Text>Stars: {repository.stargazersCount}</Text>
				<Text>Forks: {repository.forksCount}</Text>
				<Text>Reviews: {repository.reviewCount}</Text>
				<Text>Rating: {repository.ratingAverage}</Text>
			</View>
		</View>
	)
}

export default RepositoryItem
