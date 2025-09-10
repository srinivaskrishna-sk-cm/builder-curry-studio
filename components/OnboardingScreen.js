import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import TemplateCard from "./TemplateCard";
import UploadBrandAssets from "./UploadBrandAssets";

const HERO =
  "https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F9caf0bfbc09b483bb1a79c01fbf1c57f?format=webp&width=800";

export default function OnboardingScreen() {
  const displayName = "Alex";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.progressRow}>
        <Text style={styles.stepText}>Step 1 of 4</Text>
        <Text style={styles.stepText}>0% Complete</Text>
      </View>

      <Text style={styles.title}>Welcome, {displayName}!</Text>
      <Text style={styles.subtitle}>
        Let’s set up your store and get you selling worldwide
      </Text>

      <View style={styles.navRow}>
        <View style={[styles.pill, styles.pillActive]}>
          <Text style={styles.pillTextActive}>Store Creation</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Products</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Business Verification</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Subscription & Payments</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View style={styles.iconBox}>
          <Text style={{ fontSize: 16 }}>📱</Text>
        </View>
        <Text style={styles.sectionTitle}>Store Creation</Text>
      </View>

      <View style={styles.templateHeader}>
        <Text style={styles.smallTitle}>Choose Your Store Template</Text>
      </View>

      <Text style={styles.description}>
        Select a design template that matches your brand style
      </Text>

      <View style={{ marginTop: 12 }}>
        <TemplateCard
          title="Modern Marketplace"
          description="Clean, professional design perfect for all product types"
          iconType="monitor"
        />

        <TemplateCard
          title="Creative Boutique"
          description="Artistic layout ideal for creative and handmade products"
          iconType="palette"
        />
      </View>

      <UploadBrandAssets />

      <Image source={{ uri: HERO }} style={styles.hero} resizeMode="cover" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  stepText: {
    fontSize: 12,
    color: "#6B7280",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 6,
  },
  navRow: {
    flexDirection: "row",
    marginTop: 14,
    gap: 8,
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "#EEF2FF",
    marginRight: 8,
  },
  pillActive: {
    backgroundColor: "#2563EB",
  },
  pillText: {
    fontSize: 13,
    color: "#475569",
  },
  pillTextActive: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    gap: 10,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  templateHeader: {
    marginTop: 12,
  },
  smallTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
  },
  description: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 6,
  },
  hero: {
    height: 180,
    width: "100%",
    borderRadius: 12,
    marginTop: 18,
  },
});
