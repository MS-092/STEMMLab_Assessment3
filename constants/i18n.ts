export type Language = 'en' | 'id';

export interface Translations {
  // Tab Names
  library: string;
  journal: string;
  activity: string;
  settings: string;

  // Activity Library
  activityLibrary: string;
  activityLibraryDesc: string;
  chooseActivity: string;

  // Activities
  soundHunter: string;
  soundHunterDesc: string;
  echoChamber: string;
  echoChamberDesc: string;
  frequencyExplorer: string;
  frequencyExplorerDesc: string;
  acousticMeasurement: string;
  acousticMeasurementDesc: string;

  // Categories
  physics: string;
  technology: string;
  mathematics: string;
  medicine: string;

  // Time
  minutes: string;

  // Info
  stemmLabInfo: string;

  // Navigation
  back: string;
  next: string;
  backToInstructions: string;
  submitToPortfolio: string;

  // Sound Actions
  dropBook: string;
  talk: string;
  walk: string;
  stamp: string;
  logged: string;
  required: string;
  location: string;
  predictionDb: string;
  measuredDb: string;

  // Data Collection
  dataCollection: string;
  phase02: string;

  // Instructions
  activityInstructions: string;
  instructionsTitle: string;
  referenceTable: string;

  // Steps
  prepareSpace: string;
  prepareSpaceDesc: string;
  openRecordingTool: string;
  openRecordingToolDesc: string;
  listenIdentify: string;
  listenIdentifyDesc: string;
  startRecording: string;
  startRecordingDesc: string;
  documentFindings: string;
  documentFindingsDesc: string;
  reviewReflect: string;
  reviewReflectDesc: string;

  // Categories Reference
  natural: string;
  naturalExamples: string;
  mechanical: string;
  mechanicalExamples: string;
  human: string;
  humanExamples: string;
  electronic: string;
  electronicExamples: string;

  // Pro Tip
  proTip: string;
  proTipText: string;

  // Start Button
  startActivity: string;

  // Live Recording
  liveRecording: string;
  liveRecordingDesc: string;
  readyToRecord: string;
  recording: string;
  quickNotes: string;
  addNotes: string;
  recordingLog: string;
  noRecordings: string;
  noRecordingsDesc: string;
  continueExperimentLog: string;
  saveRecording: string;
  addNote: string;

  // Sound Types
  ambient: string;

  // Experiment Log
  experimentLog: string;
  experimentLogTitle: string;
  observations: string;
  soundsRecorded: string;
  addNewObservation: string;
  sound: string;
  source: string;
  characteristics: string;
  reflection: string;
  whatDidYouLearn: string;
  reflectionQuestions: string;
  question1: string;
  question2: string;
  question3: string;
  completeActivity: string;
  addObservation: string;

  // Predictions
  predicted: string;
  measured: string;
  status: string;
  correct: string;
  incorrect: string;
  action: string;

  // Chart Labels
  decibelIntensity: string;
  safe: string;
  risk: string;
  dangerous: string;

  // Settings
  settingsTitle: string;
  settingsDesc: string;
  preferences: string;
  account: string;
  data: string;

  // Settings Items
  notifications: string;
  notificationsDesc: string;
  soundEffects: string;
  soundEffectsDesc: string;
  autoSave: string;
  autoSaveDesc: string;
  profile: string;
  profileDesc: string;
  dataStorage: string;
  dataStorageDesc: string;
  helpSupport: string;
  helpSupportDesc: string;
  resetData: string;
  resetDataConfirm: string;
  resetDataDesc: string;

  // Language
  language: string;
  languageDesc: string;
  english: string;
  indonesian: string;
  ukUsStandard: string;
  regionalStandard: string;

  // Theme
  darkMode: string;
  darkModeDesc: string;

  // App Info
  version: string;

  // Placeholders
  enterSound: string;
  enterSource: string;
  enterCharacteristics: string;
  enterReflection: string;
  addNotesPlaceholder: string;

  // Locations
  classroom: string;
  hallway: string;
  playground: string;

  // Step actions
  makePrediction: string;
  makeSound: string;
  measureRecord: string;
  saveViewResults: string;
  guessDecibel: string;
  dropBookTalkWalkStamp: string;
  useDecibelMeter: string;
  markComplete: string;

  // How to Record
  howToRecord: string;
  soundActionsToTest: string;
  decibelReferenceTable: string;
  expectedRange: string;

  // Hardcoded Texts
  curatedModules: string;
  featured: string;
  intermediate: string;
  recordMeasurements: string;
  completed: string;
  total: string;
  fillBothValues: string;
  managePreferences: string;
  accountInfo: string;
  scientificCredentials: string;
  edit: string;
  signOutSession: string;
  activityDescription: string;
  category: string;
  examples: string;
  predictionVsMeasured: string;

  // Additional hardcoded texts
  newActivity: string;
  noDataYet: string;
  completeJournalEntries: string;
  completePredictions: string;
  dbRange: string;
  level: string;
  cancel: string;
  dataCleared: string;
  comingSoon: string;
  profileEditing: string;
  noSavedWorks: string;
  startActivityFirstEntry: string;

  // App Names
  stemmLab: string;
  stemmLabSoundHunter: string;
  thisScreenDoesntExist: string;
  goToHomeScreen: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Tab Names
    library: 'Library',
    journal: 'Journal',
    activity: 'Activity',
    settings: 'Settings',

    // Activity Library
    activityLibrary: 'Activity Library',
    activityLibraryDesc: 'Choose an activity to begin your STEMM journey',
    chooseActivity: 'Choose an activity to begin your STEMM journey',

    // Activities
    soundHunter: 'Sound Hunter',
    soundHunterDesc: 'Explore and record different sounds in your environment',
    echoChamber: 'Echo Chamber',
    echoChamberDesc: 'Understand how sound travels and reflects',
    frequencyExplorer: 'Frequency Explorer',
    frequencyExplorerDesc: 'Discover the hidden frequencies in everyday sounds',
    acousticMeasurement: 'Acoustic Measurement',
    acousticMeasurementDesc: 'Learn to measure and analyze sound levels',

    // Categories
    physics: 'Physics',
    technology: 'Technology',
    mathematics: 'Mathematics',
    medicine: 'Medicine',

    // Time
    minutes: 'min',

    // Info
    stemmLabInfo: 'STEMM Lab helps students explore Science, Technology, Engineering, Mathematics, and Medicine through hands-on activities.',

    // Navigation
    back: 'Back',
    next: 'Next',
    backToInstructions: 'Back to Instructions',
    submitToPortfolio: 'Submit to Portfolio',

    // Sound Actions
    dropBook: 'Drop Book',
    talk: 'Talk',
    walk: 'Walk',
    stamp: 'Stamp',
    logged: 'LOGGED',
    required: 'REQUIRED',
    location: 'LOCATION',
    predictionDb: 'PREDICTION (dB)',
    measuredDb: 'MEASURED (dB)',

    // Data Collection
    dataCollection: 'Data Collection',
    phase02: 'PHASE 02',

    // Instructions
    activityInstructions: 'Sound Hunter',
    instructionsTitle: 'Instructions',
    referenceTable: 'Sound Categories Reference',

    // Steps
    prepareSpace: 'Prepare Your Space',
    prepareSpaceDesc: 'Find a quiet location where you can focus on capturing sounds without background noise interference.',
    openRecordingTool: 'Open the Recording Tool',
    openRecordingToolDesc: 'Navigate to the Live Recording tab and ensure your device microphone is enabled and working.',
    listenIdentify: 'Listen and Identify',
    listenIdentifyDesc: 'Spend 2-3 minutes listening to your environment. Try to identify at least 3 distinct sounds.',
    startRecording: 'Start Recording',
    startRecordingDesc: 'Tap the record button when you hear an interesting sound. Hold still and let the sound play for 10-15 seconds.',
    documentFindings: 'Document Your Findings',
    documentFindingsDesc: 'Add notes about each sound including: location, time, and any observations about the sound characteristics.',
    reviewReflect: 'Review and Reflect',
    reviewReflectDesc: 'Complete the Experiment Log to reflect on what you learned and any patterns you observed.',

    // Categories Reference
    natural: 'Natural',
    naturalExamples: 'Wind, Rain, Birds, Insects',
    mechanical: 'Mechanical',
    mechanicalExamples: 'Engine, Fan, Clock, Door',
    human: 'Human',
    humanExamples: 'Speech, Footsteps, Laughter',
    electronic: 'Electronic',
    electronicExamples: 'Phone, Television, Radio',

    // Pro Tip
    proTip: 'Pro Tip',
    proTipText: 'Try to find a location with diverse sound sources. Indoor and outdoor environments offer different acoustic experiences!',

    // Start Button
    startActivity: 'Start Activity',

    // Live Recording
    liveRecording: 'Live Recording',
    liveRecordingDesc: 'Record and document sounds in your environment',
    readyToRecord: 'Ready to Record',
    recording: 'Recording...',
    quickNotes: 'Quick Notes',
    addNotes: 'Add notes about the sound...',
    recordingLog: 'Recording Log',
    noRecordings: 'No recordings yet.',
    noRecordingsDesc: 'Tap the microphone to start recording.',
    continueExperimentLog: 'Continue to Experiment Log',
    saveRecording: 'Save Recording',
    addNote: 'Add Note',

    // Sound Types
    ambient: 'Ambient',

    // Experiment Log
    experimentLog: 'Experiment Log',
    experimentLogTitle: 'Sound Hunter Activity',
    observations: 'Observations',
    soundsRecorded: 'sounds recorded',
    addNewObservation: 'Add New Observation',
    sound: 'Sound',
    source: 'Source',
    characteristics: 'Characteristics',
    reflection: 'Reflection',
    whatDidYouLearn: 'WHAT DID YOU LEARN?',
    reflectionQuestions: 'Reflection Questions',
    question1: 'How do different environments produce different types of sounds?',
    question2: 'What patterns did you notice in the sounds you recorded?',
    question3: 'How could you use this knowledge in everyday life?',
    completeActivity: 'Complete Activity',
    addObservation: 'Add Observation',

    // Predictions
    predicted: 'Predicted',
    measured: 'Measured',
    status: 'Status',
    correct: 'Correct',
    incorrect: 'Incorrect',
    action: 'Action',

    // Chart Labels
    decibelIntensity: 'Measured Decibel Intensity',
    safe: 'Safe',
    risk: 'Risk',
    dangerous: 'Dangerous',

    // Settings
    settingsTitle: 'Settings',
    settingsDesc: 'Customize your STEMM Lab experience',
    preferences: 'PREFERENCES',
    account: 'ACCOUNT',
    data: 'DATA',

    // Settings Items
    notifications: 'Notifications',
    notificationsDesc: 'Receive reminders for activities and experiments',
    soundEffects: 'Sound Effects',
    soundEffectsDesc: 'Play sounds for interactions and feedback',
    autoSave: 'Auto-Save',
    autoSaveDesc: 'Automatically save your progress',
    profile: 'Profile',
    profileDesc: 'Manage your student profile',
    dataStorage: 'Data & Storage',
    dataStorageDesc: 'Manage your recorded data and storage',
    helpSupport: 'Help & Support',
    helpSupportDesc: 'Get help and contact support',
    resetData: 'Reset All Data',
    resetDataConfirm: 'Are you sure you want to reset all your data? This action cannot be undone.',
    resetDataDesc: 'Clear all saved experiments and recordings',

    // Language
    language: 'Language',
    languageDesc: 'Choose your preferred interface language',
    english: 'English',
    indonesian: 'Indonesian (Bahasa Indonesia)',
    ukUsStandard: 'UK/US STANDARD',
    regionalStandard: 'REGIONAL STANDARD',

    // Theme
    darkMode: 'Dark Laboratory Mode',
    darkModeDesc: 'Reduce eye strain during late-night study',

    // App Info
    version: 'Version',

    // Placeholders
    enterSound: 'e.g., Wind rustling',
    enterSource: 'e.g., Trees near the park',
    enterCharacteristics: 'Describe the sound properties...',
    enterReflection: 'Reflect on your observations and what you discovered about sound...',
    addNotesPlaceholder: 'Add notes about the sound...',

    // Locations
    classroom: 'Classroom',
    hallway: 'Hallway',
    playground: 'Playground',

    // Step actions
    makePrediction: 'Make a prediction',
    makeSound: 'Make the sound',
    measureRecord: 'Measure and record',
    saveViewResults: 'Save and view results',
    guessDecibel: 'Guess the decibel level before making the sound',
    dropBookTalkWalkStamp: 'Drop the book, talk, walk, or stamp',
    useDecibelMeter: 'Use a decibel meter to measure and log your data',
    markComplete: 'Mark as complete and view your experiment log',

    // How to Record
    howToRecord: 'How to Record',
    soundActionsToTest: 'Sound Actions to Test',
    decibelReferenceTable: 'Decibel Reference Table',
    expectedRange: 'Expected',

    // Hardcoded Texts
    curatedModules: 'Curated modules for the digital scientist.',
    featured: 'FEATURED',
    intermediate: 'INTERMEDIATE',
    recordMeasurements: 'Record your measurements for each action below.',
    completed: 'COMPLETED',
    total: 'TOTAL',
    fillBothValues: 'Fill in both Prediction and Measured values to log each sound.',
    managePreferences: 'Manage your laboratory preferences and academic profile.',
    accountInfo: 'Account',
    scientificCredentials: 'Scientific credentials and personal info',
    edit: 'EDIT',
    signOutSession: 'SIGN OUT OF SESSION',
    activityDescription: "In this activity, you'll explore and document different sounds in your environment, learning about sound waves and acoustic properties.",
    category: 'CATEGORY',
    examples: 'EXAMPLES',
    predictionVsMeasured: 'Prediction vs Measured',

    // Additional hardcoded texts
    newActivity: 'NEW ACTIVITY',
    noDataYet: 'No data yet. Complete entries in the Journal to see your results.',
    completeJournalEntries: 'Complete entries in the Journal to see your results.',
    completePredictions: 'Complete your predictions and measurements in the Journal to see comparison.',
    dbRange: 'dB Range',
    level: 'Level',
    cancel: 'Cancel',
    dataCleared: 'All data has been cleared.',
    comingSoon: 'Coming Soon',
    profileEditing: 'Profile editing coming soon.',
    noSavedWorks: 'No Saved Works',
    startActivityFirstEntry: 'Start an activity to create your first entry',

    // App Names
    stemmLab: 'STEMM Lab',
    stemmLabSoundHunter: 'STEMM Lab Sound Hunter',
    thisScreenDoesntExist: "This screen doesn't exist.",
    goToHomeScreen: 'Go to home screen!',
  },
  id: {
    // Tab Names
    library: 'Perpustakaan',
    journal: 'Jurnal',
    activity: 'Aktivitas',
    settings: 'Pengaturan',

    // Activity Library
    activityLibrary: 'Perpustakaan Aktivitas',
    activityLibraryDesc: 'Pilih aktivitas untuk memulai perjalanan STEMM Anda',
    chooseActivity: 'Pilih aktivitas untuk memulai perjalanan STEMM Anda',

    // Activities
    soundHunter: 'Pemburu Suara',
    soundHunterDesc: 'Jelajahi dan rekam berbagai suara di sekitar Anda',
    echoChamber: 'Kamar Gema',
    echoChamberDesc: 'Pahami bagaimana suara bergerak dan memantul',
    frequencyExplorer: 'Penjelajah Frekuensi',
    frequencyExplorerDesc: 'Temukan frekuensi tersembunyi dalam suara sehari-hari',
    acousticMeasurement: 'Pengukuran Akustik',
    acousticMeasurementDesc: 'Belajar mengukur dan menganalisis tingkat suara',

    // Categories
    physics: 'Fisika',
    technology: 'Teknologi',
    mathematics: 'Matematika',
    medicine: 'Kedokteran',

    // Time
    minutes: 'menit',

    // Info
    stemmLabInfo: 'STEMM Lab membantu siswa mengeksplorasi Sains, Teknologi, Teknik, Matematika, dan Kedokteran melalui aktivitas praktis.',

    // Navigation
    back: 'Kembali',
    next: 'Lanjut',
    backToInstructions: 'Kembali ke Instruksi',
    submitToPortfolio: 'Kirim ke Portfolio',

    // Sound Actions
    dropBook: 'Buku Jatuh',
    talk: 'Berbicara',
    walk: 'Berjalan',
    stamp: 'Menginjak',
    logged: 'TERCATAT',
    required: 'WAJIB',
    location: 'LOKASI',
    predictionDb: 'PREDIKSI (dB)',
    measuredDb: 'TERUKUR (dB)',

    // Data Collection
    dataCollection: 'Pengumpulan Data',
    phase02: 'FASE 02',

    // Instructions
    activityInstructions: 'Pemburu Suara',
    instructionsTitle: 'Instruksi',
    referenceTable: 'Referensi Kategori Suara',

    // Steps
    prepareSpace: 'Siapkan Ruang Anda',
    prepareSpaceDesc: 'Temukan lokasi tenang di mana Anda dapat fokus merekam suara tanpa gangguan kebisingan latar belakang.',
    openRecordingTool: 'Buka Alat Perekam',
    openRecordingToolDesc: 'Buka tab Perekaman Langsung dan pastikan mikrofon perangkat Anda aktif dan berfungsi.',
    listenIdentify: 'Dengarkan dan Identifikasi',
    listenIdentifyDesc: 'Luangkan 2-3 menit untuk mendengarkan lingkungan Anda. Cobalah identifikasi setidaknya 3 suara berbeda.',
    startRecording: 'Mulai Merekam',
    startRecordingDesc: 'Tekan tombol rekam saat Anda mendengar suara menarik. Tetap diam dan biarkan suara berlangsung selama 10-15 detik.',
    documentFindings: 'Dokumentasikan Temuan Anda',
    documentFindingsDesc: 'Tambahkan catatan tentang setiap suara termasuk: lokasi, waktu, dan pengamatan tentang karakteristik suara.',
    reviewReflect: 'Tinjau dan Renungkan',
    reviewReflectDesc: 'Selesaikan Log Eksperimen untuk merenungkan apa yang Anda pelajari dan pola yang Anda amati.',

    // Categories Reference
    natural: 'Alam',
    naturalExamples: 'Angin, Hujan, Burung, Serangga',
    mechanical: 'Mekanis',
    mechanicalExamples: 'Mesin, Kipas, Jam, Pintu',
    human: 'Manusia',
    humanExamples: 'Percakapan, Langkah Kaki, Tawa',
    electronic: 'Elektronik',
    electronicExamples: 'Telefon, Televisi, Radio',

    // Pro Tip
    proTip: 'Tips Pro',
    proTipText: 'Coba temukan lokasi dengan berbagai sumber suara. Lingkungan indoor dan outdoor menawarkan pengalaman akustik yang berbeda!',

    // Start Button
    startActivity: 'Mulai Aktivitas',

    // Live Recording
    liveRecording: 'Perekaman Langsung',
    liveRecordingDesc: 'Rekam dan dokumentasikan suara di sekitar Anda',
    readyToRecord: 'Siap Merekam',
    recording: 'Merekam...',
    quickNotes: 'Catatan Cepat',
    addNotes: 'Tambahkan catatan tentang suara...',
    recordingLog: 'Log Perekaman',
    noRecordings: 'Belum ada rekaman.',
    noRecordingsDesc: 'Tekan mikrofon untuk mulai merekam.',
    continueExperimentLog: 'Lanjut ke Log Eksperimen',
    saveRecording: 'Simpan Rekaman',
    addNote: 'Tambah Catatan',

    // Sound Types
    ambient: 'Lingkungan',

    // Experiment Log
    experimentLog: 'Log Eksperimen',
    experimentLogTitle: 'Aktivitas Pemburu Suara',
    observations: 'Pengamatan',
    soundsRecorded: 'suara tercatat',
    addNewObservation: 'Tambah Pengamatan Baru',
    sound: 'Suara',
    source: 'Sumber',
    characteristics: 'Karakteristik',
    reflection: 'Renungan',
    whatDidYouLearn: 'APA YANG ANDA PELAJARI?',
    reflectionQuestions: 'Pertanyaan Renungan',
    question1: 'Bagaimana lingkungan yang berbeda menghasilkan jenis suara yang berbeda?',
    question2: 'Pola apa yang Anda perhatikan dalam suara yang Anda rekam?',
    question3: 'Bagaimana Anda bisa menggunakan pengetahuan ini dalam kehidupan sehari-hari?',
    completeActivity: 'Selesaikan Aktivitas',
    addObservation: 'Tambah Pengamatan',

    // Predictions
    predicted: 'Prediksi',
    measured: 'Terukur',
    status: 'Status',
    correct: 'Benar',
    incorrect: 'Salah',
    action: 'Aksi',

    // Chart Labels
    decibelIntensity: 'Intensitas Desibel Terukur',
    safe: 'Aman',
    risk: 'Risiko',
    dangerous: 'Bahaya',

    // Settings
    settingsTitle: 'Pengaturan',
    settingsDesc: 'Kustomisasi pengalaman STEMM Lab Anda',
    preferences: 'PREFERENSI',
    account: 'AKUN',
    data: 'DATA',

    // Settings Items
    notifications: 'Notifikasi',
    notificationsDesc: 'Terima pengingat untuk aktivitas dan eksperimen',
    soundEffects: 'Efek Suara',
    soundEffectsDesc: 'Putar suara untuk interaksi dan umpan balik',
    autoSave: 'Simpan Otomatis',
    autoSaveDesc: 'Simpan progres Anda secara otomatis',
    profile: 'Profil',
    profileDesc: 'Kelola profil siswa Anda',
    dataStorage: 'Data & Penyimpanan',
    dataStorageDesc: 'Kelola data dan penyimpanan yang tercatat',
    helpSupport: 'Bantuan & Dukungan',
    helpSupportDesc: 'Dapatkan bantuan dan hubungi dukungan',
    resetData: 'Reset Semua Data',
    resetDataConfirm: 'Apakah Anda yakin ingin mereset semua data? Tindakan ini tidak dapat dibatalkan.',
    resetDataDesc: 'Hapus semua eksperimen dan rekaman yang tersimpan',

    // Language
    language: 'Bahasa',
    languageDesc: 'Pilih bahasa antarmuka yang Anda inginkan',
    english: 'English',
    indonesian: 'Indonesia (Bahasa Indonesia)',
    ukUsStandard: 'STANDAR UK/US',
    regionalStandard: 'STANDAR REGIONAL',

    // Theme
    darkMode: 'Mode Lab Gelap',
    darkModeDesc: 'Kurangi ketegangan mata saat belajar malam',

    // App Info
    version: 'Versi',

    // Placeholders
    enterSound: 'mis., Angin berbisik',
    enterSource: 'mis., Pohon dekat taman',
    enterCharacteristics: 'Jelaskan properti suara...',
enterReflection: 'Renungkan pengamatan dan apa yang Anda temukan tentang suara...',
    addNotesPlaceholder: 'Tambahkan catatan tentang suara...',

    // Locations
    classroom: 'Ruang Kelas',
    hallway: 'Lorong',
    playground: 'Taman Bermain',

    // Step actions
    makePrediction: 'Buat prediksi',
    makeSound: 'Buat suara',
    measureRecord: 'Ukur dan catat',
    saveViewResults: 'Simpan dan lihat hasil',
    guessDecibel: 'Tebak tingkat desibel sebelum membuat suara',
    dropBookTalkWalkStamp: 'Jatuhkan buku, berbicara, berjalan, atau menginjak',
    useDecibelMeter: 'Gunakan meter desibel untuk mengukur dan mencatat data',
    markComplete: 'Tandai sebagai selesai dan lihat log eksperimen',

    // How to Record
    howToRecord: 'Cara Merekam',
    soundActionsToTest: 'Aksi Suara untuk Diuji',
    decibelReferenceTable: 'Tabel Referensi Desibel',
    expectedRange: 'Diprediksi',

    // Hardcoded Texts
    curatedModules: 'Modul kurasi untuk ilmuwan digital.',
    featured: 'UNGGULAN',
    intermediate: 'MENENGAH',
    recordMeasurements: 'Catat pengukuran Anda untuk setiap tindakan di bawah.',
    completed: 'SELESAI',
    total: 'TOTAL',
    fillBothValues: 'Isi nilai Prediksi dan Terukur untuk mencatat setiap suara.',
    managePreferences: 'Kelola preferensi laboratorium dan profil akademik Anda.',
    accountInfo: 'Akun',
    scientificCredentials: 'Kredensial ilmiah dan info pribadi',
    edit: 'EDIT',
    signOutSession: 'KELUAR DARI SESI',
    activityDescription: 'Dalam aktivitas ini, Anda akan menjelajahi dan mendokumentasikan berbagai suara di sekitar Anda, mempelajari tentang gelombang suara dan properti akustik.',
    category: 'KATEGORI',
    examples: 'CONTOH',
    predictionVsMeasured: 'Prediksi vs Terukur',

    // Additional hardcoded texts
    newActivity: 'AKTIVITAS BARU',
    noDataYet: 'Belum ada data. Selesaikan entri di Jurnal untuk melihat hasil Anda.',
    completeJournalEntries: 'Selesaikan entri di Jurnal untuk melihat hasil Anda.',
    completePredictions: 'Selesaikan prediksi dan pengukuran Anda di Jurnal untuk melihat perbandingan.',
    dbRange: 'Rentang dB',
    level: 'Tingkat',
    cancel: 'Batal',
    dataCleared: 'Semua data telah dihapus.',
    comingSoon: 'Segera Hadir',
    profileEditing: 'Pengeditan profil akan segera hadir.',
    noSavedWorks: 'Tidak Ada Karya Tersimpan',
    startActivityFirstEntry: 'Mulai aktivitas untuk membuat entri pertama Anda',

    // App Names
    stemmLab: 'STEMM Lab',
    stemmLabSoundHunter: 'STEMM Lab Sound Hunter',
    thisScreenDoesntExist: 'Layar ini tidak ada.',
    goToHomeScreen: 'Pergi ke layar utama!',
  },
};