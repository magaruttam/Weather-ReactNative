import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

type HighlightCardProps = {
    id: string;
    title: string;
    value: string;

};

const HighlightCard = ({ value, title }: HighlightCardProps) => {

    return (
        <View style={style.main}>
            <View style={style.container}>

                <View style={style.header}>


                    <Text style={style.header_title}>
                        {title}
                    </Text>
                </View>

                <Text style={style.value}>
                    {value}
                </Text>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        marginTop: 10,

    },
    container: {
        height: 120,
        width: 160,
        borderRadius: 24,
        padding: 24,
        backgroundColor: '#222538',
        borderColor: '#383B4C',
        borderWidth: 1,

    },
    icon: {
        height: 18,
        width: 18,
    },
    header: {
        display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        gap: 4
    },
    header_title: {
        color: '#BBC3FF',
        fontWeight: '700',
        fontSize: 15
    },
    value: {
        color: '#DFE0FE',
        fontSize: 20,

    }
})

export default HighlightCard