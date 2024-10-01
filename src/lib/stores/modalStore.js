import { writable } from 'svelte/store';

export const modalStore = writable({
    showModal: false,
    modalType: null // e.g., 'onboarding', 'newProject', etc.
});

export function showModal(modalType) {
    modalStore.set({ showModal: true, modalType });
}

export function closeModal() {
    modalStore.set({ showModal: false, modalType: null });
}