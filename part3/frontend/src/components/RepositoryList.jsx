
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

//Using fetch throug a customhook
//import useRepositories from "../hooks/useRepositories";

//Using Graphql
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";


const styles= StyleSheet.create({
  separator:{
    height: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator}/>

const RepositoryList = () => {

  //Using fetch with custom hook useRepositories
  /* const {repositories, loading } = useRepositories()
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : []
  if(loading){
    return (<View>
      <Text> Cargando Datos</Text>
    </View>)
  } */

  //Using Graphql
  const repositories = useQuery(GET_REPOSITORIES,{
    fetchPolicy:'cache-and-network'
  })  
   
  if(repositories.loading){
    return (<View>
      <Text> Cargando Datos</Text>
    </View>)
    
  }
  const repositoryNodes = repositories
  ? repositories.data.repositories.edges.map(edge => edge.node)
  : []  
  
  
  //------End Graphql-----------  
  
  const renderItem = ({item}) => <RepositoryItem repository={item}/>
  return(
    <FlatList
      data={repositoryNodes}
      
      ItemSeparatorComponent={ItemSeparator}
      renderItem= {renderItem}
      keyExtractor={item => item.id}    
    />
  )
}

export default RepositoryList