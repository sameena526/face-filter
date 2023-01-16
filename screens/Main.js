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
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

import * as Permissions from "expo-permissions";

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

import Filter1 from './Filter1'
import Filter2 from './Filter2';
import Filter5 from './Filter5';
import Filter4 from './Filter4';
import Filter3 from './Filter3';
import Filter6 from './Filter6';
import Filter7 from './Filter7';
import Filter8 from './Filter8';
import Filter9 from './Filter9';
import Filter0 from './Filter0';
import styles from '../styles'
let data = {
    "aviator": [{
        "id": "5",
        "image": require('../assets/Frapp-05.png'),
    },
    {
        "id": "6",
        "image": require('../assets/Frapp-06.png')
    },
    {
        "id": "7",
        "image": require('../assets/Frapp-07.png')
    },
    ],
    "round": [
        {
            "id": "1",
            "image": require('../assets/glasses-round.png'),
        },
        {
            "id": "2",
            "image": require('../assets/Frapp-02.png'),
        },
    ],
    "wayfarrer": [
        {
            "id": "4",
            "image": require('../assets/Frapp-04.png'),
        },
        {
            "id": "3",
            "image": require('../assets/Frapp-03.png'),
        },
        {
            "id": "8",
            "image": require('../assets/Frapp-08.png'),
        },
    ],
    "rimless": [
        {
            "id": "9",
            "image": require('../assets/Frapp-09.png'),
        },
       
    ],
    "regular": [
        {
            "id": "0",
            "image": require('../assets/glasses.png'),
        }
    ],
}
export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces: [],
            current_filter: "Filter_1",
            selected: "regular",
        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }

    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
        this.setState({ faces: faces })
        // console.log(faces)
    }

    onFaceDetectionError(error) {
        console.log(error)
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View><Text>no</Text></View>
        }
        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>FRAPP</Text>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            if (this.state.current_filter == "Filter_1") return <Filter1 face={face} />
                            else if (this.state.current_filter == "Filter_2") return <Filter2 face={face} />
                            else if (this.state.current_filter == "Filter_3") return <Filter3 face={face} />
                            else if (this.state.current_filter == "Filter_4") return <Filter4 face={face} />
                            else if (this.state.current_filter == "Filter_5") return <Filter5 face={face} />
                            else if (this.state.current_filter == "Filter_6") return <Filter6 face={face} />
                            else if (this.state.current_filter == "Filter_7") return <Filter7 face={face} />
                            else if (this.state.current_filter == "Filter_8") return <Filter8 face={face} />
                            else if (this.state.current_filter == "Filter_9") return <Filter9 face={face} />
                            else if (this.state.current_filter == "Filter_0") return <Filter0 face={face} />

                            
                        })
                    }
                </View>

                <View style={styles.frameContainer}>
                    <View style={styles.cateogaryContainer}>

                        <TouchableOpacity style={
                             this.state.selected==="regular"?(styles.cateogaryBoxSelected):(styles.cateogaryBox)} 
                             onPress={()=>{
                                this.setState({selected:'regular'})
                             }}
                        >
                            <Text>Regular</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={
                             this.state.selected==="round"?(styles.cateogaryBoxSelected):(styles.cateogaryBox)} 
                             onPress={()=>{
                                this.setState({selected:'round'})
                             }}
                        >
                            <Text>Round</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={
                             this.state.selected==="rimless"?(styles.cateogaryBoxSelected):(styles.cateogaryBox)} 
                             onPress={()=>{
                                this.setState({selected:'rimless'})
                             }}
                        >
                            <Text>Rimless</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={
                             this.state.selected==="wayfarrer"?(styles.cateogaryBoxSelected):(styles.cateogaryBox)} 
                             onPress={()=>{
                                this.setState({selected:'wayfarrer'})
                             }}
                        >
                            <Text>Wayfarrer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={
                             this.state.selected==="aviator"?(styles.cateogaryBoxSelected):(styles.cateogaryBox)} 
                             onPress={()=>{
                                this.setState({selected:'aviator'})
                             }}
                        >
                            <Text>Aviator</Text>
                        </TouchableOpacity>

                        </View>

                    <ScrollView
                        style={{ flexDirection: 'row' }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            data[this.state.selected].map(filter_data => {
                                return (
                                    <TouchableOpacity style={styles.filterImageContainer}
                                        onPress={() => {
                                            this.setState({
                                                current_filter: `Filter_${filter_data.id}`
                                            })
                                        }}
                                    >
                                        <Image
                                            source={filter_data.image}
                                            style={{ width: 80, height: 32 }}
                                        ></Image>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            </View>
        )
    }
}

