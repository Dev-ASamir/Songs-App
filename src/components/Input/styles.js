import { StyleSheet } from 'react-native';
import { SCREEN, COLORS } from '../../common';
import { normalizeHeight, normalizeWidth } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    height: normalizeHeight(50),
    flexDirection: 'row',
    width: SCREEN.WIDTH * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.black,
  },
  textInput: {
    fontSize: normalizeHeight(16),
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: normalizeWidth(5),
    marginHorizontal: normalizeWidth(10),
  },
  inputAccessoryView: {
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  done: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: normalizeHeight(10),
    marginHorizontal: normalizeWidth(15),
  },
});
