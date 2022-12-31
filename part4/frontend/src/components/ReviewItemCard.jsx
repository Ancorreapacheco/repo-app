import { View, StyleSheet,Alert } from 'react-native'
import React from 'react'
import theme from '../utils/theme'
import { format } from 'date-fns'
import Text from './Text'
import Button from './Button'
import * as Linking from 'expo-linking'



const styles = StyleSheet.create({
	container: {
		paddingBottom: 10,
	},
	separator: {
		height: 10,
	},
	card__container: {
		display: 'flex',
		backgroundColor: theme.colors.white,
		padding: 10,
    
	},
	card__header: {
		display: 'flex',
		flexDirection: 'row',
	},
	card__ratingContainer: {
		borderColor: theme.colors.btn,
		borderWidth: 2,
		width: 50,
		height: 50,
		borderRadius: 25,
		margin: 2,
		padding: 2,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card__ratingText: {
		color: theme.colors.btn,
	},
	card_content: {
		flexGrow: 1,
		flexShrink: 1,
		alignItems: 'flex-start',
		paddingRight: 20,
	},
	card__footer: {
    display:'flex',
		flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems:'center',    
    padding: 10
    
	},
  card__btn:{
       
  },
	card__btn__delete: {
		backgroundColor: theme.colors.btnDelete,
	},
})



const ReviewItemCard = ({ item, deleteReview }) =>  {

	const date = format(new Date(item.createdAt), 'dd.MM.yyyy')
  
 

  
	const viewRep = () => {
		console.log('View repository', item)
    Linking.openURL(item.repository.url)
	}

	const deleteReviewId = () => {		
    Alert.alert('¿Delete Review?','¿Are you sure?',[
      {
        text: 'Aceptar',
        onPress: () => {              
          
          deleteReview(item.id)
        },        
      },
      {
        text: 'Cancelar',               
      },
    ])
    
	}

	return (
    

      <View style={styles.card__container}>
        <View style={styles.card__header}>
          <View style={styles.card__ratingContainer}>
            <Text theming='secundary' style={styles.card__ratingText}>
              {' '}
              {item.rating}{' '}
            </Text>
          </View>
          <View style={styles.card_content}>
            <Text theming='primary'> {item.user.username} </Text>
            <Text theming='secundary'> {date} </Text>
            <Text> {item.text} </Text>
          </View>
        </View>
        <View style={styles.card__footer}>
          <Button style={styles.card__btn} onPress={viewRep} label='View Repository' />
          <Button
            onPress={deleteReviewId}
            label='Delete Review'
            style={[styles.card__btn, styles.card__btn__delete]}
          />
        </View>
      </View>

    
	)
}

export default ReviewItemCard
