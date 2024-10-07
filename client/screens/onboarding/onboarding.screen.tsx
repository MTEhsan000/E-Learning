import { styles } from "@/styles/onboarding/onboard"; // Adjust path if necessary
import React from "react";
import { View, Text } from "react-native";

const OnboardingScreen = () => {
    return (
        <View style={styles.firstContainer}>
            <Text style={styles.titleText}>Welcome to Our App</Text>
            <Text style={styles.titleTextShape1}>Let's get started!</Text>
        </View>
    );
};

export default OnboardingScreen; // Correct export