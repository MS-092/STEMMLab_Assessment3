import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { BarChart, YAxis, XAxis, ResponsiveContainer, Cell, Bar as RechartsBar } from 'recharts';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Typography } from '@/constants/Typography';
import { useApp } from '@/context/AppContext';

const getBarColor = (db: number): string => {
  if (db < 85) return '#006b31';
  if (db <= 100) return '#f59e0b';
  return '#ba1a1a';
};

const getStatusIcon = (predicted: string, measured: string): { icon: string; color: string } => {
  const pred = parseFloat(predicted);
  const meas = parseFloat(measured);
  if (isNaN(pred) || isNaN(meas)) return { icon: 'minus', color: '#f59e0b' };
  const diff = Math.abs(pred - meas);
  if (diff <= 10) return { icon: 'check', color: '#006b31' };
  if (diff <= 20) return { icon: 'minus', color: '#f59e0b' };
  return { icon: 'times', color: '#ba1a1a' };
};

const screenWidth = Dimensions.get('window').width;

export default function ExperimentLogScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = Colors[colorScheme ?? 'light'];
  const { t, soundEntries } = useApp();

  const completedEntries = soundEntries.filter(e => e.status === 'completed' && e.measuredDb);

  const chartData = completedEntries.map((entry) => {
    const translatedAction = t[entry.actionKey as keyof typeof t] as string;
    return {
      name: translatedAction.length > 8 ? translatedAction.substring(0, 8) + '...' : translatedAction,
      fullName: translatedAction,
      measured: parseFloat(entry.measuredDb) || 0,
      predicted: parseFloat(entry.predictedDb) || 0,
      color: getBarColor(parseFloat(entry.measuredDb) || 0),
    };
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={20} color={colors.primary} />
          </Pressable>
          <View style={styles.headerContent}>
            <Text style={[Typography.headlineLG, { color: colors.text }]}>
              {t.experimentLog}
            </Text>
            <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 4 }]}>
              {t.experimentLogTitle}
            </Text>
          </View>
        </View>

        <View style={styles.dateSection}>
          <FontAwesome name="calendar" size={18} color={colors.primary} />
          <Text style={[Typography.bodyMD, { color: colors.text, marginLeft: 8 }]}>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[Typography.headlineMD, { color: colors.text, marginBottom: 16 }]}>
            {t.decibelIntensity}
          </Text>

          {chartData.length === 0 ? (
            <View style={[styles.emptyState, { backgroundColor: colors.surfaceContainerLow }]}>
              <FontAwesome name="bar-chart" size={40} color={colors.textSecondary} />
              <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 12, textAlign: 'center' }]}>
                {t.noDataYet}
              </Text>
            </View>
          ) : (
            <View style={[styles.chartCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
              <ResponsiveContainer width={screenWidth - 80} height={200}>
                <BarChart data={chartData} barCategoryGap="20%">
                  <YAxis 
                    domain={[0, 140]} 
                    tickFormatter={(value) => `${value}`}
                    tick={{ fontSize: 10, fill: colors.textSecondary }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 10, fill: colors.textSecondary }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <RechartsBar dataKey="measured" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsBar>
                </BarChart>
              </ResponsiveContainer>

              <View style={styles.chartLegend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: colors.primary }]} />
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                    {t.safe} (&lt; 85 dB)
                  </Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: '#f59e0b' }]} />
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                    {t.risk} (86-100 dB)
                  </Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: colors.error }]} />
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                    {t.dangerous} (&gt; 100 dB)
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={[Typography.headlineMD, { color: colors.text, marginBottom: 16 }]}>
            {t.predictionVsMeasured}
          </Text>

          {chartData.length === 0 ? (
            <View style={[styles.emptyState, { backgroundColor: colors.surfaceContainerLow }]}>
              <Text style={[Typography.bodyMD, { color: colors.textSecondary, textAlign: 'center' }]}>
                {t.completePredictions}
              </Text>
            </View>
          ) : (
            <View style={[styles.tableCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
              <View style={[styles.tableHeader, { backgroundColor: colors.surfaceContainerLow }]}>
                <Text style={[Typography.labelCaps, { color: colors.text, flex: 1 }]}>{t.action}</Text>
                <Text style={[Typography.labelCaps, { color: colors.text, flex: 1 }]}>{t.predicted}</Text>
                <Text style={[Typography.labelCaps, { color: colors.text, flex: 1 }]}>{t.measured}</Text>
                <Text style={[Typography.labelCaps, { color: colors.text, flex: 0.5, textAlign: 'center' }]}>{t.status}</Text>
              </View>
              {chartData.map((data, index) => {
                const status = getStatusIcon(data.predicted.toString(), data.measured.toString());
                const measuredNum = data.measured;
                return (
                  <View 
                    key={index} 
                    style={[
                      styles.tableRow,
                      index % 2 === 1 && { backgroundColor: colors.surfaceContainerLow },
                    ]}
                  >
                    <Text style={[Typography.bodyMD, { color: colors.text, flex: 1 }]}>{data.fullName}</Text>
                    <Text style={[Typography.bodyMD, { color: colors.textSecondary, flex: 1 }]}>{data.predicted}dB</Text>
                    <Text style={[Typography.bodyMD, { color: getBarColor(measuredNum), fontWeight: '600', flex: 1 }]}>
                      {data.measured}dB
                    </Text>
                    <View style={{ flex: 0.5, alignItems: 'center' }}>
                      <FontAwesome name={status.icon as any} size={16} color={status.color} />
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.completeButton,
            { backgroundColor: colors.primary },
            pressed && { opacity: 0.8 },
          ]}
          onPress={() => router.push('/(tabs)/journal')}
        >
          <FontAwesome name="check" size={20} color={colors.onPrimary} />
          <Text style={[Typography.bodyMD, { color: colors.onPrimary, fontWeight: '600', marginLeft: 8 }]}>
            {t.completeActivity}
          </Text>
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
  dateSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  emptyState: {
    padding: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  chartCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  tableCard: {
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
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
});