  const firebaseConfig = {
    apiKey: process.env.REAC_APP_FIREBASE_API_KEY,
    authDomain: process.env.REAC_APP_FIREBASE_AUTH-DOMAIN,
    databaseURL: process.env.REAC_APP_FIREBASE_DB_URL,
    projectId: process.env.REAC_APP_FIREBASE_PROJECT_DI
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
