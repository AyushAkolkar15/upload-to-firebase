import firebase from "firebase"
import "firebase/storage"

export const app = firebase.initializeApp({
  "projectId": "bookworm-de24b",
  "appId": "1:118473256549:web:5d51a3572f739dba78e08c",
  "databaseURL": "https://bookworm-de24b-default-rtdb.firebaseio.com",
  "storageBucket": "bookworm-de24b.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyC4nBFXk_bi5LJ_DgT5FPUKPCTBoKMUqqM",
  "authDomain": "bookworm-de24b.firebaseapp.com",
  "messagingSenderId": "118473256549"
});