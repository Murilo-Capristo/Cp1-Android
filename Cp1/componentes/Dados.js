import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Dados = ({ nome, precoProduto, porcProduto }) => {
  const [valorFinal, setValorFinal] = useState(null);

  useEffect(() => {
    if (nome && precoProduto && porcProduto) {
      const precoNum = parseFloat(precoProduto);
      const porcNum = parseFloat(porcProduto);

      if (!isNaN(precoNum) && !isNaN(porcNum)) {
        setValorFinal(precoNum + (precoNum * porcNum / 100));
      }
    }
  }, [nome, precoProduto, porcProduto]);

  return (
    <View>
      {valorFinal !== null && (
        <Text style={styles.container}>
          Valor calculado: {valorFinal.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default Dados;
