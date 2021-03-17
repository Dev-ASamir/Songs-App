import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, View, TouchableOpacity, Text } from 'react-native';
import { COLORS, STRINGS } from '../../common';
import { SongsCard, SearchBox } from '../../components';
import styles from './styles';
import { FlatList } from 'react-native';
import { searchSongs } from '../../services';
import validator from 'validator';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  navigation.setOptions({
    headerShown: false,
  });

  const searchHander = (value) => {
    const isEmpty = validator.isEmpty(value, { ignore_whitespace: true });
    setTimeout(async () => {
      if (!isEmpty) {
        setError(false);
        setLoading(true);
        const response = await searchSongs();
        const searchResult = response && response.data.filter((i) => i.search.includes(value));
        setRequestData(searchResult);
        setLoading(false);
        if (searchResult.length === 0) {
          setError(true);
        }
      }
    }, 1300);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBox
          placeholder="Search"
          value={searchText}
          onPress={() => searchHander(searchText)}
          onChangeText={(text) => {
            setSearchText(text);
            searchHander(text);
          }}
          containerStyle={styles.search}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>{STRINGS.cancel}</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator color={COLORS.white} style={styles.indicator} size={'large'} />
        </View>
      ) : error ? (
        <View style={styles.spinner}>
          <Text style={styles.text}>{STRINGS.noResult}</Text>
        </View>
      ) : (
        <FlatList
          data={requestData}
          renderItem={({ item }) => <SongsCard song={item} />}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
};

export default Search;
