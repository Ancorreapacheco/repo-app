
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

//Using fetch throug a customhook
import useRepositories from "../hooks/useRepositories";

const styles= StyleSheet.create({
  separator:{
    height: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator}/>

//For testing, I extracted the pure code in its own component (container)
export const RepositoryListContainer  = ({ repositories }) => {
    
  const repositoryNodes = repositories
  ? repositories.data.repositories.edges.map(edge => edge.node)
  : []  
  
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
  const {repositories} = useRepositories()
  
   
  if(repositories.loading){
    return (<View>
      <Text> Cargando Datos</Text>
    </View>)
    
  }  
  
  //------End Graphql-----------  

  return <RepositoryListContainer repositories={repositories}/>
  
  
  
}

export default RepositoryList