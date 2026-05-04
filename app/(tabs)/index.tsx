import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Typography } from '@/constants/Typography';
import { useApp } from '@/context/AppContext';
import Header from '@/components/Header';

export default function ActivityLibraryScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = Colors[colorScheme ?? 'light'];
  const { t } = useApp();

  const handleActivityPress = () => {
    router.push('/instructions');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header showSearch={true} showProfile={true} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={[Typography.headlineLG, { color: colors.text }]}>
            {t.activityLibrary}
          </Text>
          <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 4, fontStyle: 'italic' }]}>
            {t.curatedModules}
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.activityCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.outlineVariant,
              opacity: pressed ? 0.9 : 1,
            },
          ]}
          onPress={handleActivityPress}
        >
          <View style={[styles.cardImageContainer, { backgroundColor: colors.surfaceContainer }]}>
            <View style={[styles.iconContainer, { backgroundColor: colors.primaryContainer }]}>
              <FontAwesome name="volume-up" size={32} color={colors.onPrimaryContainer} />
            </View>
            <View style={[styles.featuredBadge, { backgroundColor: colors.primary }]}>
              <Text style={[Typography.labelCaps, { color: colors.onPrimary, fontSize: 10 }]}>
                {t.featured}
              </Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.categoryRow}>
              <View style={[styles.categoryChip, { backgroundColor: colors.primaryContainer }]}>
                <Text style={[Typography.labelCaps, { color: colors.onPrimaryContainer }]}>
                  {t.physics}
                </Text>
              </View>
            </View>
            <Text style={[Typography.headlineMD, { color: colors.text, marginTop: 8 }]}>
              {t.soundHunter}
            </Text>
            <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 4, fontSize: 14 }]} numberOfLines={2}>
              {t.soundHunterDesc}
            </Text>
            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <FontAwesome name="clock-o" size={12} color={colors.textSecondary} />
                <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginLeft: 4 }]}>
                  30 {t.minutes}
                </Text>
              </View>
              <View style={styles.metaItem}>
                <FontAwesome name="bar-chart" size={12} color={colors.textSecondary} />
                <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginLeft: 4 }]}>
                  {t.intermediate}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>

        <View style={[styles.infoSection, { backgroundColor: colors.surfaceContainerLow }]}>
          <FontAwesome name="info-circle" size={20} color={colors.primary} />
          <View style={styles.infoContent}>
            <Text style={[Typography.bodyMD, { color: colors.text }]}>
              {t.stemmLabInfo}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 16,
  },
  activityCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 16,
  },
  cardImageContainer: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  cardContent: {
    padding: 16,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoSection: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'flex-start',
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
});