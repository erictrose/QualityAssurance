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
                barTintColor={'#1c1e30'}
                shadowHidden={true}
                titleTextColor={'white'}
                tintColor={'white'}
                style={styles.container}
                initialRoute={{
                    title: 'Login',
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
        flex: 1,
		backgroundColor: '#ef553a',
	}
});

//****************************
//     export component      *
//****************************
module.exports = QualityAssurance;
