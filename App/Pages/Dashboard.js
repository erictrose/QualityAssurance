/* 

    Dashboard Page

*/

//ES6 best practice?
'use strict';

//REQUIRE
var React = require('react-native'),
    Login = require('./Login'),
    Package = require('./Package');

//REACT-NATIVE COMPONENTS
var {
    Component,
	View,
    Text,
	StyleSheet,
    Image,
} = React;

//COMPONENT
//
class Dashboard extends Component {
	render(){
		return(
            <View style={styles.container}>
                <Text>Dashboard Page</Text>
            </View>
		);
	}
};


//****************************
//        STYLESHEET         *
//****************************
var styles = StyleSheet.create({
	container:{
		marginTop: 50
	}
});

//****************************
//     export component      *
//****************************
module.exports = Dashboard;
