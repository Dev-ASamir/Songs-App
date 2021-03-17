import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from '../../common';
import { normalizeHeight, normalizeWidth } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.cardColor,
    marginBottom: normalizeHeight(20),
    ...STYLES.shaddow,
    width: '100%',
    height: normalizeHeight(120),
    flexDirection: 'row',
  },
  image: {
    width: normalizeWidth(100),
    height: normalizeHeight(120),
  },
  title: {
    fontSize: normalizeHeight(16),
    paddingHorizontal: normalizeWidth(10),
    fontWeight: 'bold',
    width: normalizeWidth(240),
    color: COLORS.white,
  },
  artist: {
    fontSize: normalizeHeight(16),
    paddingHorizontal: normalizeWidth(10),
    width: normalizeWidth(240),
    color: COLORS.textGray,
    paddingTop: normalizeHeight(10),
  },
  language: {
    fontSize: normalizeHeight(16),
    color: COLORS.black,
    fontWeight: 'normal',
  },
  textContainer: {
    marginVertical: normalizeHeight(15),
    justifyContent: 'space-between',
  },
  releaseDate: {
    fontSize: normalizeHeight(16),
    paddingHorizontal: normalizeWidth(10),
    width: normalizeWidth(280),
    color: COLORS.gray,
    marginTop: normalizeHeight(5),
  },
  icon: {
    right: normalizeHeight(15),
    bottom: normalizeHeight(15),
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  cicle: {
    left: normalizeHeight(15),
    bottom: normalizeHeight(75),
    position: 'absolute',
  },
  star: {
    alignItems: 'flex-start',
    paddingHorizontal: normalizeWidth(10),
    marginTop: normalizeHeight(10),
  },
  myStarStyle: {
    color: COLORS.purple,
  },
});
