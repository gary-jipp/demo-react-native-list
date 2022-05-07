import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
import {FlatList} from 'react-native';
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

  const ItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        ItemSeparatorComponent={ItemSeparator}
      />
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
  item: {fontSize: 24, fontWeight: '600', color: '#EEE', padding: 18, backgroundColor: '#666'},
});

export default App;
