import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PrimaryButton({
  title,
  subtitle,
  onPress,
  gradient,
}) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <LinearGradient colors={gradient} style={styles.button}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: "#E0E7FF",
    fontSize: 13,
    marginTop: 5,
  },
});
``
