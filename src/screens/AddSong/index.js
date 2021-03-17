import React from 'react';
import { View, Alert, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import { addYourSong } from '../../services';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { Button, Input } from '../../components';
import { validationSchema } from './validationSchema';
import { COLORS } from '../../common';
import { normalizeHeight } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const AddSong = () => {
  const navigation = useNavigation();
  const onSubmit = async (values, { resetForm }) => {
    const { level, artist, title } = values;
    const response = await addYourSong({
      level,
      artist,
      title,
    });
    if (response.data) {
      resetForm({});
      navigation.push('SongsList');
    } else {
      Alert.alert(
        '',
        'An error ocurred please try again',
        [
          {
            text: 'ok',
            onPress: () => {},
          },
        ],
        { cancelable: false },
      );
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{
          title: '',
          artist: '',
          level: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
          isSubmitting,
        }) => (
          <View style={styles.innerContainer}>
            <Input
              textInputStyle={styles.input}
              placeholder={'Title'}
              placeholderTextColor={COLORS.white}
              style={styles.inputStyle}
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={() => setFieldTouched('title')}
            />
            {touched.title && errors.title && (
              <Text
                style={{
                  color: COLORS.red,
                  marginBottom: normalizeHeight(10),
                }}>
                {errors.title}
              </Text>
            )}
            <Input
              placeholder={'Artist'}
              textInputStyle={styles.input}
              placeholderTextColor={COLORS.white}
              style={styles.inputStyle}
              value={values.artist}
              onChangeText={handleChange('artist')}
              onBlur={() => setFieldTouched('artist')}
            />
            {touched.artist && errors.artist && (
              <Text
                style={{
                  color: COLORS.red,
                  marginBottom: normalizeHeight(10),
                }}>
                {errors.artist}
              </Text>
            )}
            <Input
              textInputStyle={styles.input}
              placeholder={'Level'}
              placeholderTextColor={COLORS.white}
              style={styles.inputStyle}
              keyboardType={'number-pad'}
              value={values.level}
              onChangeText={handleChange('level')}
              onBlur={() => setFieldTouched('level')}
            />
            {touched.level && errors.level && (
              <Text
                style={{
                  color: COLORS.red,
                  marginBottom: normalizeHeight(10),
                }}>
                {errors.level}
              </Text>
            )}

            {isSubmitting ? (
              <ActivityIndicator style={{ marginTop: normalizeHeight(30) }} />
            ) : (
              <Button
                onPress={() => handleSubmit()}
                children={'Add'}
                textStyle={styles.login}
                style={styles.contactButton}
              />
            )}
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default AddSong;
