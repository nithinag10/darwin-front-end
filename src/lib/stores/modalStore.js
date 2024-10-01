import { writable } from 'svelte/store';

export const modalStore = writable({
    showModal: false,
    modalType: null,
});

export function showModal(type) {
    modalStore.set({
        showModal: true,
        modalType: type,
    });
}

export function closeModal() {
    modalStore.set({
        showModal: false,
        modalType: null,
    });
}