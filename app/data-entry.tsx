import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Typography } from '@/constants/Typography';
import { useApp } from '@/context/AppContext';

type SoundEntry = {
  id: string;
  actionKey: string;
  locationKey: string;
  predictedDb: string;
  measuredDb: string;
  status: 'required' | 'completed';
};

const getLocations = (t: any) => [
  { id: '1', name: t.classroom },
  { id: '2', name: t.hallway },
  { id: '3', name: t.playground },
  { id: '4', name: t.library },
];

const resetEntries = (): SoundEntry[] => [
  { id: '1', actionKey: 'dropBook', locationKey: 'classroom', predictedDb: '', measuredDb: '', status: 'required' as const },
  { id: '2', actionKey: 'talk', locationKey: 'classroom', predictedDb: '', measuredDb: '', status: 'required' as const },
  { id: '3', actionKey: 'walk', locationKey: 'hallway', predictedDb: '', measuredDb: '', status: 'required' as const },
  { id: '4', actionKey: 'stamp', locationKey: 'classroom', predictedDb: '', measuredDb: '', status: 'required' as const },
];

export default function DataEntryScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = Colors[colorScheme ?? 'light'];
  const { t, soundEntries, setSoundEntries } = useApp();

  useEffect(() => {
    if (soundEntries.length === 0) {
      setSoundEntries(resetEntries());
    }
  }, []);

  const handleResetActivity = () => {
    setSoundEntries(resetEntries());
  };

  const getSoundActions = () => [
    { id: '1', nameKey: 'dropBook', name: t.dropBook, icon: 'book' },
    { id: '2', nameKey: 'talk', name: t.talk, icon: 'comments' },
    { id: '3', nameKey: 'walk', name: t.walk, icon: 'male' },
    { id: '4', nameKey: 'stamp', name: t.stamp, icon: 'hand-rock-o' },
  ];

  const isValidDecibel = (value: string): boolean => {
    if (!value) return true;
    const num = parseFloat(value);
    return !isNaN(num) && num >= 0 && num <= 140;
  };

  const handleDbInput = (id: string, field: 'predictedDb' | 'measuredDb', value: string) => {
    const filtered = value.replace(/[^0-9.]/g, '');
    const parts = filtered.split('.');
    if (parts.length > 2) return;
    if (parts[1] && parts[1].length > 1) return;
    
    setSoundEntries((prev: SoundEntry[]) => prev.map((entry: SoundEntry) => 
      entry.id === id ? { ...entry, [field]: filtered } : entry
    ));
  };

  const canMarkComplete = (entry: SoundEntry): boolean => {
    return entry.predictedDb.trim() !== '' && 
           entry.measuredDb.trim() !== '' && 
           isValidDecibel(entry.predictedDb) && 
           isValidDecibel(entry.measuredDb);
  };

  const handleToggleComplete = (id: string) => {
    setSoundEntries((prev: SoundEntry[]) => prev.map((entry: SoundEntry) => {
      if (entry.id !== id) return entry;
      if (entry.status === 'completed') {
        return { ...entry, status: 'required' };
      }
      if (canMarkComplete(entry)) {
        return { ...entry, status: 'completed' };
      }
      return entry;
    }));
  };

  const getStatusColor = (db: number) => {
    if (db < 85) return colors.primary;
    if (db <= 100) return '#f59e0b';
    return colors.error;
  };

  const completedCount = soundEntries.filter(e => e.status === 'completed').length;
  const allCompleted = completedCount === soundEntries.length;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={20} color={colors.primary} />
          </Pressable>
          <View style={styles.headerContent}>
            <Text style={[Typography.headlineLG, { color: colors.text }]}>
              {t.dataCollection}
            </Text>
            <View style={[styles.badge, { backgroundColor: colors.primaryContainer }]}>
              <Text style={[Typography.labelCaps, { color: colors.onPrimaryContainer }]}>
                {t.phase02}
              </Text>
            </View>
          </View>
          <Pressable 
            style={[styles.resetButton, { borderColor: colors.outlineVariant }]}
            onPress={handleResetActivity}
          >
            <FontAwesome name="refresh" size={16} color={colors.textSecondary} />
            <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginLeft: 8 }]}>
              {t.newActivity}
            </Text>
          </Pressable>
        </View>

        <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginBottom: 16 }]}>
          {t.recordMeasurements}
        </Text>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.primaryContainer }]}>
            <Text style={[Typography.display, { color: colors.onPrimaryContainer }]}>{completedCount}</Text>
            <Text style={[Typography.labelCaps, { color: colors.onPrimaryContainer }]}>{t.completed}</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.secondaryContainer }]}>
            <Text style={[Typography.display, { color: colors.onSecondaryContainer }]}>{soundEntries.length}</Text>
            <Text style={[Typography.labelCaps, { color: colors.onSecondaryContainer }]}>{t.total}</Text>
          </View>
        </View>

        <View style={styles.section}>
          {getSoundActions().map((action) => {
            const entry = soundEntries.find(e => e.actionKey === action.nameKey);
            if (!entry) return null;
            
            const measuredNum = parseFloat(entry.measuredDb);
            const statusColor = entry.measuredDb ? getStatusColor(measuredNum) : colors.outlineVariant;
            const isComplete = entry.status === 'completed';
            const isReady = canMarkComplete(entry);

            return (
              <View 
                key={action.id} 
                style={[styles.soundCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant, opacity: isComplete ? 0.7 : 1 }]}
              >
                <View style={styles.soundHeader}>
                  <View style={[styles.soundIcon, { backgroundColor: isComplete ? colors.primaryContainer : colors.surfaceContainerHigh }]}>
                    <FontAwesome name={action.icon as any} size={20} color={isComplete ? colors.onPrimaryContainer : colors.textSecondary} />
                  </View>
                  <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600', flex: 1 }]}>
                    {action.name}
                  </Text>
                  <View style={[styles.statusBadge, { 
                    backgroundColor: isComplete ? colors.primaryContainer : colors.surfaceContainerHigh 
                  }]}>
                    <Text style={[Typography.labelCaps, { 
                      color: isComplete ? colors.onPrimaryContainer : colors.textSecondary 
                    }]}>
                      {isComplete ? t.logged : t.required}
                    </Text>
                  </View>
                </View>

                <View style={styles.soundInputs}>
                  <View style={styles.inputGroup}>
                    <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginBottom: 4 }]}>
                      {t.location}
                    </Text>
                    <View style={[styles.selectContainer, { backgroundColor: colors.surfaceContainer, borderColor: colors.outlineVariant }]}>
                      <Text style={[Typography.bodyMD, { color: colors.text }]}>{t[entry.locationKey as keyof typeof t]}</Text>
                      <FontAwesome name="chevron-down" size={14} color={colors.textSecondary} />
                    </View>
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginBottom: 4 }]}>
                      {t.predictionDb}
                    </Text>
                    <TextInput
                      style={[
                        styles.dbInput, 
                        { 
                          backgroundColor: colors.surfaceContainer, 
                          borderColor: entry.predictedDb && !isValidDecibel(entry.predictedDb) ? colors.error : colors.outlineVariant,
                          color: colors.text,
                        }
                      ]}
                      value={entry.predictedDb}
                      onChangeText={(value) => handleDbInput(entry.id, 'predictedDb', value)}
                      placeholder="0.0"
                      placeholderTextColor={colors.textSecondary}
                      keyboardType="decimal-pad"
                      maxLength={5}
                      editable={!isComplete}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginBottom: 4 }]}>
                      {t.measuredDb}
                    </Text>
                    <View style={styles.measuredInputContainer}>
                      <TextInput
                        style={[
                          styles.dbInput,
                          styles.measuredInput,
                          { 
                            backgroundColor: colors.surfaceContainer, 
                            borderColor: statusColor,
                            color: colors.text,
                          }
                        ]}
                        value={entry.measuredDb}
                        onChangeText={(value) => handleDbInput(entry.id, 'measuredDb', value)}
                        placeholder="0.0"
                        placeholderTextColor={colors.textSecondary}
                        keyboardType="decimal-pad"
                        maxLength={5}
                        editable={!isComplete}
                      />
                      <Pressable 
                        style={[styles.toggleButton, { 
                          backgroundColor: isComplete ? colors.error : (isReady ? colors.primary : colors.outlineVariant)
                        }]}
                        onPress={() => handleToggleComplete(entry.id)}
                        disabled={!isReady && !isComplete}
                      >
                        <FontAwesome 
                          name={isComplete ? 'times' : (isReady ? 'check' : 'lock')} 
                          size={14} 
                          color={colors.onPrimary} 
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {allCompleted && (
          <Pressable
            style={({ pressed }) => [
              styles.continueButton,
              { backgroundColor: colors.primary },
              pressed && { opacity: 0.8 },
            ]}
            onPress={() => router.push('/experiment-log')}
          >
            <Text style={[Typography.bodyMD, { color: colors.onPrimary, fontWeight: '600' }]}>
              {t.continueExperimentLog}
            </Text>
            <FontAwesome name="arrow-right" size={16} color={colors.onPrimary} />
          </Pressable>
        )}

        {!allCompleted && (
          <View style={[styles.warningBanner, { backgroundColor: colors.tertiaryContainer }]}>
            <FontAwesome name="info-circle" size={18} color={colors.onTertiaryContainer} />
            <Text style={[Typography.bodyMD, { color: colors.onTertiaryContainer, marginLeft: 8 }]}>
              {t.fillBothValues}
            </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
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
  soundCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  soundHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  soundIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  soundInputs: {
    flexDirection: 'row',
    gap: 8,
  },
  inputGroup: {
    flex: 1,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  dbInput: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  measuredInputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  measuredInput: {
    flex: 1,
  },
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  warningBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 8,
  },
});