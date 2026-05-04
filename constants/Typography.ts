import { TextStyle } from 'react-native';

export const Typography: Record<string, TextStyle> = {
  display: {
    fontFamily: 'System',
    fontSize: 48,
    fontWeight: '600',
    lineHeight: 53,
  },
  headlineLG: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 38,
  },
  headlineMD: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 31,
  },
  bodyLG: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
  },
  bodyMD: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  labelCaps: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 12,
    letterSpacing: 0.1,
  },
};