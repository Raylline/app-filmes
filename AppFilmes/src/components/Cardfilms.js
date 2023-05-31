import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const apiKey = '8a78bbc2059ae1af9b5db720e9ee991d'; // Substitua pela sua chave de API do TMDB

    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
      );
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={{ width: 100, height: 150, borderRadius: 10 }}
      />
    </View>
  );

  const handleLoadMore = () => {
    if (!isLoading) {
      fetchMovies();
    }
  };

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MovieList;
