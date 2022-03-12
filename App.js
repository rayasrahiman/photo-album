import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


//reducers
import AlbumsServicesReducer from './store/reducers/PhotoReducer';

const rootReducer = combineReducers({
	albumServices: AlbumsServicesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//Root Navigation
import NavigationScreen from './navigation/NavigationScreen';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return (<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={console.warn}
   />) }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
