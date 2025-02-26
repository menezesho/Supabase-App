import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from './components/Icon'
import type { User } from '@supabase/supabase-js'

type ProfileHeader = {
  user: User | null;
};

export const ProfileHeader = (props: ProfileHeader) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.infoText}>{user?.email}</Text>
      </View>
      <Icon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.zinc,
  },
  infoText: {
    fontSize: 16,
    color: colors.gray2,
  },
});