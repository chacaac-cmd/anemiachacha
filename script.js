document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    if (!menuButton || !navigation) {
        console.log("Tombol atau navigasi tidak ditemukan");
        return;
    }

    menuButton.onclick = function () {
    navigation.classList.toggle("active");
    };

    navigation.querySelectorAll("a").forEach(function (link) {
        link.onclick = function () {
            navigation.classList.remove("active");
        };
    });
});
