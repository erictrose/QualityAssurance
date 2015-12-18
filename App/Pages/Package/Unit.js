/* 

    Unit component

*/

//ES6 best practice?
'use strict';

//REQUIRE
var React = require('react-native');

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
class Unit extends Component {
	render(){
		return(
            <View style={styles.container}>
<View style={styles.unitContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={styles.buttonTouch} onPress={()=>this.Mark()}>
                            <Text></Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={require('./images/toothbrush.png')} style={styles.image}/>
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
module.exports = Unit;