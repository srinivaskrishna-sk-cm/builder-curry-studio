import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TemplateCard({ title, description, iconType }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{description}</Text>
        <TouchableOpacity style={styles.selectBtn} activeOpacity={0.8}>
          <Text style={styles.selectBtnText}>Select Template</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <View style={styles.iconBubble}>
          <Text style={{ fontSize: 20 }}>
            {iconType === "palette" ? "🎨" : "🖥️"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  left: {
    flex: 1,
  },
  right: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  cardDesc: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 13,
  },
  selectBtn: {
    marginTop: 12,
    backgroundColor: "#2563EB",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  selectBtnText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  iconBubble: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
