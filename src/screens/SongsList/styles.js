import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { normalizeHeight, normalizeWidth } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  list: {
    paddingBottom: normalizeHeight(40),
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
  addContainer: {
    backgroundColor: COLORS.cardColor,
    height: normalizeHeight(40),
    width: normalizeWidth(120),
    borderRadius: normalizeHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    right: normalizeWidth(20),
  },
  resetContainer: {
    backgroundColor: COLORS.cardColor,
    height: normalizeHeight(30),
    width: normalizeWidth(70),
    borderRadius: normalizeHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: normalizeWidth(20),
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  add: {
    color: COLORS.white,
    fontSize: normalizeHeight(16),
  },
  myStarStyle: {
    color: COLORS.purple,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateContainer: {
    paddingHorizontal: normalizeWidth(20),
    alignItems: 'flex-start',
    marginTop: normalizeHeight(10),
    marginBottom: normalizeHeight(20),
  },
  star: {
    right: normalizeWidth(15),
  },
  text: {
    fontSize: normalizeHeight(18),
    color: COLORS.white,
    paddingVertical: normalizeHeight(10),
  },
  footer: {
    height: normalizeHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
