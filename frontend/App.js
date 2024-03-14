import React, { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import SignInWithOAuth from "./components/SignInWithOAuth";
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpPress = () => {
    setShowSignUp(true);
  };

  const handleSignInPress = () => {
    setShowSignUp(false);
  };
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <SafeAreaView className="bg-gray-900 flex-1">
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          {!showSignUp ? (
            <>
              <SignInScreen />
              <SignInWithOAuth />
              <Button title="Sign Up" onPress={handleSignUpPress} />
            </>
          ) : (
            <SignUpScreen />
          )}
          {showSignUp && (
            <Button title="Back to Sign In" onPress={handleSignInPress} />
          )}
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
