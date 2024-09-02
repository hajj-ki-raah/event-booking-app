
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user);
        console.log(user.uid);
        console.log("User is signed in.");

    }else{
        console.log("User is not signed in.");
        window.location.href = "login.html";
    }
});

document.getElementById("logout").addEventListener("click", function(){
    alert("Are you sure you want to logout?");

    firebase.auth().signOut().then(() => {
        console.log("User signed out successfully.");
        window.location.href = "login.html";
    }).catch((error) => {
        console.log(error);
    });
});
