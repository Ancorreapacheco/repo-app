import { FlatList, View, StyleSheet } from "react-native";
import { repositories } from "../db";
import RepositoryItem from "./RepositoryItem";


const styles= StyleSheet.create({
  separator:{
    height: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator}/>

const RepositoryList = () => {

  const renderItem = ({item}) => <RepositoryItem repository={item}/>

  
  return(
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem= {renderItem}
      keyExtractor={item => item.id}
      
    
    />
  )
}

export default RepositoryList