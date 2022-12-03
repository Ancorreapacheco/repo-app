import { View, StyleSheet, Image } from 'react-native'
import Text from './Text'
import theme from '../utils/theme'
const styles = StyleSheet.create({
	card: {
		marginBottom: 5,
    backgroundColor: theme.colors.white
	},
	card__header: {
		display: 'flex',
		flexDirection: 'row',    
    alignItems: 'flex-start',
    padding: 5, 
    marginBottom: 8
    
	},
  card_imgContainer:{
    maxWidth: 60,
    maxHeight: 60,    
  },card__img:{
    width: 50,
    height: 50,
    borderRadius:5,
    marginRight:10,    
  },
	card__content: {     
    flexGrow: 1,
    flexShrink: 1,
    padding:5,
    alignItems: 'flex-start',
	},
  card__title:{    
    marginBottom: 8,
  },
  card__subHeading:{
    marginBottom: 8,       
  },
  card__btn:{
    backgroundColor: theme.colors.btn,
    borderRadius: 5,
    minWidth: 60,
    color: theme.colors.white,
    textAlign:'center',
    paddingVertical: 6,
    paddingHorizontal: 12,  
    overflow: "hidden"  
  },
	card__footer: {
		display: 'flex',
		flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
	},
  card__detail:{
    justifyContent: 'space-around',
    alignItems: 'center'
    
  }

})

const valueDetails = (value) => {
  
  if(value <= 1000) return value
  let valueCalculated = value/1000
  const valueRounded = Math.round(valueCalculated*100)/100
  return `${valueRounded.toFixed(1)}K` 
  
}

const RepositoyDetail = ({detail, value}) => {

  return (
    <View style={styles.card__detail}>
      <Text theming='primary' style={styles.card__title} > {value}</Text>
      <Text theming='secondary' style={styles.card__subHeading}> {detail} </Text>
    </View>
  )
}

const RepositoryItem = ({ repository }) => {
  
	return (
		<View style={styles.card}>
			<View style={styles.card__header}>
        <View style={styles.card_imgContainer}>
          <Image style={styles.card__img} source={{uri: repository.ownerAvatarUrl}}/>
        </View> 
				<View style={styles.card__content}>
					<Text theming='primary' style={styles.card__title}>{repository.fullName}</Text>
					<Text theming='secondary' style={styles.card__subHeading}>{repository.description}</Text>
					<Text style={styles.card__btn}>{repository.language}</Text>
				</View>
			</View>
			<View style={styles.card__footer}>        
          <RepositoyDetail detail='Starts' value={valueDetails(repository.stargazersCount)} />
          <RepositoyDetail detail='Forks' value={valueDetails(repository.forksCount)} />
          <RepositoyDetail detail='Reviews' value={valueDetails(repository.reviewCount)} />
          <RepositoyDetail detail='Rating' value={valueDetails(repository.ratingAverage)} />     			
			</View>

		</View>
	)
}

export default RepositoryItem
