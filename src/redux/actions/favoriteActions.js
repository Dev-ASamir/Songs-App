import { ADD_TO_WISHLIST, REMOVE_FORM_WISHLIST } from './types';

export const addToWishList = ({ song, wishlist }) => {
  const index = wishlist && wishlist.findIndex((item) => item.id === song.id);
  if (index !== -1) {
    const myWishList = wishlist && wishlist.filter((item) => item.id !== song.id);
    return { type: REMOVE_FORM_WISHLIST, payload: myWishList };
  } else {
    return { type: ADD_TO_WISHLIST, payload: song };
  }
};
