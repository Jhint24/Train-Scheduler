
  // Initialize Firebase
  var config = 
  {
    apiKey: "AIzaSyCtkkwE8fIbfMujp8Um8aKiATdunzNTATE",
    authDomain: "train-scheduler-1c05f.firebaseapp.com",
    databaseURL: "https://train-scheduler-1c05f.firebaseio.com",
    projectId: "train-scheduler-1c05f",
    storageBucket: "train-scheduler-1c05f.appspot.com",
    messagingSenderId: "61675721712"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();

  var name;
  var dest;
  var time;
  var freq;
  
  $('#run-search').on('click', function(e) 
  {
    e.preventDefault();
    name = $('#train-name').val();
    role = $('#train-dest').val();
    start = $('#train-time').val();
    rate = $('#train-freq').val();
    console.log(name, dest, time, freq)
    console.log(moment().format("HH:MM a"));
});