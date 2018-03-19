
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
  //add var newTrain={}
  var name;
  var dest;
  var time;
  var freq;
  var nextTrainTime;
  var minsAway;
  //add click functions
  $('#run-submit').on('click', function(e) 
  {
    e.preventDefault();
    name = $('#train-name').val().trim();
    dest = $('#train-dest').val().trim();
    time = $('#train-time').val().trim();
    freq = $('#train-freq').val().trim();
    console.log(name, dest, time, freq);
    //upload to database
    database.ref().push(
    {
        name: name,
        dest: dest,
        time: time,
        freq: freq
    });
        //clear forms
      $('#train-name').val('');
      $('#train-dest').val('');
      $('#train-time').val('');
      $('#train-freq').val('');
  
    
});

//clear forms with clear button click
  $("#clear-all").on('click', function(f)
{
  f.preventDefault();
  $('#train-name').val('');
  $('#train-dest').val('');
  $('#train-time').val('');
  $('#train-freq').val('');
});
//child database firebase
database.ref().orderByChild("dateAdded").limitToLast(100).on("child_added", function(snapshot) {
  //pull the values from firebase
  freq = snapshot.val().freq;
  time = snapshot.val().time;
  //convert time
  var firstTimeConverted = moment(time, "HH:mm a").subtract(1, "years");
  console.log(firstTimeConverted);
  var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
  console.log(timeDiff);
  //divide minutes / frequency = get remainder
  var remainder = timeDiff % freq;
  console.log(remainder);
  //subtract current time from the first train value in minutes
  var minsAway = freq - remainder;
  console.log(minsAway);
  //add time till next train to current = time of next train
  var timeOfNext = moment().add(minsAway, "minutes");
  //format for military time
  nextTrainMil = moment(timeOfNext).format("HH:mm");

  // appending rows/cells to the table
    $(".append-trains").append("<tr><th scope='row'>" + snapshot.val().name + "</th><td>" + snapshot.val().dest +
    "</td><td>" + snapshot.val().freq + 
    "</td><td>" + nextTrainMil + 
    "</td><td>" + minsAway + 
    "</td></tr>");
  });