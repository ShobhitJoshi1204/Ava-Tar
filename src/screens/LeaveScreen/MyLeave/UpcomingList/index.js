import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, Button, Alert} from 'react-native'
import * as data from '../../../../../files/holidays.json'

const UpcomingList = () => {
	const [holidays, setHolidays] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [isLoading, setIsLoading] = useState(false)

	const getHolidays = () => {
		setIsLoading(true)
		setHolidays(data.holidays)
		setIsLoading(false)
	}

	const renderItem = ({item}) => {
		if (item.date >= new Date().toISOString().slice(0, 10)) {
			if (item.optional) {
				return (
					<View style={styles.itemWrapperStyle}>
						<Image style={styles.itemImageStyle} source={{uri: item.url}} />
						<View style={styles.contentWrapperStyle}>
							<Text style={styles.txtNameStyle}>{item.name} | Optional Holiday</Text>
							<View style={{alignSelf: 'center'}}>
								<Button title='Apply'></Button>
							</View>
							{/* <Button style={{float: 'right'}} title='Apply'></Button> */}
							<Text style={styles.txtEmailStyle}>{item.date}</Text>
						</View>
					</View>
				)
			} else {
				return (
					<View style={styles.itemWrapperStyle}>
						<Image style={styles.itemImageStyle} source={{uri: item.url}} />
						<View style={styles.contentWrapperStyle}>
							<Text style={styles.txtNameStyle}>{item.name} | Holiday</Text>
							<Text style={styles.txtEmailStyle}>{item.date}</Text>
						</View>
					</View>
				)
			}
		}
	}

	const renderLoader = () => {
		return isLoading ? (
			<View style={styles.loaderStyle}>
				<ActivityIndicator size='large' color='#aaa' />
			</View>
		) : null
	}

	const loadMoreItem = () => {
		setCurrentPage(currentPage + 1)
	}

	useEffect(() => {
		getHolidays()
	}, [currentPage])

	return (
		<>
			<View>
				<View style={{backgroundColor: '#99ebff'}}>
					<Text style={{fontSize: 15, marginLeft: 10, marginTop: 5, marginBottom: 5}}>Upcoming leaves / Holidays</Text>
				</View>
			</View>

			<FlatList data={holidays} renderItem={renderItem} keyExtractor={item => item.date} ListFooterComponent={renderLoader} onEndReached={loadMoreItem} onEndReachedThreshold={0} />
		</>
	)
}

const styles = StyleSheet.create({
	itemWrapperStyle: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
	itemImageStyle: {
		width: 50,
		height: 50,
		marginRight: 16,
	},
	contentWrapperStyle: {
		justifyContent: 'space-around',
	},
	txtNameStyle: {
		fontSize: 16,
	},
	txtEmailStyle: {
		color: '#777',
	},
	loaderStyle: {
		marginVertical: 16,
		alignItems: 'center',
	},
})

export default UpcomingList
