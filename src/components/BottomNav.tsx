import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons'
import { useNavigation } from '@react-navigation/native';



const BottomNav = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.iconsection}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <MaterialCommunityIcons
                    name="home"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <Text style={styles.icontext}>Home</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Forecast')}>
                <MaterialCommunityIcons
                    name="calendar"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <Text style={styles.icontext}>Forecast</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MaterialCommunityIcons
                    name="magnify"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <Text style={styles.icontext}>Search</Text>
            </TouchableOpacity>
            <View>
                <MaterialCommunityIcons
                    name="cog"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <Text style={styles.icontext}>Settings</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        alignSelf: 'center',
    },
    icontext: {
        color: '#C5C5D7',
    },
    iconsection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BottomNav;
