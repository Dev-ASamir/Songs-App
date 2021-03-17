import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import SongsList from '../screens/SongsList';
import Search from '../screens/Search';
import AddSong from '../screens/AddSong';
import Favorite from '../screens/Favorite';
import { COLORS } from '../common';
import { StyleSheet } from 'react-native';
import { LeftHeader } from './LeftHeader';
import { RightHeader } from './RightHeader';
import { CenterHeader } from './CenterHeader';

import { normalizeHeight, normalizeWidth } from '../utils';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerTruncatedBackTitle: '',
        headerBackTitle: '',
        headerTitleAlign: 'center',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
      }}>
      <MainStackNav.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
      <MainStackNav.Screen
        component={SongsList}
        name="SongsList"
        options={{
          headerLeft: () => <LeftHeader title={'Viulive'} color={COLORS.purple} />,
          headerRight: () => <RightHeader title={'heart'} color={COLORS.white} />,
          headerTitle: () => <CenterHeader />,
        }}
      />
      <MainStackNav.Screen component={Search} name="Search" />
      <MainStackNav.Screen
        component={Favorite}
        name="Favorite"
        options={{
          title: 'Favorite List',
        }}
      />
      <MainStackNav.Screen
        component={AddSong}
        name="AddSong"
        options={{
          title: 'Add Song',
        }}
      />
    </MainStackNav.Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.dark,
    height: normalizeHeight(110),
    shadowColor: 'transparent',
  },
  headerTitleStyle: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: normalizeHeight(20),
    fontWeight: 'bold',
  },
  headerLeftContainerStyle: {
    marginLeft: normalizeWidth(10),
  },
});

export default MainStack;
