const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevIcon = document.getElementById("prev");
const nextIcon = document.getElementById("next");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday =
            i === date.getDate() &&
                currMonth === date.getMonth() &&
                currYear === date.getFullYear()
                ? "active"
                : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDateOfMonth, j = 1; i < 6; i++, j++) {
        liTag += `<li class="inactive">${j}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    // Agregar eventos de clic a los elementos de los días
    const dayElements = daysTag.querySelectorAll("li");
    dayElements.forEach((day) => {
        day.addEventListener("click", () => {
            // Verificar si el día está inactivo
            if (day.classList.contains("inactive")) {
                return;
            }

            // Desmarcar cualquier otro día seleccionado previamente
            const selectedDay = daysTag.querySelector(".selected");
            if (selectedDay) {
                selectedDay.classList.remove("selected");
            }

            // Marcar el día seleccionado
            day.classList.add("selected");
        });
    });
};

renderCalendar();

prevIcon.addEventListener("click", () => {
    currMonth--;
    if (currMonth < 0) {
        currMonth = 11;
        currYear--;
    }
    renderCalendar();
});

nextIcon.addEventListener("click", () => {
    currMonth++;
    if (currMonth > 11) {
        currMonth = 0;
        currYear++;
    }
    renderCalendar();
});
