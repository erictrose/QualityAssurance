/* 

    Main Quality Assurance Application
    
    bringing in NavigatorIOS

*/

//ES6 best practice?
'use strict';

//REQUIRE
var React = require('react-native'),
    Login = require('./Pages/Login');

//REACT-NATIVE COMPONENTS
var {
    Component,
	View,
	StyleSheet,
    NavigatorIOS,
} = React;

//COMPONENT
//
class QualityAssurance extends Component {
	render(){
		return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Station #',
                    component: Login
                }}
            />
		);
	}
};


//****************************
//        STYLESHEET         *
//****************************
var styles = StyleSheet.create({
	container:{
		backgroundColor: '#ef553a',
	}
});

//****************************
//     export component      *
//****************************
module.exports = QualityAssurance;
