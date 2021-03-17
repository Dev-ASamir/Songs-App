import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { normalizeWidth, normalizeHeight } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { COLORS, STRINGS } from '../common';

export const CenterHeader = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.container}>
      <Text style={styles.text}>{STRINGS.search}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: normalizeWidth(220),
    height: normalizeHeight(40),
    left: normalizeWidth(25),
    borderRadius: normalizeHeight(20),
    backgroundColor: COLORS.searchColor,
  },
  text: {
    color: COLORS.lightGray,
    fontSize: normalizeHeight(16),
    textAlign: 'left',
    marginStart: normalizeWidth(20),
  },
});
