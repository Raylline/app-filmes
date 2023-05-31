import React from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = () => {
  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: 10, 
    marginTop: 20, marginBottom:20, borderRadius: 16, height: 45, 
    alignItems:'center', justifyContent:'space-between', flexDirection:'row' }}>
      <TextInput
        style={{ backgroundColor: 'transparent', color:'white', 
        width:'80%', paddingLeft: 15}}
        placeholder="Pesquisar"
        placeholderTextColor="gray"
        
      />
    </View>
  );
};

export default SearchBar;
