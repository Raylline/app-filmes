import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieList from '../components/Cardfilms';
import SearchBar from '../components/Searchbar';


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>O que deseja assistir?</Text>
      <SearchBar/>
      <MovieList/>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#313131',
  },
  texto: {
    paddingTop: 30,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
