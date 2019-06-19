
// $(document).ready(function(){
//     // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDeJsVIuFPmuhgL4StFK4v_yvT-vwbzTks",
//     authDomain: "project-1195264615205401628.firebaseapp.com",
//     databaseURL: "https://project-1195264615205401628.firebaseio.com",
//     projectId: "project-1195264615205401628",
//     storageBucket: "project-1195264615205401628.appspot.com",
//     messagingSenderId: "4319984782",
//     appId: "1:4319984782:web:111e7545f7678f11"
//   };
//   firebaseConfig.initializeApp(config);
//   var dbRef = firebase.database().ref()
//   var $name = $('#name');
//   var $content = $('#content');
//   var $btn = $('#btn');
//   var $show = $('#show');
// });

// $messageField.keypress(function (e){
//     if(e.keyCode == 13){
//         var username = $nameField.val();
//         var message = $messageField.val();
//         console.log(username);
//         console.log(message);

//         dbRef.push({name:username, text:message});
//         $messageField.val('');
//     }
// });

// dbRef.limitTolast(10).on('child_added',function(snapshot){
//     var data = snapshot.val();
//     var username = data.name || "anonymous";
//     var message = data.text;

//     var $messageElement = $("<li>");
//     var $nameElement = $("<strong class='example-chat-username'></strong>");
//     $nameElement.text(message).prepend($nameElement);

//     $messageList.append($messageElement)

//     $messageList[0].scrollTop = $messageList[0].scrolHeight;
// });
var firebase;
$(function(){
  var $name = $('#name'),
      $content = $('#content'),
      $btn = $('#btn'),
      $show = $('#show'),
      ms = new Date().getTime();
  var config = {
    databaseURL: "https://project-1195264615205401628.firebaseio.com/"
  };
  firebase.initializeApp(config);
  var database = firebase.database().ref();
  
  $btn.on('click',write);

  function write(){
    window.location.reload();
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
      h = '0'+h;
    }
    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    var now = h+':'+m+':'+s;
    var postData = {
      name:$('#name').val(),
      content:$('#content').val(),
      time:now,
      id:'id'+ms
    };
    database.push(postData);
    $content.val('');
    
  }
  
  database.once('value', function(snapshot) {
    $show.html('');
    for(var i in snapshot.val()){
       $show.prepend('<div class="mes animated pulse" id="mes">'+snapshot.val()[i].name+'：'+snapshot.val()[i].content+'<div class="time">'+snapshot.val()[i].time+'</div></div>');
    }
  });
  database.limitToLast(1).on('value', function(snapshot) {
    for(var i in snapshot.val()){
       $show.prepend('<div class="'+snapshot.val()[i].id+'"><div class="mes animated pulse" id="mes">'+snapshot.val()[i].name+'：'+snapshot.val()[i].content+'<div class="time">'+snapshot.val()[i].time+'</div></div></div>');
    }
  });    
});