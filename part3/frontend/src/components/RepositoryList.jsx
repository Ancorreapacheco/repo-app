
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";


const styles= StyleSheet.create({
  separator:{
    height: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator}/>

const RepositoryList = () => {

  const {repositories, loading } = useRepositories()

   
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : []
     
  const renderItem = ({item}) => <RepositoryItem repository={item}/>
  
  if(loading){
    return (<View>

      <Text> Cargando Datos</Text>

    </View>)
  }

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