import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyB1zBIpnHT8vdRoHCd24RxUEPQAkVkz1YE",
    authDomain: "wheeled-traveler.firebaseapp.com",
    databaseURL: "https://wheeled-traveler.firebaseio.com",
    projectId: "wheeled-traveler",
    storageBucket: "wheeled-traveler.appspot.com",
    messagingSenderId: "699300672684",
    appId: "1:699300672684:web:3ea07bfac92cd25e66db09",
    measurementId: "G-0CW52S3SJC"
};
let app = Firebase.initializeApp(config);
export const db = app.database();