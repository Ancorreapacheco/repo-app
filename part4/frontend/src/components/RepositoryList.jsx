import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";

//Using fetch throug a customhook
import useRepositories from '../hooks/useRepositories'
import { useState } from 'react'

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
})

const ItemSeparator = () => <View style={styles.separator} />

//For testing, I extracted the pure code in its own component (container)
export const RepositoryListContainer = ({
	repositories,
	setOrder,
	order,
  setSearchQuery,
  searchQuery,
  onEndReach
}) => {
	const navigate = useNavigate()

	const onClickRepository = (id) => {
		navigate(`/repository/${id}`)
	}

	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: []

	const renderItem = ({ item }) => {
		return (
			<Pressable onPress={() => onClickRepository(item.id)}>
				<RepositoryItem repository={item} />
			</Pressable>
		)
	} 

  const PickerComponent= () => {
    return(<Picker
      selectedValue={order}
      onValueChange={(itemValue) => setOrder(itemValue)}
    >
      <Picker.Item label='Latest Repo'value="1"/>
      <Picker.Item label='Highest rated repositories' value="2" />
      <Picker.Item label='Lowest rated repositories' value="3" />
    </Picker>)
  }

  const onChangeSearch = query => setSearchQuery(query)

	return (
		<View>
			<PickerComponent/>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}   
        contentContainerStyle={{ paddingBottom: 500 }}
            
			/>
		</View>
	)
}

const RepositoryList = () => {
	const [order, setOrder] = useState("1")
  const [searchQuery, setSearchQuery] = useState('')
  const [debounceSearchQuery] = useDebounce(searchQuery,1000) //for delay the query  
  
  const orders= {
    1:{
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC',      
    },
    2: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
    3:{
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    }
  }

  const filters= orders[order]
  filters.searchKeyword= debounceSearchQuery
  filters.first= 8

	const { repositories, loading, fetchMore } = useRepositories(filters)
  

  const onEndReach = () => {    
    fetchMore()
  }

	if (loading) {
		return (
			<View>
				<Text> Cargando Datos</Text>
			</View>
		)
	}

	return (
		<RepositoryListContainer
			repositories={repositories}
			setOrder={setOrder}
			order={order}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      onEndReach={onEndReach}
		/>
	)
}

export default RepositoryList
