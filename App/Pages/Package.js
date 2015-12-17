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
    TouchableHighlight,
} = React;

//COMPONENT
//
class Package extends Component {
    
    //
    //
    Damaged(){
        this.props.navigator.push({
            title: 'Dashboard',
            component: Dashboard,
        })
    }
    
    //
    //
    Cancel(){
        this.props.navigator.push({
            title: 'Dashboard',
            component: Dashboard,
        })
    }
    
	render(){
		return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.damagedContainer}>
                        <TouchableHighlight style={styles.damagedTouch} onPress={()=>this.Damaged()}>
                            <View>
                                <Image source={require('./Package/images/bad-box.png')} />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.packageInfo}>
                        <Text style={styles.packageText}>Package with X items</Text>                
                    </View>
                    <View style={styles.cancelContainer}>
                        <TouchableHighlight style={styles.cancelTouch} onPress={()=>this.Cancel()}>
                            <View>
                                <Image source={require('./Package/images/cancel.png')} />
                            </View>
                        </TouchableHighlight>
                    </View>                    
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
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    damagedContainer:{
        marginLeft: 20
    },
    damagedTouch:{
        width: 118,
        height: 118
    },
    packageInfo:{
        alignSelf: 'flex-end',
    },
    packageText:{
        fontSize: 40,
    },
    cancelContainer:{
        marginRight: 20,
    },
    cancelTouch:{
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
module.exports = Package;
