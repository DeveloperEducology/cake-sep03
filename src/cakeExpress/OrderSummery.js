import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSummary = ({ orders }) => {
  // Calculate total amount, total advanced amount, and total balance amount
  const totalAmount = orders.reduce(
    (acc, order) => acc + (order.advanced_payment + order.balance_payment),
    0
  );
  const totalAdvancedAmount = orders.reduce(
    (acc, order) => acc + order.advanced_payment,
    0
  );
  const totalBalanceAmount = orders.reduce(
    (acc, order) => acc + order.balance_payment,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Total: ${totalAmount}</Text>
      <Text style={styles.text2}>Advance: ${totalAdvancedAmount}</Text>
      <Text style={styles.text3}>Balance : ${totalBalanceAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    flexDirection: "row",
    gap: 10,
  },
  text1: {
    fontSize: 16,
    marginBottom: 5,
    borderWidth: 2,
    padding: 5,
    borderRadius: 6,
    borderColor: "orange",
  },
  text2: {
    fontSize: 16,
    marginBottom: 5,
    borderWidth: 2,
    padding: 5,
    borderRadius: 6,
    borderColor: "green",
  },
  text3: {
    fontSize: 16,
    marginBottom: 5,
    borderWidth: 2,
    padding: 5,
    borderRadius: 6,
    borderColor: "red",
  },
});

export default OrderSummary;
