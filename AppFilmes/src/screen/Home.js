import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieList from '../components/Cardfilms';
import SearchBar from '../components/Searchbar';
import MovieDetails from '../components/MovieDetails';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.container}>
      {!showDetails && <Text style={styles.texto}>O que deseja assistir?</Text>}
      {!showDetails && <SearchBar />}
      {showDetails ? (
        <MovieDetails movie={selectedMovie} handleGoBack={() => setShowDetails(false)} />
      ) : (
        <MovieList setSelectedMovie={setSelectedMovie} setShowDetails={setShowDetails} />
      )}
    </View>
  );
};

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

export default Home;
