/* 

    Login Page

*/

//ES6 best practice?
'use strict';

//REQUIRE
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
                <TouchableHighlight onPress={()=>this.Scan()}>
                    <View style={styles.scanBox}>
                        <Text style={styles.scanText}>scan to login</Text>
                        <Image source={require('./Login/images/barcode.png')} style={styles.barcode} />	
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
        paddingTop: 80,
		flex: 1,
        backgroundColor: 'white'
	},
    scanBox:{
        marginTop: 250,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    scanText:{
        fontSize: 50,
    },
    barcode:{
        height: 100,
        width: 80,
        marginLeft: 20
    }
});

//****************************
//     export component      *
//****************************
module.exports = Login;
