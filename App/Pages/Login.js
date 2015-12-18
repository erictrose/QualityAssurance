/* 

    Login Page
    
    Custom Components:
    Dashboard - this is the NavigatorIOS's next route.
    
    This Component:
    Has a touchable highlight that moves the nav to the next page via the scanUser function.
    Will eventually scan the employees barcode and POST to the backend for authentication.

*/

//ES6 best practice?
'use strict';

//CUSTOM COMPONENTS
var React = require('react-native'),
    Dashboard = require('./Dashboard.js');

//REACT-NATIVE COMPONENTS
var {
    Component,
	View,
    Text,
	StyleSheet,
	TouchableHighlight,
    Image,
} = React;

//COMPONENT
//
class Login extends Component {
    //Will POST to backend for auth
    //just goes to the next page with dummy data for now
    scanUser(){
        this.props.navigator.push({
            title: 'Dashboard',
            component: Dashboard,
            passProps: {firstName: 'Eric', lastName: 'Rose', game: 0},
        })
    }

	render(){
		return(
            <View style={styles.container}>
                <View style={styles.scanTouchView}>
                    <TouchableHighlight onPress={()=>this.scanUser()}>
                        <View style={styles.scanBoxView}>
                            <Text style={styles.scanText}>scan to login</Text>
                            <Image source={require('./Login/images/barcode.png')} style={styles.barcode} />	
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
		);
	}
};


//****************************
//        STYLESHEET         *
//****************************
var styles = StyleSheet.create({
	container:{
		flex: 1,
        justifyContent: 'center',
	},
    scanTouchView:{
        alignSelf: 'center',
        alignItems: 'center',
    },
    scanBoxView:{
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    scanText:{
        fontSize: 50,
    },
    barcode:{
        height: 100,
        width: 80,
        marginLeft: 20,
    }
});

//****************************
//     export component      *
//****************************
module.exports = Login;
