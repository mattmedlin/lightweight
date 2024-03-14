import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View className="items-center justify-center mt-[50%]">
      <View className="w-2/3 pb-2">
        <TextInput
          className="border border-stone-600 text-white rounded-md  h-12 px-2"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View className="w-2/3 pb-2">
        <TextInput
          className="border border-stone-600 text-white rounded-md  h-12 px-2"
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        className="w-2/3 gray-900 bg-stone-600 border border-stone-600 text-white rounded-md  h-12 px-2"
        onPress={onSignInPress}
      >
        <Text className="m-auto">Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
