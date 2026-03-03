import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>JITU 🚀</Text>
                  <Text style={styles.subtitle}>Cloud Built App</Text>
                        <Text style={styles.tag}>Powered by Codespaces ☁️</Text>
                            </View>
                              );
                              }

                              const styles = StyleSheet.create({
                                container: {
                                    flex: 1,
                                        backgroundColor: "#0f0f0f",
                                            justifyContent: "center",
                                                alignItems: "center",
                                                  },
                                                    title: {
                                                        fontSize: 42,
                                                            fontWeight: "bold",
                                                                color: "#00ffff",
                                                                    letterSpacing: 4,
                                                                      },
                                                                        subtitle: {
                                                                            fontSize: 18,
                                                                                color: "#ffffff",
                                                                                    marginTop: 10,
                                                                                      },
                                                                                        tag: {
                                                                                            fontSize: 14,
                                                                                                color: "#888",
                                                                                                    marginTop: 6,
                                                                                                      },
                                                                                                      });