import React from 'react'
import { useAuth } from '@/hooks/auth/useAuth';
import { View, StyleSheet } from 'react-native'
import { Button, ProfileHeader } from '@/components';

export default function Profile() {
  const { handleSignOut, user } = useAuth();

  return (
    <View style={styles.screen}>
      <ProfileHeader user={user} />

      <Button
        text='Sair'
        onPress={handleSignOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  }
});