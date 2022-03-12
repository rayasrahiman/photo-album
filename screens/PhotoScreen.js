import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, Button, TouchableWithoutFeedback, Keyboard, LogBox } from 'react-native';
import { useDispatch } from 'react-redux';
import {editAction} from '../store/actions/PhotoActions'

LogBox.ignoreAllLogs();

const PhotoScreen = (props) => {
    const {photoDetails} = props.route.params;

    const dispatch = useDispatch()
    const [photoDtls, setPhotoDtls] = useState({})
    const [txtTitle, setTxtTitle] = useState(photoDetails.title)
    
    const saveFn = useCallback(() => {
        dispatch(editAction({id: photoDetails.id, title: txtTitle}))
        props.navigation.goBack()
    }, [dispatch, txtTitle])

    useEffect(() => {
        setPhotoDtls(photoDetails)
        props.navigation.setParams({
            num: photoDetails.id,
            save: saveFn
        })
    }, [saveFn])
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <View>
            <TextInput multiline={true} onChangeText={(val) => setTxtTitle(val)} numberOfLines={Dimensions.get('window').width < 400 ? 5 : 1} style={styles.titleTxt} value={txtTitle} />
            </View>
            <Image style={styles.img} resizeMode="contain" source={{uri: photoDtls.url, headers:{Accept: '*/*'}}} />
        </View>
        </TouchableWithoutFeedback>
    );
};

export const PhotoScreenOptions = (navData) => {
    const {num, save} = navData.route.params
    return {
        headerTitle: `Photo ${num}`,
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 24
          },
          headerRight: () => (
            <Button
              onPress={save}
              title="Save"
            />
          ),
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleTxt:{
        fontSize: 22,
        fontFamily: 'open-sans-bold', 
        color: "black", 
        textAlign:"center",
        textTransform: 'capitalize',
        width: Dimensions.get('window').width > 400 ? 200 : 300
    },
    img:{
        height: "100%", 
        width: "100%"
    },
});

export default PhotoScreen;
