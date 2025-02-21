import { Page } from '@/components';
import { ActivityIndicator } from 'react-native';
import colors from '@/constants/colors';

export default function AppLoading() {
  return (
    <Page
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size="large" color={colors.green} />
    </Page>
  );
};