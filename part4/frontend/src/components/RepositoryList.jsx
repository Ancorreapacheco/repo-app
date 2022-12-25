import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'

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
}) => {
	const navigate = useNavigate()

	const onClickRepository = (id) => {
		navigate(`/repository/${id}`)
	}

	const repositoryNodes = repositories
		? repositories.data.repositories.edges.map((edge) => edge.node)
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

	return (
		<View>
			<PickerComponent/>

			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}        
			/>
		</View>
	)
}

const RepositoryList = () => {
	const [order, setOrder] = useState("1")
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
  
	const { repositories } = useRepositories(orders[order])

	if (repositories.loading) {
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
		/>
	)
}

export default RepositoryList
