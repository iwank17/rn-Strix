// @flow

import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import {Styles} from './Detail.screen.style';
import {Routes} from '../../Navigations/Routes';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp,
  person: Object,
  setData: Function, 
};

const DetailScreen = ({ navigation, person, setData, }: Props) => {
  const [state, setState] = useState(person);
  const {name, age} = state;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate(Routes.HomeScreen)}>
        Detail Screen
      </Text>
      <TextInput
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setState({...state, name: text})}
        value={name}
      />
      <TextInput
        keyboardType="numeric"
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setState({...state, age: Number (text)})}
        value={age + ''}
      />
      <TouchableWithoutFeedback
        onPress={() => setData(state)}>
        <View style={Styles.button}>
          <Text style={Styles.textbutton}>Send</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DetailScreen;