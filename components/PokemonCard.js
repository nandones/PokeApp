import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PokemonCard({ pokemon, onPress }) {
  // Extrai o ID da URL (ex: "https://pokeapi.co/api/v2/pokemon/1/" → ID = 1)
  const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  const pokemonId = getIdFromUrl(pokemon.url);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>#{pokemonId}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.url}>{pokemon.url}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// Estilos (pode manter os mesmos do UserCard com pequenos ajustes)
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6c757d",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },
  info: {
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
  },
  url: {
    color: "#666",
    fontSize: 12,
  },
});