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
	TouchableHighlight,
    NavigatorIOS,
} = React;

//COMPONENT
//
class Dashboard extends Component {
    //Will notify backend of bad label
    badLabel(){
        
    }
    
    //Will POST to backend for package info
    //just goes to the next page with dummy data for now
    ScanPackage(){
        this.props.navigator.push({
            title: 'Package',
            component: Package,
            packageInfo: {}
        })
    }
    
	render(){
		return(
            <View style={styles.container}>
    
                <View style={styles.badLabelContainer}>
                    <TouchableHighlight style={styles.badLabelTouch} onPress={()=>this.badLabel()}>
                        <View>
                            <Image source={require('./Dashboard/images/bad-label.png')} />
                        </View>
                    </TouchableHighlight>
                </View>
    
                <View style={styles.scanContainer}>
                    <TouchableHighlight onPress={()=>this.ScanPackage()}>
                        <View style={styles.scanImgContainer}>
                            <Image source={require('./Dashboard/images/box.png')} style={styles.packageImg} />
                            <Text style={styles.scanText}>scan a package</Text>
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
        paddingTop: 80,
		flex: 1,
	},
    badLabelContainer:{
        marginLeft: 20
    },
    badLabelTouch:{
        width: 118,
        height: 118
    },
    scanContainer:{
        marginTop: 80,
        alignSelf: 'center',
        alignItems: 'center'
    },
    scanImgContainer:{
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center'
    },
    scanText:{
        fontSize: 50,
    },
    packageImg:{
        width: 300,
        height: 193
    }
});

//****************************
//     export component      *
//****************************
module.exports = Dashboard;
