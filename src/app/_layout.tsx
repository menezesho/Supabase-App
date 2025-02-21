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
  const { handleSetUser } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log('session', session?.user)

      if (session) {
        handleSetUser(session.user);

        return router.replace('/(panel)/profile/page');
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
        name="(auth)/signup/page"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/SignIn/page"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(panel)/profile/page"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}