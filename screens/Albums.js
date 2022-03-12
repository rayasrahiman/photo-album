import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {albumsServicesAction} from '../store/actions/PhotoActions'

const Albums = (props) => {
    const photoAlbums = useSelector(state => state.albumServices.albumsData)

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(albumsServicesAction());
    
    }, [dispatch])

    const albumPhoto = (id) => {
        props.navigation.navigate("Photos", {itemId: id})
    }

    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => item.id} data={photoAlbums} renderItem={({item}) =>{ 
            return (
            <TouchableOpacity onPress={() => albumPhoto(item.id)} style={styles.albumTxtContainer} >
            <Text style={styles.albumTxt}>Album {item.id}</Text>
            </TouchableOpacity>
            )}} 
            numColumns={2} 
         />
        </View>
    );
};

export const AlbumScreenOptions = (navData) => {
    return {
        headerTitle: `Albums`,
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
    albumTxtContainer:{
        borderRadius: 10, 
        padding: 50, 
        marginTop: "10%", 
        flexDirection:"row", 
        marginHorizontal: Dimensions.get('window').width > 400 ? 5 : 10, 
        backgroundColor:'white', 
        alignItems:"center"
    },
    albumTxt:{
        fontSize: 14,
        fontFamily: 'open-sans'
    }
});

export default Albums;
