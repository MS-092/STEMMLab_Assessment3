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

interface DecibelLevel {
  range: string;
  labelKey: 'safe' | 'risk' | 'dangerous';
  examples: string;
  color: string;
}

const decibelTable: DecibelLevel[] = [
  { range: '0-30', labelKey: 'safe', examples: 'Whisper, rustling leaves', color: '#006b31' },
  { range: '31-50', labelKey: 'safe', examples: 'Library, quiet office', color: '#006b31' },
  { range: '51-70', labelKey: 'safe', examples: 'Normal conversation, dishwasher', color: '#006b31' },
  { range: '71-85', labelKey: 'risk', examples: 'Heavy traffic, vacuum cleaner', color: '#f59e0b' },
  { range: '86-100', labelKey: 'risk', examples: 'Motorcycle, lawn mower', color: '#f59e0b' },
  { range: '101-140', labelKey: 'dangerous', examples: 'Rock concert, jet engine', color: '#ba1a1a' },
];

interface SoundAction {
  id: string;
  nameKey: 'dropBook' | 'talk' | 'walk' | 'stamp';
  icon: string;
  expectedRange: string;
}

const soundActions: SoundAction[] = [
  { id: '1', nameKey: 'dropBook', icon: 'book', expectedRange: '50-70 dB' },
  { id: '2', nameKey: 'talk', icon: 'comments', expectedRange: '60-85 dB' },
  { id: '3', nameKey: 'walk', icon: 'male', expectedRange: '50-75 dB' },
  { id: '4', nameKey: 'stamp', icon: 'hand-rock-o', expectedRange: '70-95 dB' },
];

export default function InstructionsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = Colors[colorScheme ?? 'light'];
  const { t } = useApp();

  const getLabelColor = (labelKey: string): string => {
    if (labelKey === 'safe') return '#006b31';
    if (labelKey === 'risk') return '#f59e0b';
    return '#ba1a1a';
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={20} color={colors.primary} />
          </Pressable>
          <View style={styles.headerContent}>
            <Text style={[Typography.headlineLG, { color: colors.text }]}>
              {t.activityInstructions}
            </Text>
            <View style={[styles.badge, { backgroundColor: colors.primaryContainer }]}>
              <Text style={[Typography.labelCaps, { color: colors.onPrimaryContainer }]}>
                {t.physics.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.activityInfo, { backgroundColor: colors.surfaceContainerLow }]}>
          <Text style={[Typography.bodyMD, { color: colors.text }]}>
            {t.activityDescription}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[Typography.headlineMD, { color: colors.text, marginBottom: 16 }]}>
            {t.soundActionsToTest}
          </Text>

          {soundActions.map((action) => (
            <View 
              key={action.id} 
              style={[styles.actionCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}
            >
              <View style={styles.actionRow}>
                <View style={[styles.actionIcon, { backgroundColor: colors.primaryContainer }]}>
                  <FontAwesome name={action.icon as any} size={20} color={colors.onPrimaryContainer} />
                </View>
                <View style={styles.actionInfo}>
                  <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600' }]}>
                    {t[action.nameKey]}
                  </Text>
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                    {t.expectedRange}: {action.expectedRange}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[Typography.headlineMD, { color: colors.text, marginBottom: 16 }]}>
            {t.decibelReferenceTable}
          </Text>

          <View style={[styles.referenceTable, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
            <View style={[styles.tableHeader, { backgroundColor: colors.surfaceContainerLow }]}>
              <Text style={[Typography.labelCaps, { color: colors.text, flex: 1 }]}>{t.dbRange}</Text>
              <Text style={[Typography.labelCaps, { color: colors.text, flex: 1 }]}>{t.level}</Text>
              <Text style={[Typography.labelCaps, { color: colors.text, flex: 2 }]}>{t.examples}</Text>
            </View>
            {decibelTable.map((item, index) => (
              <View
                key={item.range}
                style={[
                  styles.tableRow,
                  index % 2 === 1 && { backgroundColor: colors.surfaceContainerLow },
                ]}
              >
                <Text style={[Typography.bodyMD, { color: colors.text, flex: 1, fontWeight: '600' }]}>
                  {item.range}
                </Text>
                <View style={[styles.levelBadge, { backgroundColor: item.color + '20' }]}>
                  <Text style={[Typography.labelCaps, { color: item.color }]}>
                    {t[item.labelKey]}
                  </Text>
                </View>
                <Text style={[Typography.bodyMD, { color: colors.textSecondary, flex: 2 }]}>
                  {item.examples}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[Typography.headlineMD, { color: colors.text, marginBottom: 16 }]}>
            {t.howToRecord}
          </Text>
          
          <View style={[styles.stepCard, { backgroundColor: colors.surfaceContainerLow }]}>
            <View style={styles.stepRow}>
              <Text style={[Typography.headlineMD, { color: colors.primary }]}>1</Text>
              <View style={styles.stepContent}>
                <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600' }]}>
                  {t.makePrediction}
                </Text>
                <Text style={[Typography.bodyMD, { color: colors.textSecondary }]}>
                  {t.guessDecibel}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.stepCard, { backgroundColor: colors.surfaceContainerLow }]}>
            <View style={styles.stepRow}>
              <Text style={[Typography.headlineMD, { color: colors.primary }]}>2</Text>
              <View style={styles.stepContent}>
                <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600' }]}>
                  {t.makeSound}
                </Text>
                <Text style={[Typography.bodyMD, { color: colors.textSecondary }]}>
                  {t.dropBookTalkWalkStamp}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.stepCard, { backgroundColor: colors.surfaceContainerLow }]}>
            <View style={styles.stepRow}>
              <Text style={[Typography.headlineMD, { color: colors.primary }]}>3</Text>
              <View style={styles.stepContent}>
                <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600' }]}>
                  {t.measureRecord}
                </Text>
                <Text style={[Typography.bodyMD, { color: colors.textSecondary }]}>
                  {t.useDecibelMeter}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.stepCard, { backgroundColor: colors.surfaceContainerLow }]}>
            <View style={styles.stepRow}>
              <Text style={[Typography.headlineMD, { color: colors.primary }]}>4</Text>
              <View style={styles.stepContent}>
                <Text style={[Typography.bodyMD, { color: colors.text, fontWeight: '600' }]}>
                  {t.saveViewResults}
                </Text>
                <Text style={[Typography.bodyMD, { color: colors.textSecondary }]}>
                  {t.markComplete}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.startButton,
            { backgroundColor: colors.primary },
            pressed && { opacity: 0.8 },
          ]}
          onPress={() => router.push('/data-entry')}
        >
          <Text style={[Typography.bodyMD, { color: colors.onPrimary, fontWeight: '600' }]}>
            {t.startActivity}
          </Text>
          <FontAwesome name="arrow-right" size={16} color={colors.onPrimary} />
        </Pressable>
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
    marginBottom: 16,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
  },
  activityInfo: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  actionCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionInfo: {
    flex: 1,
  },
  referenceTable: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flex: 1,
    marginRight: 8,
  },
  stepCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContent: {
    flex: 1,
    marginLeft: 12,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
});