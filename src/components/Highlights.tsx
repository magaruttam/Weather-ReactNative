import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HighlightCard from './HighlightCard';
import { FlatList } from 'react-native';

const Highlights = () => {
    const Data = [
        {
            id: '1',
            title: 'Humidity',
            value: '65%',

        },
        {
            id: '2',
            title: 'Wind',
            value: '12 km/h',

        },
        {
            id: '3',
            title: 'UV Index',
            value: '5',

        },
        {
            id: '4',
            title: 'Rain',
            value: '0 mm',

        }
    ];
    return (
        <View style={style.container}>
            <Text style={style.title_container}>WEATHER HIGHLIGHTS</Text>

            <FlatList
                data={Data}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={style.row}
                renderItem={({ item }) => (
                    <HighlightCard {...item} />
                )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    title_container: {
        color: '#C5C5D7',
        fontWeight: 'bold',
        fontSize: 12,
        // marginBottom: 16,
    },
    row: {
        marginBottom: 8,
        justifyContent: 'space-around'
    }
})
export default Highlights