import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        username,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View>
      {!pendingVerification && (
        <View className="items-center justify-center mt-[50%]">
          <View className="w-2/3 pb-2">
            <TextInput
              className="border border-stone-600 text-white rounded-md  h-12 px-2"
              autoCapitalize="none"
              value={firstName}
              placeholder="First Name..."
              onChangeText={(firstName) => setFirstName(firstName)}
            />
          </View>
          <View className="w-2/3 pb-2">
            <TextInput
              className="border border-stone-600 text-white rounded-md  h-12 px-2"
              autoCapitalize="none"
              value={lastName}
              placeholder="Last Name..."
              onChangeText={(lastName) => setLastName(lastName)}
            />
          </View>
          <View className="w-2/3 pb-2">
            <TextInput
              className="border border-stone-600 text-white rounded-md  h-12 px-2"
              autoCapitalize="none"
              value={username}
              placeholder="Username..."
              onChangeText={(username) => setUsername(username)}
            />
          </View>
          <View className="w-2/3 pb-2">
            <TextInput
              className="border border-stone-600 text-white rounded-md  h-12 px-2"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
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
            onPress={onSignUpPress}
          >
            <Text className="m-auto">Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View className="items-center justify-center mt-[50%]">
          <View className="w-2/3 pb-2">
            <TextInput
              className="border border-stone-600 text-white rounded-md  h-12 px-2"
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity
            className="w-2/3 gray-900 bg-stone-600 border border-stone-600 text-white rounded-md  h-12 px-2"
            onPress={onPressVerify}
          >
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
