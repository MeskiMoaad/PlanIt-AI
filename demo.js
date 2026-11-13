fetch("./sample-plan.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON");
        }

        return response.json();
    })
    .then(data => {
        console.log("Data received");
        console.log(data);
        console.log(data.projectName);
        console.log(data.tasks.length);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });