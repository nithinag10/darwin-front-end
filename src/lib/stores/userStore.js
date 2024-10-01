import { writable } from 'svelte/store';

// Mock user data
const mockUser = {
    hasOnboarded: false,
    figmaFileKey: '',
    figmaAccessToken: '',
    productLandingPageUrl: '',
    customProductInformation: ''
};

export const userStore = writable(mockUser);

export function fetchUserData() {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            // You can toggle hasOnboarded to true to simulate returning user
            resolve({ ...mockUser });
        }, 500);
    });
}

export function updateUserData(data) {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            userStore.set({ ...data, hasOnboarded: true });
            resolve(true);
        }, 500);
    });
}