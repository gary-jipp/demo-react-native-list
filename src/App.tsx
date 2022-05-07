import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
import {FlatList, ListRenderItem} from 'react-native';
import friends from './mockData';

type Friend = {
  id: string;
  name: string;
};

const App = function () {
  console.log('Rendering App');

  // Still doesn't stop multiple item renders
  const renderItem: ListRenderItem<Friend> = useCallback(({item}) => {
    console.log('Rendering Item', item.id, item.name);
    return <Text style={styles.item}>{item.name}</Text>;
  }, []);

  const EmptyListComponent = () => {
    return (
      <View>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  // Component used as list separator
  const ItemSeparatorComponent = React.memo(() => {
    return <View style={styles.itemSeparator} />;
  });

  const ListHeaderComponent = React.memo(() => {
    return <Text style={styles.header}>List of Friends</Text>;
  });

  const ListFooterComponent = React.memo(() => {
    return <Text style={styles.footer}>That's all Folks</Text>;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={EmptyListComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
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
    height: 2,
    backgroundColor: '#607D8B',
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
