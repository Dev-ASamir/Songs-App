import { StyleSheet, Dimensions } from 'react-native';
import { normalizeHeight } from '../utils';

export const COLORS = {
  white: '#FFF',
  offWhite: '#DFDFDF',
  dark: '#292929',
  purple: '#5844AF',
  red: '#E05959',
  black: '#222222',
  gray: '#313131',
  lightGray: '#777777',
  searchColor: '#393939',
  cardColor: '#2A2A2A',
  textGray: '#878787',
};

export const SCREEN = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: COLORS.offWhite,
  },
  errorText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: normalizeHeight(16),
    color: COLORS.white,
    marginTop: normalizeHeight(20),
  },
  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export const ACTIVE_OPCITY = 0.7;
