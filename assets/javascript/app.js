
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
  //add click functions
  $('#run-submit').on('click', function(e) 
  {
    e.preventDefault();
    name = $('#train-name').val();
    dest = $('#train-dest').val();
    time = $('#train-time').val();
    freq = $('#train-freq').val();
    console.log(name, dest, time, freq)
    console.log(moment().format("HH:MM a"));
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
//child database firebase
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    
    // full list of items to the well
    $("#well-section").append("<div class='well row'><span class='train-name col-md-2'> " + snapshot.val().name +
    " </span><span class='employee-role col-md-2'> " + snapshot.val().dest +
    " </span><span class='employee-start col-md-2'> " + snapshot.val().time +
    " </span><span class='employee-rate col-md-2'> " + snapshot.val().freq + " </span></div>");
  });