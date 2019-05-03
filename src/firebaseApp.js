import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBDAchQf-WwPrOTYbiHkvWlONLkTayOXyI",
  authDomain: "turnout-fa970.firebaseapp.com",
  databaseURL: "https://turnout-fa970.firebaseio.com",
  projectId: "turnout-fa970",
  storageBucket: "turnout-fa970.appspot.com",
  messagingSenderId: "1083772946209"
};

export const firebaseApp = firebase.initializeApp(config);
