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
        
    }
    
    //
    //
    Cancel(){
        
    }

    //
    //
    Mark(){
        
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
                                               
                                               

    
    
                <View style={styles.unitContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={styles.buttonTouch} onPress={()=>this.Mark()}>
                            <Text></Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={require('./Package/images/toothbrush.png')} style={styles.image}/>
                        </View>
                        <View style={styles.descContainer}>
                            <View style={styles.descPosition}>
                                <Text>position</Text>
                            </View>
                            <View style={styles.descName}>
                                <Text>name</Text>
                            </View>
                            <View style={styles.descDesc}>
                                <Text>description</Text>
                            </View>
                        </View>
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
        marginBottom: 80,
    },
    damagedContainer:{
        marginLeft: 20,
    },
    damagedTouch:{
        width: 118,
        height: 118,
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
    unitContainer:{
        flexDirection: 'row',
    },
    buttonContainer:{
        height: 250,
        width: 250,
        backgroundColor: 'green',
        alignSelf: 'flex-start',
        borderColor: '#1c1e30',
        borderWidth: 3,
    },
    buttonTouch:{
        width: 250,
        height: 250
    },
    infoContainer:{
        flexDirection: 'row',
        flex: 10,
    },
    imageContainer:{
        flex: 4,
        alignItems: 'center',
        maxHeight: 250,
    },
    image:{
        maxHeight: 250,
        maxWidth: 250
    },
    descContainer:{
        backgroundColor: 'purple',
        flex: 6,
    },
    
});

//****************************
//     export component      *
//****************************
module.exports = Package;
