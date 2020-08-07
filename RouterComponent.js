import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './component/Home';
import Attendance from './component/Attendance';
import Timesheet from './component/Timesheet';
import Login from './component/Login';
import Changepassword from './component/Changepassword';
import Profile from './component/Profile';
import Leave from './component/Leave';
import PunchDetails from './component/PunchDetails';
import colors from './config/colors';

const TabIcon = ({ focused, iconName }) => {
    return (
        <MaterialCommunityIcons name={iconName} style={{ color: focused ? colors.primaryText : colors.primaryBlackText }} size={25} />
    )
}

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login" hideNavBar={true} />
                    <Scene key="attendance" component={Attendance} title="Attendance" />
                    <Scene key="timesheet" component={Timesheet} title="Timesheet" />
                    <Scene key="leave" component={Leave} title="Leave" />
                    <Scene key="punchDetails" component={PunchDetails} title="Punch Details" />
                    <Scene key="profile" component={Profile} title="Profile" />
                    <Scene key="tabBar" tabs={true} tabBarPosition="bottom" activeTintColor={colors.primaryText} hideNavBar={true}>
                        <Scene key="home" component={Home} title="Home" icon={TabIcon} initial iconName="home" hideNavBar={true} />
                        <Scene key="changepassword" component={Changepassword} title="Change Password" icon={TabIcon} initial iconName="lock-reset" hideNavBar={true} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent
