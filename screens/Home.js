import React, { Component } from "react";
//ta1
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    

//ta3 line22dorid
//ta5,6 upto line40
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App
                        </Text>
                    </View>
                  
                  <TouchableOpacity style={styles.routeCard}>
                        <Text>ISS Location</Text>
                        </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard}>
                        <Text>Meteors</Text>
                       </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}>
                        <Text>Updates</Text>
                         </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    //ta2
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
   
    //ta7
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    //ta4
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },

});