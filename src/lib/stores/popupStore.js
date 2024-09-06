import { writable } from 'svelte/store';

export const popupStore = writable({
    showPopup: false,
    showThankYou: false,
    email: '',
    feedback: ''
});

export const openPopup = () => {
    console.log('Opening popup'); // Add this line
    popupStore.update(s => ({ ...s, showPopup: true }));
};

export const closePopup = () => {
    console.log('Closing popup'); // Add this line
    popupStore.update(s => ({ ...s, showPopup: false, showThankYou: false }));
};

export const handleSubmit = async () => {
    let currentState;
    popupStore.subscribe(value => {
        currentState = value;
    })();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc_jcDkYYlJDuEL4ZPs3zhvSXuMeoaXprKeQV9BClYJHpjHJA/formResponse';
    const emailEntry = 'entry.1040103954';
    const feedbackEntry = 'entry.1745963531';

    const params = new URLSearchParams();
    params.append(emailEntry, currentState.email);
    params.append(feedbackEntry, currentState.feedback || 'null');

    const submitUrl = `${formUrl}?${params.toString()}`;

    try {
        const response = await fetch(submitUrl, {
            method: 'GET',
            mode: 'no-cors',
        });

        console.log('Form submitted successfully');
        console.log('Submitted data:', {
            email: currentState.email,
            feedback: currentState.feedback || ''
        });

        popupStore.update(s => ({ ...s, showThankYou: true }));
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
