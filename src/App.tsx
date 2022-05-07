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

  useEffect(() => {
    setFriends(friendData);
  }, []);

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
    height: 1,
    backgroundColor: '#777',
  },
  text: {fontSize: 24, fontWeight: '600', color: '#EEE'},
});

export default App;
