
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtkkwE8fIbfMujp8Um8aKiATdunzNTATE",
    authDomain: "train-scheduler-1c05f.firebaseapp.com",
    databaseURL: "https://train-scheduler-1c05f.firebaseio.com",
    projectId: "train-scheduler-1c05f",
    storageBucket: "train-scheduler-1c05f.appspot.com",
    messagingSenderId: "61675721712"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();