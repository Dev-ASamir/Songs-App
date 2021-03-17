import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { normalizeHeight, normalizeWidth } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginTop: normalizeHeight(50),
  },
  cancel: {
    fontSize: normalizeHeight(18),
    color: COLORS.red,
    marginTop: normalizeHeight(30),
    right: normalizeWidth(10),
  },
  list: {
    paddingBottom: normalizeHeight(40),
    padding: normalizeHeight(20),
    borderRadius: normalizeHeight(5),
    overflow: 'hidden',
  },
  indicator: {
    padding: normalizeHeight(10),
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalizeHeight(18),
    color: COLORS.white,
    paddingVertical: normalizeHeight(10),
  },
});
