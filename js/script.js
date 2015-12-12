$(document).ready(function(){

  var myFirebaseRef = new Firebase("https://sizzling-heat-1941.firebaseio.com/");

  myFirebaseRef.set({
    user: "Bob Jones"
  });

  myFirebaseRef.child("user").on("value", function(snapshot) {
    alert(snapshot.val());  // Alerts "Bob Jones"
  });

});