import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useAuth } from "@/hooks/auth/useAuth";

interface AuthContextProps {
  user: User | null;
  handleSetUser: (user: User | null) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleSetUser = (user: User | null) => setUser(user);

  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => useContext(AuthContext);