// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8QJqCgLrqDNDhme52hxDIVtr5Z187cz0",
    authDomain: "kwittertest-438fc.firebaseapp.com",
    databaseURL: "https://kwittertest-438fc.firebaseio.com",
    projectId: "kwittertest-438fc",
    storageBucket: "kwittertest-438fc.appspot.com",
    messagingSenderId: "1058080177614",
    appId: "1:1058080177614:web:4acb6bf6e437b1524d3f9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose: "adding user" 
    });
  }