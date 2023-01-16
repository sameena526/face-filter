import React from 'react'
import { Image, View } from 'react-native';

const Filter2 = (
   {
       face:{
           bounds:{
               size:{
                   width:width,
                   height:height,
               }
           },
           RIGHT_EYE,
           LEFT_EYE,
       }
   }
) => {

    const glassesWidth = width
    const glassesHeight =  height / 3

    const transformAngle = (
        angleRad = Math.atan((RIGHT_EYE.y - LEFT_EYE.y) / (RIGHT_EYE.x - LEFT_EYE.x))
    ) => angleRad * 180 / Math.PI

    return (
<View style={
            {
                position: 'absolute',
                left: LEFT_EYE.x - glassesWidth * 0.675,
                top: LEFT_EYE.y - glassesHeight * 0.5
            }
        } >

        <Image source={require('../assets/Frapp-02.png')}
            style={
                {
                    width: glassesWidth,
                    height: glassesHeight,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }
            }
        /></View >
    );
};

export default Filter2