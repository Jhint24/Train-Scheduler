
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
    name = $('#train-name').val().trim();
    dest = $('#train-dest').val().trim();
    time = $('#train-time').val().trim();
    freq = $('#train-freq').val().trim();
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
database.ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function(snapshot) {
    //subtract current time from the first train value in minutes
    //divide minutes / frequency = get remainder 
    //subtract frequencey - remainder = will give time till next train
    //add time till next train to current = time of next train
    // appending rows/cells to the table
    $(".append-trains").append("<tr><th scope='row'>" + snapshot.val().name + "</th><td>" + snapshot.val().dest +
    "</td><td>" + snapshot.val().freq +"</td>/<tr>");
  });