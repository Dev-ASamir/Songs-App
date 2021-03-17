import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { normalizeWidth, normalizeHeight } from '../utils';
import { PropTypes } from 'prop-types';

export const LeftHeader = ({ color, title }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: normalizeWidth(10),
  },
  text: {
    fontSize: normalizeHeight(24),
    fontWeight: 'bold',
  },
});

LeftHeader.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};
