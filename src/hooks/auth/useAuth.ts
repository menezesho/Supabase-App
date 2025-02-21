import { supabase } from "@/src/lib/supabase";
import { useState } from "react";
import { TSignUpCredentials } from "./types";
import { Alert } from "react-native";
import { router } from "expo-router";

export const useAuth = () => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  const handleSignUp = async (credentials: TSignUpCredentials) => {
    const { email, password, name } = credentials;

    try {
      setIsLoadingAuth(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } }
      });

      if (error) {
        return Alert.alert("Erro ao cadastrar", error.message);
      }

      Alert.alert("Sucesso", "Cadastro realizado com sucesso");

      router.replace("/");
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    } finally {
      setIsLoadingAuth(false);
    }
  }

  return {
    isLoadingAuth,
    handleSignUp,
  };
};
