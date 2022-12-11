import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'

import { useQuery } from '@apollo/client'
import { GET_REPOSITORY_BY_ID } from '../graphql/queries'

// For use url native in IOS and Android
//npx expo install expo-linking
import * as Linking from 'expo-linking'


//Import Components
import RepositoryItem from "./RepositoryItem";
import Button from './Button'

// Theme
import theme from '../utils/theme'


const styles = StyleSheet.create({
  container : {
    backgroundColor: theme.colors.white,
    paddingBottom: 20
  }
})


export const RepositoryView = () => {
  
  const params = useParams()
  
  
  const repository = useQuery(GET_REPOSITORY_BY_ID,{
    variables: {"repositoryId": params.id },
    fetchPolicy:'cache-and-network'
  })

  const onPressBtn = () => {
    
    Linking.openURL(repository.data.repository.url)
  }

  if(repository.loading){
    return (<View>
      <Text> Cargando Datos</Text>
    </View>)
  }  
  
  return (

    <View style={styles.container}>
      <RepositoryItem repository={repository.data.repository}/>
      <Button label='Open in GitHub' onPress={onPressBtn} />
      
    </View>
  )
}
