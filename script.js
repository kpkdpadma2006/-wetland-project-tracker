// ========================================
// WETLAND PROJECT TRACKER
// ========================================

// ========================================
// AUTOMATIC PROJECT PROGRESS
// ========================================

function calculateProgress() {

    const total =
        projectData.tasks.length;

    const completed =
        projectData.tasks.filter(
            task => task.completed
        ).length;

    const progress =
        Math.round(
            (completed / total) * 100
        );

    return progress;
}

function updateProgressDisplay() {

    const progress =
        calculateProgress();

    const progressFill =
        document.querySelector(".progress-fill");

    const progressText =
        document.querySelector(".progress-box strong");

    if (progressFill) {
        progressFill.style.width =
            progress + "%";
    }

    if (progressText) {
        progressText.textContent =
            progress + "%";
    }
}

// ---------- TODAY TASKS ----------

function loadTodayTasks() {

    const container = document.getElementById("today-tasks");

    document.getElementById("today-date").textContent =
        projectData.today.date;

    container.innerHTML = "";

    projectData.today.tasks.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "task-item";

        div.innerHTML = `
            <input
                type="checkbox"
                id="today-${index}"
                ${item.completed ? "checked" : ""}
            >

            <label for="today-${index}">
                ${item.task}
            </label>
        `;

        const checkbox = div.querySelector("input");

        checkbox.addEventListener("change", function () {

            item.completed = this.checked;

            div.classList.toggle(
                "completed",
                this.checked
            );

            saveProgress();

        });

        if (item.completed) {
            div.classList.add("completed");
        }

        container.appendChild(div);

    });
}


// ---------- TOMORROW TASKS ----------

function loadTomorrowTasks() {

    const container = document.getElementById("tomorrow-tasks");

    document.getElementById("tomorrow-date").textContent =
        projectData.tomorrow.date;

    container.innerHTML = "";

    projectData.tomorrow.tasks.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "task-item";

        div.innerHTML = `
            <input
                type="checkbox"
                id="tomorrow-${index}"
                ${item.completed ? "checked" : ""}
            >

            <label for="tomorrow-${index}">
                ${item.task}
            </label>
        `;

        const checkbox = div.querySelector("input");

        checkbox.addEventListener("change", function () {

            item.completed = this.checked;

            div.classList.toggle(
                "completed",
                this.checked
            );

            saveProgress();

        });

        container.appendChild(div);

    });
}


// ---------- 30 DAY PLAN ----------

function loadMonthlyPlan() {

    document.getElementById("target-start").textContent =
        projectData.monthlyTarget.startDate;

    document.getElementById("target-end").textContent =
        projectData.monthlyTarget.endDate;


    const container =
        document.getElementById("monthly-weeks");

    container.innerHTML = "";


    projectData.monthlyTarget.weeks.forEach(week => {

        const card = document.createElement("div");

        card.className = "week-card";

        card.innerHTML = `

            <div class="week-header">

                <strong>${week.week}</strong>

                <span class="week-period">
                    ${week.period}
                </span>

            </div>

            <div class="week-target">
                🎯 ${week.target}
            </div>

            <div class="week-tasks">

                ${week.tasks.map(task => `
                    <span class="week-task">
                        ${task}
                    </span>
                `).join("")}

            </div>
        `;

        container.appendChild(card);

    });
}


// ---------- COUNTDOWN ----------

function calculateDaysLeft() {

    const endDate =
        new Date("2026-09-15T23:59:59");

    const today =
        new Date();

    const difference =
        endDate - today;

    const days =
        Math.max(
            0,
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            )
        );

    document.getElementById("days-left").textContent =
        days;
}


// ---------- SAVE ----------

function saveProgress() {

    localStorage.setItem(
        "wetlandProjectData",
        JSON.stringify(projectData)
    );

}


// ---------- LOAD SAVED DATA ----------

function loadSavedProgress() {

    const saved =
        localStorage.getItem(
            "wetlandProjectData"
        );

    if (!saved) return;

    const savedData =
        JSON.parse(saved);

    projectData.today =
        savedData.today || projectData.today;

    projectData.tomorrow =
        savedData.tomorrow || projectData.tomorrow;

}


// ---------- START DASHBOARD ----------

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSavedProgress();

        loadTodayTasks();

        loadTomorrowTasks();

        loadMonthlyPlan();

        calculateDaysLeft();

        updateProgressDisplay();

    }
);


// ========================================
// RESEARCH WORKFLOW
// ========================================

function loadWorkflowTasks() {

    const container =
        document.getElementById("workflow-tasks");

    container.innerHTML = "";

    let completed = 0;


    projectData.tasks.forEach(task => {

        if (task.status === "completed") {
            completed++;
        }


        const div =
            document.createElement("div");

        div.className =
            "workflow-task";


        if (task.status === "completed") {
            div.classList.add("completed");
        }

        if (task.status === "current") {
            div.classList.add("current");
        }


        const isChecked =
            task.status === "completed";


        div.innerHTML = `

            <input
                type="checkbox"
                class="workflow-checkbox"
                ${isChecked ? "checked" : ""}
            >

            <span class="workflow-name">
                ${task.name}
            </span>

            <span class="workflow-phase">
                ${task.phase}
            </span>

            <span class="
                workflow-status
                status-${task.status}
            ">
                ${getStatusText(task.status)}
            </span>

        `;


        const checkbox =
            div.querySelector(
                ".workflow-checkbox"
            );


        checkbox.addEventListener(
            "change",
            function () {

                task.status =
                    this.checked
                        ? "completed"
                        : "pending";


                saveProgress();

                loadWorkflowTasks();

                updateProjectProgress();

            }
        );


        container.appendChild(div);

    });


    document.getElementById(
        "completed-count"
    ).textContent =
        completed + "/" +
        projectData.tasks.length;

}


function getStatusText(status) {

    if (status === "completed") {
        return "Completed";
    }

    if (status === "current") {
        return "Current";
    }

    return "Pending";
}
function updateProjectProgress() {

    const total =
        projectData.tasks.length;

    const completed =
        projectData.tasks.filter(
            task =>
                task.status === "completed"
        ).length;


    const progress =
        Math.round(
            (completed / total) * 100
        );


    const progressBar =
        document.querySelector(
            ".progress-bar"
        );


    const progressText =
        document.querySelector(
            ".progress-percentage"
        );


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }


    if (progressText) {

        progressText.textContent =
            progress + "%";

    }


    projectData.overallProgress =
        progress;

}

cd wetland-project-tracker