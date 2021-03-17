import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { normalizeWidth, normalizeHeight, width, height } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    paddingTop: normalizeHeight(40),
  },
  image: {
    width: normalizeWidth(140),
    height: normalizeHeight(110),
    alignSelf: 'center',
    marginBottom: normalizeHeight(30),
  },
  inputStyle: {
    borderWidth: 0.5,
    borderRadius: normalizeHeight(5),
    width: '100%',
    borderColor: COLORS.purple,
    height: height('6.6%'),
    marginBottom: normalizeHeight(7),
  },
  input: {
    color: COLORS.white,
    textAlign: 'center',
  },
  containerView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    marginHorizontal: width('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: normalizeHeight(16),
    color: COLORS.white,
    textAlign: 'center',
  },
  contactButton: {
    borderRadius: normalizeHeight(5),
    width: '100%',
    height: normalizeHeight(50),
    marginTop: normalizeHeight(20),
    backgroundColor: COLORS.purple,
  },
  textContainer: {
    top: normalizeHeight(175),
  },
  text: {
    textAlign: 'center',
    color: COLORS.gray,
  },
});

export default styles;
