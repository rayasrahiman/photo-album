import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {photosServicesAction} from '../store/actions/PhotoActions'

const Photos = (props) => {
    const photos = useSelector(state => state.albumServices.photosData)

    const dispatch = useDispatch();

    useEffect(() => {
        const {itemId} = props.route.params;
        dispatch(photosServicesAction(itemId));
    
    }, [dispatch])


    const selectedPhoto = (item) => {
        props.navigation.navigate("PhotoScreen", {photoDetails: item})
    }

    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => item.id} data={photos} renderItem={({item}) =>{ 
            return (
            <TouchableOpacity onPress={() => selectedPhoto(item)} style={styles.photosContainer} >
            <View style={styles.imgContainer}>
            <Image style ={styles.img} source ={{uri: `${item.thumbnailUrl}`, headers: { Accept: '*/*'}}} />
            </View>
            <View>
            <Text style={styles.titleTxt}>{item.title}</Text>
            </View>
            </TouchableOpacity>
            )}} 
            numColumns={2} 
         />
        </View>
    );
};

export const PhotosOptions = (navData) => {
    return {
        headerTitle: `Photos`,
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 24
          },
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    photosContainer:{
        marginTop:"5%", 
        marginHorizontal: Dimensions.get('window').width > 400 ? 5 : 3, 
        width: 150, 
        borderRadius: 10, 
        alignItems:"center", 
        backgroundColor:'white'
    },
    imgContainer:{
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        width: 150, 
        height: 100, 
        overflow: "hidden" ,
    },
    img:{
        height: "100%", 
        width: "100%", 
    },
    titleTxt:{
        textAlign:"center", 
        padding: 15,
        fontSize: 14,
        fontFamily: 'open-sans-bold',
        textTransform: 'capitalize'
    }
});

export default Photos;
