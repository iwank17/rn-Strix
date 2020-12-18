/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppStatusBar} from './src/Components';
import {Provider as StoreProvider} from 'react-redux';
import RootNavigator from './src/Navigations/RootNavigator';
import {getStore} from './src/Redux/Store';
import {COLORS} from './src/Themes';


const store = getStore();

const App: () => React$Node = () => {
  const APP_THEME = COLORS.BLACK;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: APP_THEME}}>
      <AppStatusBar backgroundColor={APP_THEME} barStyle="light-content" />
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
