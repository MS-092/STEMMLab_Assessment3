# STEMM Lab Sound Hunter

An educational mobile application for students to explore Science, Technology, Engineering, Mathematics, and Medicine (STEMM) through hands-on sound experiments and activities.

## Features

- **Activity Library** - Choose from curated STEMM activities
- **Sound Hunter** - Explore and record different sounds in your environment
- **Live Recording** - Record and document sounds using your device's microphone
- **Experiment Log** - Track observations and reflections
- **Predictions vs Measurements** - Compare predicted vs actual decibel levels
- **Bilingual Support** - Available in English and Indonesian (Bahasa Indonesia)

## Tech Stack

- **Framework**: Expo SDK 54 (React Native)
- **Navigation**: Expo Router
- **Charts**: Recharts
- **Language**: TypeScript
- **Icons**: @expo/vector-icons (FontAwesome)

## Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- For iOS: Xcode
- For Android: Android Studio

## Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## Project Structure

```
STEMMLabSoundHunter/
├── app/                    # Expo Router screens
│   ├── (tabs)/           # Tab-based navigation
│   │   ├── _layout.tsx    # Tab layout
│   │   ├── index.tsx      # Home/Library screen
│   │   ├── journal.tsx    # Journal screen
│   │   ├── activity.tsx   # Activity screen
│   │   └── settings.tsx   # Settings screen
│   └── activity/          # Activity detail screens
├── components/            # Reusable UI components
├── constants/             # App constants (colors, i18n, typography)
├── context/               # React Context providers
└── types/                 # TypeScript type definitions
```

## Language Support

The app supports:
- English (en)
- Indonesian (id)

Switch languages in Settings > Language.

## Version

1.0.0