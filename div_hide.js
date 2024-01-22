function showNotification() {
    var notificationDiv = document.getElementById("notification");
    notificationDiv.style.display = "none";
}

// Call the function to show the notification after 3 seconds
setTimeout(showNotification, 3000);