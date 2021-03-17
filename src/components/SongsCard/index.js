import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishList } from '../../redux/actions';
import { ACTIVE_OPCITY, COLORS, IMAGES } from '../../common';
import styles from './styles';
import Stars from 'react-native-stars';
import { PropTypes } from 'prop-types';

export const SongsCard = ({ song, onPress }) => {
  const [validImage, setValidImage] = useState(false);

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => ({
    userData: state.favorite,
  }));
  const { wishlist } = userData;

  const rate = song.level % 3 === 0 ? song.level / 3 : Math.floor(song.level / 3) + 0.5;
  const index = wishlist && wishlist.findIndex((item) => item.id === song.id);
  const heartColor = index === -1 ? COLORS.textGray : COLORS.red;
  const heartName = index === -1 ? 'heart-outline' : 'heart';

  useEffect(() => {
    checkImage();
  }, []);

  function checkImage() {
    var request = new XMLHttpRequest();
    request.open('GET', song.images, true);
    request.send();
    request.onload = function () {
      if (request.status === 200) {
        setValidImage(true);
      } else {
        setValidImage(false);
      }
    };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} activeOpacity={ACTIVE_OPCITY} onPress={onPress}>
        <Image
          source={
            validImage
              ? {
                  uri: song.images,
                }
              : IMAGES.songPlaceholder
          }
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {song.title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {song.artist}
          </Text>
          <View style={styles.star}>
            <Stars
              default={rate}
              count={5}
              half={true}
              disabled
              fullStar={<Icon size={25} name={'star'} style={styles.myStarStyle} />}
              emptyStar={<Icon size={25} name={'star-outline'} style={styles.myStarStyle} />}
              halfStar={<Icon size={25} name={'star-half'} style={styles.myStarStyle} />}
            />
          </View>
        </View>
        <Icon
          name={heartName}
          size={30}
          onPress={() => dispatch(addToWishList({ song, wishlist }))}
          style={styles.icon}
          color={heartColor}
        />
      </TouchableOpacity>
    </View>
  );
};

SongsCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  song: PropTypes.object,
};
