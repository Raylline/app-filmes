import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieSlide from '../components/MovieSlide';
import SearchBar from '../components/Searchbar';
import MovieDetails from '../screen/MovieDetails';
import SeriesSlide from '../components/SeriesSlide';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
    <View style={styles.container}>
      {!showDetails && <Text style={styles.texto}>O que deseja assistir?</Text>}
      {!showDetails && <SearchBar />}
      {showDetails ? (
        <MovieDetails movie={selectedMovie} handleGoBack={() => setShowDetails(false)} />
      ) : (
        <MovieSlide setSelectedMovie={setSelectedMovie} setShowDetails={setShowDetails} />
      )}
      <SeriesSlide />
    </View>
    </>
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
