/* 

    Package Page

*/

//ES6 best practice?
'use strict';

//REQUIRE
var React = require('react-native'),
    Dashboard = require('./Dashboard');

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
class Package extends Component {
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
module.exports = Package;