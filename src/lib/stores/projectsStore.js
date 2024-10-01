import { writable } from 'svelte/store';
import { fetchProjects, createProject } from '$lib/api/projects.js';

export const projectsStore = writable([]);

export async function loadProjects() {
    const projects = await fetchProjects();
    projectsStore.set(projects);
}

export async function addProject(project) {
    const newProject = await createProject(project);
    projectsStore.update(current => [...current, newProject]);
}