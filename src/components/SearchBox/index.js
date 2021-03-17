import React from 'react';
import { View, TextInput, ViewPropTypes, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../common';
import styles from './styles';
import { PropTypes } from 'prop-types';

let SearchBox = ({ containerStyle, onPress, ...rest }) => {
  return (
    <View style={[styles.search, containerStyle]}>
      <View style={styles.leftIconPlacholder}>
        <TextInput
          testID="SearchBox"
          maxLength={20}
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.textInput}
          {...rest}
        />
        <TouchableOpacity onPress={onPress}>
          <Icon name={'magnify'} size={25} style={styles.searchIcon} color={COLORS.gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
SearchBox = React.memo(SearchBox);
export { SearchBox };

SearchBox.propTypes = {
  onPress: PropTypes.func.isRequired,
  containerStyle: ViewPropTypes,
};
