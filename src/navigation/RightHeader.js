import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { normalizeWidth, normalizeHeight } from '../utils';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../common';
import { PropTypes } from 'prop-types';

export const RightHeader = ({ color, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Favorite')} style={styles.iconContainer}>
      <Icon name={title} size={20} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: COLORS.red,
    borderRadius: normalizeHeight(15),
    width: normalizeHeight(30),
    height: normalizeHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: normalizeWidth(10),
  },
});

RightHeader.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};
