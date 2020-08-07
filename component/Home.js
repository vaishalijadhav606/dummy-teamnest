import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import { Actions } from 'react-native-router-flux';

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileDetails}>
                    <View style={styles.startDetails}>
                        <MaterialCommunityIcons name="account-circle-outline" color={colors.primaryText} size={70} />
                        <Text style={styles.name}>Alice Dummy</Text>
                        <Text style={styles.details} onPress={() => Actions.profile()}>My Profile</Text>
                    </View>
                    <View style={styles.topIcon}>
                        <MaterialCommunityIcons name="bell-outline" size={30} color={colors.primaryText} />
                        <MaterialCommunityIcons name="gesture-double-tap" size={30} color={colors.primaryText} onPress={() => Actions.punchDetails()}/>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <TouchableOpacity
                            style={styles.tn_card}
                            onPress={() => Actions.attendance()}
                        >
                            <MaterialCommunityIcons name="calendar-check" size={30} color={colors.primaryText}/>
                            <Text style={styles.btnText}>Attendance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tn_card}
                            onPress={() => Actions.timesheet()}
                        >
                        <MaterialCommunityIcons name="file-document-outline" size={30} color={colors.primaryText}/>
                            <Text style={styles.btnText}>Timesheet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tn_card}
                            onPress={() => Actions.leave()}
                        >
                        <MaterialCommunityIcons name="calendar-alert" size={30} color={colors.primaryText}/>
                            <Text style={styles.btnText}>Leave</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
    },
    profileDetails: {
        height: 150
    },
    startDetails: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    topIcon: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 0
    },
    name: {
        marginTop: 10,
        color: colors.primaryBlackText,
        fontSize: 20,
        fontWeight: 'bold'
    },
    details: {
        fontSize: 16,
        color: colors.primaryText
    },
    tn_card: {
        backgroundColor: colors.white,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        padding: 20,
        margin: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnText: {
        color: colors.primaryText,
        fontWeight: 'bold',
        fontSize: 20, 
        textTransform: 'capitalize',
        marginLeft: 20
    }
})

export default Home
