import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { TSignInCredentials, TSignUpCredentials } from "./types";
import { Alert } from "react-native";
import { router } from "expo-router";
import { User } from "@supabase/supabase-js";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  const handleSetUser = (user: User | null) => setUser(user);

  const handleSignIn = async (credentials: TSignInCredentials) => {
    const { email, password } = credentials;

    try {
      setIsLoadingAuth(true);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        const errorMessage = error.code === "invalid_credentials" ? "Usuário e/ou senha inválidos" : error.message;
        return Alert.alert("Erro ao autenticar", errorMessage);
      }

      router.navigate("/(panel)/profile/page");
    } catch (error) {
      console.error("Erro ao autenticar", error);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const handleSignUp = async (credentials: TSignUpCredentials) => {
    const { name, email, password } = credentials;

    try {
      setIsLoadingAuth(true);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } }
      });

      if (error) return Alert.alert("Erro ao cadastrar", error.message);

      Alert.alert("Sucesso", "Cadastro realizado com sucesso");

      router.replace("/");
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    } finally {
      setIsLoadingAuth(false);
    }
  }

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) return Alert.alert("Erro ao sair", error.message);

      setUser(null);
    } catch (error) {
      console.error("Erro ao sair", error);
    }
  }

  return {
    user,
    isLoadingAuth,
    handleSetUser,
    handleSignIn,
    handleSignUp,
    handleSignOut,
  };
};
