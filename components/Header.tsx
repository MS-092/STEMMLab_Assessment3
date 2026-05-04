import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useApp } from '@/context/AppContext';

interface HeaderProps {
  showBack?: boolean;
  showSearch?: boolean;
  showProfile?: boolean;
  title?: string;
  rightAction?: React.ReactNode;
}

export default function Header({ 
  showBack = false, 
  showSearch = true, 
  showProfile = true,
  rightAction 
}: HeaderProps) {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = Colors[colorScheme ?? 'light'];
  const { t } = useApp();

  return (
    <View style={[styles.container, { 
      backgroundColor: colors.surface, 
      borderBottomColor: colors.outlineVariant 
    }]}>
      <View style={styles.leftSection}>
        {showBack ? (
          <Pressable 
            style={styles.iconButton} 
            onPress={() => router.back()}
          >
            <FontAwesome name="arrow-left" size={20} color={colors.primary} />
          </Pressable>
        ) : null}
        <View style={styles.logoContainer}>
          <FontAwesome name="flask" size={22} color={colors.primary} />
          <Text style={[styles.logoText, { color: colors.primary }]}>
            {t.stemmLab}
          </Text>
        </View>
      </View>
      
      <View style={styles.rightSection}>
        {showSearch && !showBack ? (
          <Pressable style={styles.iconButton}>
            <FontAwesome name="search" size={18} color={colors.textSecondary} />
          </Pressable>
        ) : null}
        {rightAction}
        {showProfile && !showBack ? (
          <View style={[styles.avatar, { backgroundColor: colors.primaryContainer }]}>
            <FontAwesome name="user" size={14} color={colors.onPrimaryContainer} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
});