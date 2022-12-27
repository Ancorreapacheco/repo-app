import { Text, FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'
import ReviewItemCard from './ReviewItemCard'

const styles = StyleSheet.create({  
  separator:{
    height: 10,
  }
})

const MyReviews = () => {

  const { data: user, loading } = useQuery(ME,{
    fetchPolicy:'cache-and-network',
    variables:{
      includeReviews:true
    }
  })

  console.log(user)

  if(loading){
    return <Text> Cargando Datos</Text>
  }

  /* if(user?.reviews.edges.length === 0){
    return <Text> No hay reviews disponibles </Text>
  } */

  const reviewsNodes = user
    ? user.me.reviews.edges.map((node) => node.node)
    : []

  const reviewsNodesM= reviewsNodes.map(node => {
    return {...node,user:{username: `${node.repository.ownerName}/${node.repository.name}`}}
  })  

  const ItemSeparator = () => <View style={styles.separator}/>

  return (    
    <FlatList
      data={reviewsNodesM}      
      ItemSeparatorComponent={ItemSeparator}
      renderItem= {ReviewItemCard}
      keyExtractor={item => item.id} 
    />   
  )
}

export default MyReviews