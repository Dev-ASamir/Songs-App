import React from 'react';
import { FlatList, View } from 'react-native';
import { SongsCard } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const { userData } = useSelector((state) => ({
    userData: state.favorite,
  }));
  const { wishlist } = userData;

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={wishlist}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <SongsCard song={item} />}
      />
    </View>
  );
};

export default Favorite;
