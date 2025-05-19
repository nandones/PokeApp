import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;
  const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];

  return (
    <View style={styles.container}>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>#{pokemonId}</Text>
      </View>
      <Text style={styles.name}>{pokemon.name}</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>URL Completa:</Text>
        <Text style={styles.value}>{pokemon.url}</Text>
        
        {/* TODO: Adicionar imagem com: */}
        {/* <Image 
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` }} 
          style={styles.image}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#6c757d',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 16,
    width: '100%',
    borderRadius: 12,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
