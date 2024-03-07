import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementCountA = () => {
    setCountA(countA + 1);
  };

  const incrementCountB = () => {
    setCountB(countB + 1);
  };
  
  const zerar = () => {
    setCountA(0);
    setCountB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time A</Text>
      <Text style={styles.count}>{countA}</Text>

      <Text style={styles.title}>Time B</Text>
      <Text style={styles.count}>{countB}</Text>

      <Button title="+1 para o time A" onPress={incrementCountA} />
      <Button title="+1 para o time B" onPress={incrementCountB} />

      <Button title="Zerar" onPress={zerar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 30,
    marginBottom: 20,
  },
});
