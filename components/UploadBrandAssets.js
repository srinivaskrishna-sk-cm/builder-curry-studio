import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function UploadBrandAssets() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Your Brand Assets</Text>
      <Text style={styles.subtitle}>
        Add your logo and banner to personalize your store.
      </Text>

      <View style={styles.box}>
        <View style={{ flex: 1 }}>
          <Text style={styles.boxTitle}>Logo</Text>
          <Text style={styles.boxDesc}>SVG or PNG up to 2MB</Text>
        </View>
        <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.8}>
          <Text style={styles.uploadBtnText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <View style={{ flex: 1 }}>
          <Text style={styles.boxTitle}>Banner</Text>
          <Text style={styles.boxDesc}>JPG or PNG up to 5MB</Text>
        </View>
        <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.8}>
          <Text style={styles.uploadBtnText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 12,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E6E9EE",
    marginBottom: 10,
  },
  boxTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
  },
  boxDesc: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  uploadBtn: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E9EE",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  uploadBtnText: {
    color: "#0F172A",
    fontWeight: "600",
  },
});
