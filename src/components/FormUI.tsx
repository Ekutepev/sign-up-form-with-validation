import { SignUpData, signUpSchema } from "@/schemas/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FormUI() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <View>
          <Text style={styles.headerStyle}>Sign up form</Text>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputField}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="First name"
              />
            )}
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName.message}</Text>
          )}
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputField}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Last name"
              />
            )}
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName.message}</Text>
          )}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputField}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                placeholder="Email"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputField}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Password"
                secureTextEntry
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputField}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Confirm password"
                secureTextEntry
              />
            )}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}
          <Pressable
            style={styles.buttonStyle}
            onPressIn={() =>
              handleSubmit((data) => {
                console.log({
                  firstName: data.firstName,
                  lastName: data.lastName,
                  email: data.email,
                });
              })()
            }
          >
            <Text style={styles.buttonTextStyle}>Sign up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: "#f3f3f3",
  },

  inputField: {
    color: "#001000",
    padding: 8,
    margin: 6,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    maxWidth: "auto",
  },

  buttonStyle: {
    backgroundColor: "#007AFF",
    padding: 12,
    margin: 6,
    borderRadius: 6,
  },

  headerStyle: {
    color: "#3f3f3f",
    marginHorizontal: 8,
    fontWeight: "bold",
    fontSize: 24,
  },

  buttonTextStyle: {
    color: "#ffffff",
    textAlign: "center",
  },

  errorText: {
    color: "red",
    marginHorizontal: 6,
  },
});
