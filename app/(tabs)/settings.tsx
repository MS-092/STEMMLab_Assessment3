import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  SafeAreaView,
  Alert,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Typography } from '@/constants/Typography';
import { useApp } from '@/context/AppContext';
import { Language } from '@/constants/i18n';
import Header from '@/components/Header';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { 
    t, 
    language, 
    setLanguage, 
  } = useApp();

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
  };

  const handleResetData = () => {
    Alert.alert(
      t.resetData,
      t.resetDataConfirm,
      [
        { text: t.cancel, style: 'cancel' },
        { text: t.resetData, style: 'destructive', onPress: () => Alert.alert(t.resetData, t.dataCleared) },
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header showSearch={false} showProfile={true} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={[Typography.headlineLG, { color: colors.text }]}>
            {t.settingsTitle}
          </Text>
          <Text style={[Typography.bodyMD, { color: colors.textSecondary, marginTop: 4 }]}>
            {t.managePreferences}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
            <View style={styles.sectionHeader}>
              <Text style={[Typography.headlineMD, { color: colors.text }]}>
                {t.accountInfo}
              </Text>
              <Text style={[Typography.bodyMD, { color: colors.textSecondary }]}>
                {t.scientificCredentials}
              </Text>
            </View>
            <Pressable 
              style={[styles.editButton, { borderColor: colors.primary }]}
              onPress={() => Alert.alert(t.comingSoon, t.profileEditing)}
            >
              <Text style={[Typography.labelCaps, { color: colors.primary }]}>{t.edit}</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
            <View style={styles.sectionHeaderNoBorder}>
              <Text style={[Typography.headlineMD, { color: colors.text }]}>
                {t.language}
              </Text>
              <Text style={[Typography.bodyMD, { color: colors.textSecondary }]}>
                {t.languageDesc}
              </Text>
            </View>
            
            <Pressable
              style={[styles.languageOption, language === 'en' && { backgroundColor: colors.primaryContainer }]}
              onPress={() => handleLanguageSelect('en')}
            >
              <View style={styles.languageContent}>
                <View style={[styles.languageFlag, { backgroundColor: colors.surfaceContainerHigh }]}>
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>EN</Text>
                </View>
                <View>
                  <Text style={[Typography.bodyMD, { color: colors.text }]}>
                    {t.english}
                  </Text>
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                    {t.ukUsStandard}
                  </Text>
                </View>
              </View>
              {language === 'en' && (
                <View style={[styles.checkCircle, { backgroundColor: colors.primary }]}>
                  <FontAwesome name="check" size={12} color={colors.onPrimary} />
                </View>
              )}
            </Pressable>
            
            <View style={[styles.divider, { backgroundColor: colors.outlineVariant }]} />
            
            <Pressable
              style={[styles.languageOption, language === 'id' && { backgroundColor: colors.primaryContainer }]}
              onPress={() => handleLanguageSelect('id')}
            >
              <View style={styles.languageContent}>
                <View style={[styles.languageFlag, { backgroundColor: colors.surfaceContainerHigh }]}>
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>ID</Text>
                </View>
                <View>
                  <Text style={[Typography.bodyMD, { color: colors.text }]}>
                    {t.indonesian}
                  </Text>
                  <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
                    {t.regionalStandard}
                  </Text>
                </View>
              </View>
              {language === 'id' && (
                <View style={[styles.checkCircle, { backgroundColor: colors.primary }]}>
                  <FontAwesome name="check" size={12} color={colors.onPrimary} />
                </View>
              )}
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Pressable
            style={[styles.dangerButton, { borderColor: colors.error }]}
            onPress={handleResetData}
          >
            <FontAwesome name="sign-out" size={18} color={colors.error} />
            <Text style={[Typography.labelCaps, { color: colors.error, marginLeft: 8 }]}>
              {t.signOutSession}
            </Text>
          </Pressable>
        </View>

        <View style={[styles.appInfo, { backgroundColor: colors.surfaceContainerLow }]}>
          <Text style={[Typography.labelCaps, { color: colors.textSecondary }]}>
            {t.stemmLabSoundHunter}
          </Text>
          <Text style={[Typography.labelCaps, { color: colors.textSecondary, marginTop: 4 }]}>
            {t.version} 1.0.0
          </Text>
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
  },
  section: {
    marginBottom: 20,
  },
  sectionCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  sectionHeaderNoBorder: {
    padding: 16,
    paddingBottom: 8,
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageFlag: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    marginLeft: 16,
  },
  dangerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  appInfo: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
});