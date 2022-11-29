const onlineStatus = document.querySelector(".onlinestatus");
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";
    onlineStatus.classList.remove("offline");
    onlineStatus.classList.remove("online");
    if (condition == "online") {
        onlineStatus.classList.add("online");
    }
    else {
        onlineStatus.classList.add("offline");
    }
    onlineStatus.innerHTML = condition;
}
updateOnlineStatus();