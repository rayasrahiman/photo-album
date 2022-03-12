import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Albums, {AlbumScreenOptions} from "../screens/Albums"
import Photos, {PhotosOptions} from "../screens/Photos"
import PhotoScreen, {PhotoScreenOptions} from "../screens/PhotoScreen"



const StackNavigator = createNativeStackNavigator();


const MainStackNavigation = (props) => {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen name="Albums" component={Albums} options={AlbumScreenOptions} />
			<StackNavigator.Screen name="Photos" component={Photos} options={PhotosOptions} />
			<StackNavigator.Screen name="PhotoScreen" component={PhotoScreen} options={PhotoScreenOptions} />
        </StackNavigator.Navigator>
        )
    }

    const NavigationScreen = (props) => {
        return (
            <NavigationContainer>
                <MainStackNavigation />
            </NavigationContainer>
        );
    };


    export default NavigationScreen;