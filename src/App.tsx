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
      <View>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return <Text style={styles.header}>List of Friends</Text>;
  };

  const ListFooterComponent = () => {
    return <Text style={styles.footer}>That's all Folks</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
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
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default App;
