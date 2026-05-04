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

type SavedEntry = {
  id: string;
  date: string;
  sound: string;
  predictedDb: string;
  measuredDb: string;
  location: string;
};

export default function JournalScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = Colors[colorScheme ?? 'light'];
  const { t, soundEntries } = useApp();

  const completedEntries = soundEntries.filter(e => e.status === 'completed' && e.measuredDb);

  const getBarColor = (db: number): string => {
    if (db < 85) return colors.primary;
    if (db <= 100) return '#f59e0b';
    return colors.error;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header showSearch={false} showProfile={true} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={[Typography.headlineLG, { color: colors.text }]}>
            {t.journal}
          </Text>
          <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 4 }]}>
            {t.settingsDesc}
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.primaryContainer }]}>
            <Text style={[Typography.display, { color: colors.onPrimaryContainer }]}>{completedEntries.length}</Text>
            <Text style={[Typography.labelCaps, { color: colors.onPrimaryContainer }]}>{t.completed}</Text>
          </View>
          <Pressable 
            style={[styles.statCard, { backgroundColor: colors.secondaryContainer }]}
            onPress={() => router.push('/instructions')}
          >
            <FontAwesome name="plus" size={24} color={colors.onSecondaryContainer} />
            <Text style={[Typography.labelCaps, { color: colors.onSecondaryContainer, marginTop: 4 }]}>{t.startActivity}</Text>
          </Pressable>
        </View>

        {completedEntries.length === 0 ? (
          <View style={[styles.emptyState, { backgroundColor: colors.surfaceContainerLow }]}>
            <FontAwesome name="book" size={48} color={colors.textSecondary} />
            <Text style={[Typography.headlineMD, { color: colors.text, marginTop: 16 }]}>
              {t.noSavedWorks}
            </Text>
            <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 8, textAlign: 'center' }]}>
              {t.startActivityFirstEntry}
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.startButton,
                { backgroundColor: colors.primary },
                pressed && { opacity: 0.8 },
              ]}
onPress={() => router.push('/instructions')}
            >
              <Text style={[Typography.bodyMD, { color: colors.onPrimary, fontWeight: '600' }]}>
                {t.startActivity}
              </Text>
              <FontAwesome name="arrow-right" size={16} color={colors.onPrimary} />
            </Pressable>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={[Typography.headlineMD, { color: colors.text, marginBottom: 16 }]}>
              {t.observations}
            </Text>

            {completedEntries.map((entry) => {
              const measuredNum = parseFloat(entry.measuredDb);
              const statusColor = getBarColor(measuredNum);
              
              return (
                <View 
                  key={entry.id} 
                  style={[styles.savedCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}
                >
                  <View style={styles.savedHeader}>
                    <View style={[styles.savedIcon, { backgroundColor: colors.primaryContainer }]}>
                      <FontAwesome name="volume-up" size={20} color={colors.onPrimaryContainer} />
                    </View>
                    <View style={styles.savedInfo}>
                      <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600' }]}>
                        {t[entry.actionKey as keyof typeof t]}
                      </Text>
                      <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                        {t[entry.locationKey as keyof typeof t]}
                      </Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: colors.primaryContainer }]}>
                      <Text style={[Typography.labelCaps, { color: colors.onPrimaryContainer }]}>
                        {t.logged}
                      </Text>
                    </View>
                  </View>
                  
                  <View style={styles.savedDataRow}>
                    <View style={styles.savedDataItem}>
                      <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                        {t.predicted}
                      </Text>
                      <Text style={[Typography.headlineMD, { color: colors.text }]}>
                        {entry.predictedDb} dB
                      </Text>
                    </View>
                    <View style={[styles.savedDataItem, { borderLeftWidth: 1, borderLeftColor: colors.outlineVariant }]}>
                      <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                        {t.measured}
                      </Text>
                      <Text style={[Typography.headlineMD, { color: statusColor }]}>
                        {entry.measuredDb} dB
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
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
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  section: {
    marginBottom: 24,
  },
  emptyState: {
    padding: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  savedCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  savedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  savedIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  savedInfo: {
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  savedDataRow: {
    flexDirection: 'row',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  savedDataItem: {
    flex: 1,
    paddingHorizontal: 8,
  },
});