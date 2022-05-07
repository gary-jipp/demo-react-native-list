import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
import {ScrollView} from 'react-native';
import friendData from './mockData';

type FriendType = {
  id: string;
  name: string;
};

const App = function () {
  const [friends, setFriends] = useState<FriendType[]>([]);

  // This is just a mock data fetch on first render
  useEffect(() => {
    setFriends(friendData);
  }, []);

  // Build our mapped list ahead of time
  const friendList = friends.map(friend => (
    <View key={friend.id} style={styles.list}>
      <Text style={styles.text}>{friend.name}</Text>
      <View style={styles.itemSeparator} />
    </View>
  ));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>{friendList}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  list: {
    padding: 18,
    backgroundColor: '#666',
  },
  itemSeparator: {
    height: 2,
    backgroundColor: '#607D8B',
  },
  text: {fontSize: 24, fontWeight: '600', color: '#EEE'},
});

export default App;
