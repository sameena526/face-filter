import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styles from '../styles';


export default class Introduction extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    {/* Title */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.textOne}>FR</Text>
                        <Text style={styles.textTwo}>APP</Text>
                    </View>
                    {/* Subtitle */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.subHeadOne}>Try out</Text>
                        <Text style={styles.subHeadTwo}> cool frames</Text>
                    </View>
                </View>

                {/* body text */}
                <View style={styles.bodyContainer}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: RFValue(20) }}>Try out these frames and enjoy</Text>
                    </View>
                    <View style={{ flex: 0.25, flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/Frapp-02.png')} style={{ width: 150, height: 60 }}></Image>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/Frapp-03.png')} style={{ width: 150, height: 60 }}></Image>
                        </View>
                    </View>

                    <View style={{ flex: 0.25, flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/Frapp-04.png')} style={{ width: 150, height: 60 }}></Image>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/Frapp-05.png')} style={{ width: 150, height: 60 }}></Image>
                        </View>
                    </View>

                </View>
                {/* <View style={{flex:0.1, justifyContent:'center',alignItems:'center',backgroundColor:'orange',width:RFPercentage(30),height:20,borderRadius:20,alignSelf:'center',borderColor:'yellow'}}> */}
                <View style={{

                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Main')
                    }}
                        style={{
                            alignContent:'center',
                            alignSelf:'center',
                            width: RFPercentage(30),
                            height: RFValue(60),
                            borderRadius: RFValue(20),
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FFA384",
                            borderColor: "#FBE5C0",
                            borderWidth: 5,
                            // marginTop: RFValue(10)
                        }}
                    >
                        <Text style={{
                            fontSize: RFValue(25),
                            fontStyle: "italic",
                            color: "#FBE5C0",
                            textShadowColor: "rgba(0, 0, 0, 0.75)",
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 1
                        }}>Try now!!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

