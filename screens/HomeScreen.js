import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
  TextInput,
} from "react-native";
import PokemonCard from "../components/PokemonCard"; 

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const json = await res.json();
      console.log("Pokémons recebidos:", json.results);
      setPokemons(json.results);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    } finally {
      setLoading(false);
    }
  };

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())
  );

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Pokémon..."
        value={filtro}
        onChangeText={setFiltro}
      />
      <Button title="Recarregar" onPress={fetchPokemons} />

      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={pokemonsFiltrados}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              onPress={() => navigation.navigate("Detalhes", { pokemon: item })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    padding: 8,
  },
  loader: {
    marginTop: 20,
  },
});
