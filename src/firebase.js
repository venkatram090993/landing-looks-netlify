    import firebase from 'firebase'
    import 'firebase/firestore'


    var firebaseConfig = {
        apiKey: "AIzaSyD845X4tVVkKXZ99ZkDYXgEMIwmEhorJbY",
        authDomain: "looks-9558e.firebaseapp.com",
        databaseURL: "https://looks-9558e.firebaseio.com",
        projectId: "looks-9558e",
        storageBucket: "looks-9558e.appspot.com",
        messagingSenderId: "1633810272",
        appId: "1:1633810272:web:7e29398ba7eb960ed81005",
        measurementId: "G-Z2Q5S2XBP3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    export default firebase;
