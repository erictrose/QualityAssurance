/* 

    Package Page
    
    Custom Components:
    Dashboard - this is the NavigatorIOS's previous route.
    Unit - this is the componentized unit row with button, unit image and unit info.
    
    This Component:
    Has the ability to say the box is damaged or otherwise failing.
    Has the ability to cancel doing QA on this package.
    Displays number of units in the package.
    Brings in <Unit> components for every unit in the package.

*/

//ES6 best practice?
'use strict';

//CUSTOM COMPONENTS
var React = require('react-native'),
    Dashboard = require('./Dashboard'),
    Unit = require('./Package/Unit');

//REACT-NATIVE COMPONENTS
var {
    Component,
	View,
    Text,
	StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView,
} = React;

//COMPONENT
//
class Package extends Component {
    
    //Will notify backend of damaged or otherwise failing box.
    Damaged(){
        
    }
    
    //Cancel performing QA on the package
    Cancel(){
        this.props.navigator.pop()
    }
    
    //Will notify backend of package pass or fail
    PassFail(){
        this.props.navigator.pop()
    }
    
	render(){
		return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <View style={styles.damagedContainer}>
                            <TouchableHighlight style={styles.damagedTouch} onPress={()=>this.Damaged()}>
                                <View>
                                    <Image source={require('./Package/images/bad-box.png')} />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.cancelContainer}>
                            <TouchableHighlight style={styles.cancelTouch} onPress={()=>this.Cancel()}>
                                <View>
                                    <Image source={require('./Package/images/cancel.png')} />
                                </View>
                            </TouchableHighlight>
                        </View> 
                        <View style={styles.packageInfo}>
                            <Text style={styles.packageText}>Package with <Text style={styles.packageTextNumber}>X</Text> items</Text>    
                        </View>                   
                    </View>
                        <Unit />
                        <Unit />
                        <Unit />
                        <Unit />
                        <Unit />
                    <View style={styles.passFailContainer}>
                        <TouchableHighlight style={styles.passFailTouch} onPress={()=>this.PassFail()}>
                            <Text style={styles.passFailText}>Pass</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
		);
	}
};


//****************************
//        STYLESHEET         *
//****************************
var styles = StyleSheet.create({
	container:{
        paddingTop: 15,
		flex: 1,
	},
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 80,
    },
    damagedContainer:{
        left: 20,
        position: 'absolute',
    },
    damagedTouch:{
        width: 118,
        height: 118,
    },
    packageInfo:{
        marginTop: 75,
    },
    packageText:{
        fontSize: 40,
    },
    packageTextNumber:{
        color: 'green',
    },
    cancelContainer:{
        right: 20,
        position: 'absolute',
    },
    cancelTouch:{
        width: 118,
        height: 118,
    },
    passFailContainer:{
        height: 140,
        width: 500,
        backgroundColor: 'green',
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 45,
        borderRadius: 15,
    },
    passFailTouch:{
        width: 500,
        height: 140,
        justifyContent: 'center',
    },
    passFailText:{
        fontSize: 72,
        fontWeight: '300',
        alignSelf: 'center',
    },
});

//****************************
//     export component      *
//****************************
module.exports = Package;
