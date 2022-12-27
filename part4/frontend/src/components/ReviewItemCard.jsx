import { View,  StyleSheet } from 'react-native'
import React from 'react'
import theme from '../utils/theme'
import { format } from 'date-fns'
import Text from './Text'

const styles = StyleSheet.create({
  container : {    
    paddingBottom: 10
  },
  separator:{
    height: 10,
  },
  card__container:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    padding: 10
  },
  card__ratingContainer : {
    borderColor: theme.colors.btn,
    borderWidth: 2,
    width:50,
    height:50,
    borderRadius: 25,
    margin:2,
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card__ratingText:{
    color: theme.colors.btn,    
  },
  card_content:{
    flexGrow: 1,
    flexShrink: 1,    
    alignItems: 'flex-start',
    paddingRight: 20
  }
})

const ReviewItemCard = ({item}) => {
  const date= format(new Date(item.createdAt),"dd.MM.yyyy")
  
  
  return (<View style={styles.card__container}>
    <View style={styles.card__ratingContainer}>
      <Text theming='secundary' style={styles.card__ratingText}> {item.rating} </Text>
    </View>
    <View style={styles.card_content}>
      <Text theming='primary'> {item.user.username} </Text>
      <Text theming='secundary'> {date} </Text>
      <Text> {item.text} </Text>
    </View>
  </View>)
}

export default ReviewItemCard