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

  // This is just a mock data fetch on first render
  useEffect(() => {
    setFriends(friendData);
  }, []);

  // Component used as list separator
  const ItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const EmptyList = () => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyList}
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
  item: {
    fontSize: 24,
    fontWeight: '600',
    color: '#EEE',
    padding: 18,
    backgroundColor: '#666',
  },
});

export default App;
