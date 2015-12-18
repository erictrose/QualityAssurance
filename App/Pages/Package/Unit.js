/* 

    Unit component
    
    Custom Components:
    None
    
    This Component:
    this is the componentized unit row with button, unit image and unit info.

*/

//ES6 best practice?
'use strict';

//CUSTOM COMPONENTS
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

    //Will mark the unit as failing and display fail options
    Mark(){
        
    }
    
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
                            <View style={styles.descTopContainer}>
                                <View style={styles.descPosition}>
                                    <Text style={styles.descPositionText}>x/x</Text>
                                </View>
                                <View style={styles.descName}>
                                    <Text style={styles.descNameText}>Unit Name</Text>
                                </View>
                            </View>
                            <View style={styles.descBottomContainer}>
                                <View style={styles.descDesc}>
                                    <Text style={styles.descDescText} numberOfLines={7}>'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'</Text>
                                </View>
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
        height: 250,
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
        maxWidth: 250,
    },
    descContainer:{
        flex: 6,
    },
    descTopContainer:{
        flexDirection: 'row',
        height: 50,
    },
    descBottomContainer:{
        flexDirection: 'row',
        height: 200,
    },
    descPosition:{
        
    },
    descPositionText:{
        fontSize: 48,
    },
    descName:{
        alignSelf: 'flex-end',
        paddingLeft: 20,
    },
    descNameText:{
        fontSize: 22,
    },
    descDesc: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
    },
    descDescText:{
        fontSize: 18,
    },
});

//****************************
//     export component      *
//****************************
module.exports = Unit;