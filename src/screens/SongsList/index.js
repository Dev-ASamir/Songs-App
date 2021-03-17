import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, TouchableOpacity, Text } from 'react-native';
import { COLORS, STRINGS } from '../../common';
import { SongsCard } from '../../components';
import styles from './styles';
import { FlatList } from 'react-native';
import { getSongs } from '../../services';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SongsList = () => {
  const navigation = useNavigation();
  const [requestData, setRequestData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    setLoading(true);
    startUp();
  }, []);

  const startUp = async () => {
    const res = await getSongs({ limit });
    try {
      if (res.data) {
        setRequestData(res.data);
        setData(res.data);
        setLoading(false);
      }
      return { ...requestData, error: true };
    } catch (error) {
      console.warn(error);
    }
  };

  const loadMore = async () => {
    setRefreshing(true);
    setLimit(limit + 5);
    const moreSongs = await getSongs({ limit });
    setRefreshing(false);
    setRequestData(moreSongs.data);
    setData(moreSongs.data);
  };

  const handleFilter = (val) => {
    let filteredData = [];
    setRate(val);
    filteredData = data && data.filter((i) => Math.abs(i.level - val * 3) < 3);
    setRequestData(filteredData);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator color={COLORS.white} style={styles.indicator} size={'large'} />
        </View>
      ) : (
        <>
          <View style={styles.subContainer}>
            <View style={styles.rateContainer}>
              <View style={styles.block}>
                <Text style={styles.text}>{STRINGS.filterText}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setRequestData(data);
                    setRate(0);
                  }}
                  style={styles.resetContainer}>
                  <Text style={styles.add}>{STRINGS.reset}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.star}>
                <Stars
                  default={rate}
                  count={5}
                  spacing={18}
                  update={(val) => handleFilter(val)}
                  fullStar={<Icon size={30} name={'star'} style={styles.myStarStyle} />}
                  emptyStar={<Icon size={30} name={'star-outline'} style={styles.myStarStyle} />}
                  halfStar={<Icon size={30} name={'star-half'} style={styles.myStarStyle} />}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddSong')}
              style={styles.addContainer}>
              <Text style={styles.add}>{STRINGS.add}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={requestData}
            renderItem={({ item }) => <SongsCard song={item} />}
            ListEmptyComponent={() => (
              <View style={styles.spinner}>
                <Text style={styles.text}>{STRINGS.noResult}</Text>
              </View>
            )}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => `${item.id}`}
            ListFooterComponent={() =>
              !refreshing ? null : (
                <View style={styles.footer}>
                  <ActivityIndicator size="small" color={COLORS.white} />
                </View>
              )
            }
            initialNumToRender={5}
            maxToRenderPerBatch={2}
            windowSize={2}
            onEndReachedThreshold={0.5}
            onMomentumScrollEnd={() => loadMore()}
          />
        </>
      )}
    </View>
  );
};

export default SongsList;
