import {StyleSheet} from 'react-native';
import {rh, rw, rbr, rf} from '../../Utils/Layout.util';
import {COLORS} from '../../Themes';

const Styles = StyleSheet.create({
  
  button: {
    height: rh(40),
    width: rw(80),
    backgroundColor: 'cyan',
    borderRadius: rbr(6),
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: rw(10),
    overflow: 'hidden',
    marginTop: 15,
  },
  textbutton: {
    flex: 1,
    marginVertical: rh(10),
  },
});

export {Styles};