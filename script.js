const eventList = document.getElementById("eventList");

function addEvent() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let desc = document.getElementById("desc").value;

    if (title === "" || date === "") {
        alert("Please fill required fields");
        return;
    }

    eventList.innerHTML += `
        <div class="event">
            <strong>${title}</strong><br>
            📅 ${date}<br>
            🏷️ ${category}<br>
            ${desc}
        </div>
    `;

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("desc").value = "";
}

function clearEvents() {
    eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
}

function addSample() {
    eventList.innerHTML = `
        <div class="event">
            <strong>Web Development Conference</strong><br>
            📅 2026-02-15<br>
            🏷️ Conference<br>
            Annual web tech event
        </div>

        <div class="event">
            <strong>JavaScript Workshop</strong><br>
            📅 2026-02-20<br>
            🏷️ Workshop<br>
            Hands-on JS learning
        </div>
    `;
}

/* DOM Manipulation Demo */
document.addEventListener("keydown", function (e) {
    document.getElementById("keyText").innerText =
        "You Pressed: " + e.key;
});


