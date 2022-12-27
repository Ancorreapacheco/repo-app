import React from 'react'
import { useParams } from 'react-router-native'

import { format } from 'date-fns'

//Apollo Graphql client
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY_BY_ID, GET_REPOSITORY_REVIEW_BY_ID } from '../graphql/queries'

// For use url native in IOS and Android
//npx expo install expo-linking
import * as Linking from 'expo-linking'


//Import Components
import RepositoryItem from "./RepositoryItem";
import Button from './Button'
import Text from './Text'
import { View, StyleSheet, FlatList } from 'react-native'

// Theme
import theme from '../utils/theme'


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

const RepositoryInfo = ({ repository }) => { 

  const onPressBtn = () => {    
    Linking.openURL(repository.data.repository.url)
  }

  return(
    <View style={styles.container}>
        <RepositoryItem repository={repository.data.repository}/>
        <Button label='Open in GitHub' onPress={onPressBtn} />             
    </View>
  )

}

const ReviewItem = ({ item }) => {

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

const ItemSeparator = () => <View style={styles.separator}/>

const RepositoryView = () => {
  
  const params = useParams()  
  
  const repository = useQuery(GET_REPOSITORY_BY_ID,{
    variables: {"repositoryId": params.id },
    fetchPolicy:'cache-and-network'
  })

  const variables = {
    repositoryId: params.id,
    first: 3 
  }
  const {data, loading, fetchMore} = useQuery(GET_REPOSITORY_REVIEW_BY_ID,{
    variables,
    fetchPolicy:'cache-and-network'
  })
  
  const reviewsNodes = data
    ? data.repository.reviews.edges.map(node=> node.node)
    : []
  
  const onEndReach = () => {
    
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;  

    if (!canFetchMore) {
      return;
    }    
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  }

  if(repository.loading){
    return (<View>
      <Text> Cargando Datos</Text>
    </View>)
  }  
  
  return (    
    
    <FlatList
      data={reviewsNodes}      
      ItemSeparatorComponent={ItemSeparator}
      renderItem= {ReviewItem}
      keyExtractor={item => item.id} 
      ListHeaderComponent={() => <RepositoryInfo repository={repository}/>}
      onEndReached={onEndReach}    
    />   
  )
}

export default RepositoryView
