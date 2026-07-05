import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';


const navigation = useNavigation();
const BottomNav = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconsection}>
                <MaterialCommunityIcons
                    name="home"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <Text style={styles.icontext}>Home</Text>
            </View>
            <View>
                <MaterialCommunityIcons
                    name="calendar"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <Text style={styles.icontext}>Forecast</Text>
            </View>
            <View>
                <MaterialCommunityIcons
                    name="magnify"
                    size={30}
                    color="#C5C5D7"
                    style={styles.icon}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Search')}> <Text style={styles.icontext}>Search</Text></TouchableOpacity>

            </View>
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
        marginTop: 10,
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
