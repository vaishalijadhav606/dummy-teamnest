import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import colors from '../config/colors';

const { width } = Dimensions.get("window");
export class Profile extends Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };
    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;

        return (
            <View style={{
                flex: 1,
                backgroundColor: "#f2f2f2"
            }}>
                <View
                    style={{
                        width: "100%",
                        backgroundColor: '#ffff'
                    }}
                >
                    <View
                        style={{
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            flexDirection: "row",
                            marginTop: 20,
                            marginBottom: 20,
                            height: 36,
                            position: "relative",
                            backgroundColor: "#ffffff"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#007aff"
                                }}
                            >
                                Personal
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#007aff"
                                }}
                            >
                                Organisation
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <View style={styles.containerbg}>
                                <View style={styles.profilebg}>
                                    <Text style={styles.nameimg}>AD</Text>
                                </View>
                                <Text style={styles.name}>Alice De</Text>
                                <Text style={styles.personal}>00014</Text>
                                <Text style={styles.personal}>alice.de@email.com</Text>
                                <Text style={styles.personal}>9784563112</Text>
                                <Text style={styles.personal}>05 Sep 1999</Text>
                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <View style={styles.containerbg}>
                                <Text style={styles.name}>Company Name</Text>
                            </View>

                            <View style={[styles.containerbg, styles.mt10, styles.justifystart]}>
                                <Text style={styles.heading}>General Details</Text>
                                <View style={styles.hr}></View>
                                <View style={styles.row}>
                                    <Text style={styles.column1}>Status</Text>
                                    <Text style={styles.column2}>Active</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.column1}>Role</Text>
                                    <Text style={styles.column2}>Employee</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.column1}>Master Policy</Text>
                                    <Text style={styles.column2}>Standard</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.column1}>Reporting Manager(s)</Text>
                                    <Text style={styles.column2}>Abc, Xyz</Text>
                                </View>
                            </View>

                            <View style={[styles.containerbg, styles.mt10, styles.justifystart]}>
                                <Text style={styles.heading}>Joining Details</Text>
                                <View style={styles.hr}></View>
                                <View style={styles.row}>
                                    <Text style={styles.column1}>Date of Joining</Text>
                                    <Text style={styles.column2}>10th Oct 2018</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.column1}>Date of Confirmation</Text>
                                    <Text style={styles.column2}>10th Nov 2018</Text>
                                </View>
                            </View>
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column'
    },
    containerbg: {
        backgroundColor: colors.lightgreen,
        width: '90%',
        paddingVertical: 20,
        borderRadius: 5,
        borderBottomColor: '#f3f3f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilebg: {
        backgroundColor: 'purple',
        width: 80,
        height: 80,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    nameimg: {
        color: colors.white,
        fontSize: 25,
        fontWeight: '500'
    },
    name: {
        fontWeight: 'bold',
        color: colors.primaryBlackText,
        fontSize: 20
    },
    personal: {
        fontWeight: 'normal',
        color: colors.primaryBlackText,
        fontSize: 15,
        marginVertical: 4
    },
    mt10: {
        marginTop: 10
    },
    justifystart: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    hr: {
        marginVertical: 8,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        width: '100%'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 4
    },
    column1: {
        width: "40%",
        fontWeight: 'normal',
        color: colors.primaryBlackText,
        fontSize: 14,
        paddingRight: 5
    },
    column2: {
        width: "60%",
        fontWeight: 'normal',
        color: colors.primaryBlackText,
        fontSize: 14
    }
})

export default Profile
