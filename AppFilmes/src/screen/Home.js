import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieSlide from '../components/MovieSlide';
import SearchBar from '../components/Searchbar';
import MovieDetails from '../screen/MovieDetails';
import SeriesSlide from '../components/SeriesSlide';
import SeriesDetails from './SeriesDetails';
import MovieList from '../components/Cardfilms';
import Menu from '../components/Menu';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showMovieList, setShowMovieList] = useState(false);

  const handleGoBack = () => {
    setSelectedMovie(null);
    setSelectedSeries(null);
    setShowDetails(false);
    setShowMovieList(false);
  };

  const handleMenuPress = (screen) => {
    if (screen === 'movielist') {
      setShowDetails(false);
      setSelectedMovie(null);
      setSelectedSeries(null);
      setShowMovieList(true);
    } else {
      setShowDetails(false);
      setSelectedMovie(null);
      setSelectedSeries(null);
      setShowMovieList(false);
    }
  };

  return (
    <View style={styles.container}>
      <Menu handleMenuPress={handleMenuPress} />
      {!showDetails && !showMovieList && (
        <>
          <Text style={styles.texto}>O que deseja assistir?</Text>
          <SearchBar />
          <MovieSlide setSelectedMovie={setSelectedMovie} setShowDetails={setShowDetails} />
          <SeriesSlide setSelectedSeries={setSelectedSeries} setShowDetails={setShowDetails} />
        </>
      )}
      {showDetails && (
        <>
          {selectedMovie ? (
            <MovieDetails movie={selectedMovie} handleGoBack={handleGoBack} />
          ) : (
            <SeriesDetails series={selectedSeries} handleGoBack={handleGoBack} />
          )}
        </>
      )}
      {showMovieList && (
        <View style={styles.movieListContainer}>
          <MovieList />
        </View>
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
    paddingTop: 10,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  movieListContainer: {
    flex: 1,
  },
});

export default Home;
