import { router, Stack } from 'expo-router';
import { AuthProvider } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/auth/useAuth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

function MainLayout() {
  const { handleSetUser, user } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        handleSetUser(session.user);

        return router.replace('/(panel)/Profile/page');
      }

      handleSetUser(null);
      router.replace('/(auth)/SignIn/page');
    });
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/SignUp/page"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/SignIn/page"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(panel)/Profile/page"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}