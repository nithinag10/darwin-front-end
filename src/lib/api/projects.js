let projects = [
    { id: 1, name: "Sample Project 1", description: "This is a sample project.", status: "active" },
    { id: 2, name: "Sample Project 2", description: "This is another sample project.", status: "completed" }
];

export async function createProject(project) {
    // Simulate API call delay
    return new Promise((resolve) => {
        setTimeout(() => {
            const newProject = { id: projects.length + 1, ...project };
            projects.push(newProject);
            console.log('Creating project:', newProject);
            resolve(newProject);
        }, 500);
    });
}

export async function fetchProjects() {
    // Simulate API call delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects);
        }, 500);
    });
}