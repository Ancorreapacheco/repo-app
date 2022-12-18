import React from 'react'
import { useParams } from 'react-router-native'

import { format } from 'date-fns'

//Apollo Graphql client
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY_BY_ID } from '../graphql/queries'

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


export const RepositoryView = () => {
  
  const params = useParams()
  
  
  const repository = useQuery(GET_REPOSITORY_BY_ID,{
    variables: {"repositoryId": params.id },
    fetchPolicy:'cache-and-network'
  })

  const reviews = {
    "data": {
      "repository": {
        "id": "jaredpalmer.formik",
        "fullName": "jaredpalmer/formik",
        "reviews": {
          "edges": [
            {
              "node": {
                "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 96,
                "createdAt": "2022-12-07T05:35:37.618Z",
                "user": {
                  "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb",
                  "username": "leeroyjenkins"
                }
              }
            },
            {
              "node": {
                "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 89,
                "createdAt": "2022-12-07T06:35:37.618Z",
                "user": {
                  "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f",
                  "username": "johndoe"
                }
              }
            },
            {
              "node": {
                "id": "cff8872a-8ff5-4092-ac2f-d79e65f18aa2.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 100,
                "createdAt": "2022-12-07T07:35:37.618Z",
                "user": {
                  "id": "cff8872a-8ff5-4092-ac2f-d79e65f18aa2",
                  "username": "elina"
                }
              }
            },
            {
              "node": {
                "id": "1b10e4d8-57ee-4d00-8886-e4a049d7ff8f.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 70,
                "createdAt": "2022-12-07T08:35:37.618Z",
                "user": {
                  "id": "1b10e4d8-57ee-4d00-8886-e4a049d7ff8f",
                  "username": "matti"
                }
              }
            },
            {
              "node": {
                "id": "bbe42984-051b-4a01-b45d-b8d29c32200c.jaredpalmer.formik",
                "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
                "rating": 95,
                "createdAt": "2022-12-07T09:35:37.618Z",
                "user": {
                  "id": "bbe42984-051b-4a01-b45d-b8d29c32200c",
                  "username": "kalle"
                }
              }
            }
          ]
        }
      }
    }
  }

  const reviewsNodes = reviews.data.repository.reviews.edges.map(node=> node.node)
  

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
    />   
  )
}
