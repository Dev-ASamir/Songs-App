import React from 'react';
import {
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
  InputAccessoryView,
  Platform,
  Text,
  ViewPropTypes,
} from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { COLORS } from '../../common';

const Input = ({
  placeholder,
  maxLength,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  style,
  textInputStyle,
  errorMessage,
  placeholderTextColor,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...props}
        inputAccessoryViewID={'inputAccessoryView'}
        style={[styles.textInput, textInputStyle]}
        placeholder={placeholder}
        maxLength={maxLength}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={placeholderTextColor || COLORS.white}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry || false}
        keyboardType={keyboardType || 'default'}
        returnKeyType={'done'}
        onSubmitEditing={() => Keyboard.dismiss()}
        scrollEnabled={false}
      />
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID={'inputAccessoryView'}>
          <TouchableOpacity onPress={Keyboard.dismiss} style={styles.inputAccessoryView}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </InputAccessoryView>
      )}
      <Text style={{ color: COLORS.red }}>{errorMessage}</Text>
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  errorMessage: PropTypes.string,
  style: ViewPropTypes,
  textInputStyle: ViewPropTypes,
  placeholderTextColor: PropTypes.string,
};

export { Input };
