import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, ViewPropTypes } from 'react-native';
import { normalizeHeight, normalizeWidth } from '../../utils';
import { COLORS } from '../../common';
import { PropTypes } from 'prop-types';
export const Button = ({
  onPress,
  textStyle,
  children,
  style,
  loading,
  spinnerSize,
  spinnerColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.buttonContainer, style]}>
      {loading ? (
        <ActivityIndicator size={spinnerSize || 'small'} color={spinnerColor || '#fff'} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string,
  textStyle: ViewPropTypes,
  style: ViewPropTypes,
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.buttonColor,
  },
  buttonText: {
    paddingHorizontal: normalizeWidth(10),
    paddingVertical: normalizeHeight(10),
    color: COLORS.white,
  },
});
