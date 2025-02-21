import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Link, LinkProps } from 'expo-router';
import colors from '@/src/constants/colors';

type TLinkButtonProps = LinkProps & {
  title: string;
  subtitle?: string;
};

export function LinkButton({ title, subtitle, href, style, ...rest }: TLinkButtonProps) {
  return (
    <Link href={href} style={[styles.link, style]} {...rest}>
      <Text>
        {title}
        {subtitle && <Text style={{ color: colors.green }}> {subtitle}</Text>}
      </Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    marginTop: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});