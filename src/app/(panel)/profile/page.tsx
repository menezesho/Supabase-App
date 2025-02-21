import React from 'react'
import { Button } from '@/components';
import { useAuth } from '@/hooks/auth/useAuth';
import { View, Text, StyleSheet } from 'react-native'

export default function Profile() {
  const { handleSignOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Pagina de perfil</Text>

      <Button
        text='Sair'
        onPress={handleSignOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});