import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '@/src/app/constants/colors';

type THeaderProps = {
  title: string;
  onPressGoBack?: () => void;
};

export function Header({ title, onPressGoBack }: THeaderProps) {
  return (
    <View style={styles.container}>
      {onPressGoBack && (
        <TouchableOpacity activeOpacity={0.8} onPress={onPressGoBack} style={styles.goBackButton}>
          <Ionicons name='arrow-back' size={24} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.logoText}>
        Dev
        <Text style={{ color: colors.green }}>App</Text>
      </Text>

      <Text style={styles.slogan}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    backgroundColor: colors.zinc,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  slogan: {
    fontSize: 34,
    color: colors.white,
    marginBottom: 34,
  },
  goBackButton: {
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});