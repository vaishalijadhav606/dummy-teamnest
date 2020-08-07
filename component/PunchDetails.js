import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format } from "date-fns";

export class PunchDetails extends Component {
    constructor() {
        super();
        this.state = {
            punchInBtn: true,
            date: '',
            time: '',
            timeFormat: ''
        }
    }

    onClickPunchInBtn = () => {
        this.setState(
            {
                punchInBtn: false,
                date: format(new Date(), "dd MMM, yyyy"),
                time: format(new Date(), "hh:mm"),
                timeFormat: format(new Date(), "aa")
            }
        )
    }

    onClickPunchOutBtn = () => {
        this.setState(
            {
                punchInBtn: true,
                date: format(new Date(), "dd MMM, yyyy"),
                time: format(new Date(), "hh:mm"),
                timeFormat: format(new Date(), "aa")
            }
        )
    }


    render() {

        let punchBtn;

        if (this.state.punchInBtn) {
            punchBtn = <TouchableOpacity
                style={styles.punchin}
                onPress={this.onClickPunchInBtn}
            >
                <Text style={styles.btnText}>Punch In</Text>
            </TouchableOpacity>
        } else {
            punchBtn = <TouchableOpacity
                style={styles.punchout}
                onPress={this.onClickPunchOutBtn}
            >
                <Text style={styles.btnText}>Punch Out</Text>
            </TouchableOpacity>
        }


        return (
            <View style={styles.container}>
                {/* <View>
                    <Text style={styles.lightText}>Punch Details</Text>
                </View> */}
                <View style={styles.punchContainer}>
                    <MaterialCommunityIcons name="calendar-clock" color={colors.primaryText} size={150} />
                    <Text style={styles.lightText}>Last punch {this.state.punchInBtn ? 'out' : 'in'} at</Text>
                    <Text style={styles.punchingdate}>{this.state.date}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: 5 }}>
                        <Text style={{ fontSize: 25, lineHeight: 30, fontWeight: 'bold', color: colors.primaryBlackText }}>{this.state.time}</Text>
                        <Text style={{ fontSize: 15, lineHeight: 18, color: colors.primaryBlackText, fontWeight: 'bold' }}>{this.state.timeFormat}</Text>
                    </View>
                    <Text style={styles.lightText}>Total Hours worked today 05 hrs 35 mins</Text>
                    {punchBtn}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    punchContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    punchingdate: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primaryBlackText,
        marginTop: 5
    },
    punchout: {
        backgroundColor: '#FE4543',
        borderRadius: 5,
        width: 250,
        padding: 10,
        marginTop: 10
    },
    punchin: {
        backgroundColor: '#22D735',
        borderRadius: 5,
        width: 250,
        padding: 10,
        marginTop: 10
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center"
    },
    lightText: {
        color: '#858585'
    }
})

export default PunchDetails
