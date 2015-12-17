/* 

    Login Page

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
	TouchableHighlight,
    Image,
} = React;

//COMPONENT
//
class Login extends Component {
    //Will POST to backend for auth
    //just goes to the next page with dummy data for now
    Scan(){
        this.props.navigator.push({
            title: 'Dashboard',
            component: Dashboard,
            userInfo: {firstName: 'Eric', lastName: 'Rose', game: 0}
        })
    }

	render(){
		return(
            <View style={styles.container}>
                <Text>Login Page</Text>
                <TouchableHighlight onPress={()=>this.Scan()}>
                    <View style={styles.scanBox}>
                        <Image source={{uri:'./Login/images/barcode.png'}} style={styles.barcode} />	
                    </View>
                </TouchableHighlight>
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
    scanBox:{
        
    }
    barcode:{
        
    }
});

//****************************
//     export component      *
//****************************
module.exports = Login;