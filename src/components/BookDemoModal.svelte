<script>
    import { createEventDispatcher } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    const dispatch = createEventDispatcher();

    let name = "";
    let email = "";
    let phone = "";
    let company = "";
    let jobTitle = "";
    let employees = "";
    let objectives = "";
    let showConfirmation = false;

    function closeModal() {
        dispatch("close");
    }

    function vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    function handleClick() {
        vibrate();
        // ... any existing click handling logic ...
    }

    async function submitForm() {
        const baseUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLSc9kcPdC0AIyYmWJuoPKGMl60MTfOkycjaS7ELSl5O6WDfffg/formResponse";
        const params = new URLSearchParams({
            "entry.1567034251": name,
            "entry.1131533067": email,
            "entry.1182997797": phone,
            "entry.1548800240": company,
            "entry.2012403121": jobTitle,
            "entry.206099108": employees,
            "entry.15773861": objectives,
        });

        const fullUrl = `${baseUrl}?${params.toString()}`;

        try {
            const response = await fetch(fullUrl, {
                method: "GET",
                mode: "no-cors",
            });

            // Since we're using no-cors, we can't actually check the response status
            // We'll assume it was successful if no error was thrown
            showConfirmation = true;
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again.");
        }
    }
</script>

<div
    class="modal-backdrop"
    on:click={closeModal}
    transition:fade={{ duration: 300 }}
>
    <div
        class="modal-content"
        on:click|stopPropagation={handleClick}
        transition:fly={{ y: 20, duration: 300, easing: quintOut }}
    >
        {#if !showConfirmation}
            <h2>Book a Demo</h2>
            <p class="subtitle">
                Experience the future of customer understanding
            </p>
            <form on:submit|preventDefault={submitForm}>
                <div class="form-group">
                    <input
                        type="text"
                        bind:value={name}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        bind:value={email}
                        placeholder="Email"
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="tel"
                        bind:value={phone}
                        placeholder="Phone (optional)"
                    />
                    <input
                        type="text"
                        bind:value={company}
                        placeholder="Company Name"
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        bind:value={jobTitle}
                        placeholder="Job Title"
                        required
                    />
                    <input
                        type="number"
                        bind:value={employees}
                        placeholder="Number of Employees (optional)"
                    />
                </div>
                <textarea
                    bind:value={objectives}
                    placeholder="What would you like to achieve with our product?"
                    required
                ></textarea>
                <button type="submit" class="submit-btn">Book Demo</button>
            </form>
        {:else}
            <div class="confirmation">
                <h2>Thank You!</h2>
                <p>
                    We appreciate your interest. We'll be in touch shortly to
                    schedule your demo.
                </p>
                <button on:click={closeModal} class="close-btn">Close</button>
            </div>
        {/if}
        <button class="close-button" on:click={closeModal}>×</button>
    </div>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        width: 90%;
        max-width: 500px;
        position: relative;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    h2 {
        color: #333;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        color: #666;
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .form-group {
        display: flex;
        gap: 1rem;
    }

    input,
    textarea {
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #007bff;
    }

    textarea {
        resize: vertical;
        min-height: 100px;
    }

    .submit-btn,
    .close-btn {
        padding: 0.75rem 1.5rem;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }

    .submit-btn:hover,
    .close-btn:hover {
        background: #0056b3;
    }

    .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        transition: color 0.3s ease;
    }

    .close-button:hover {
        color: #333;
    }

    .confirmation {
        text-align: center;
    }

    .confirmation p {
        margin-bottom: 1rem;
        color: #555;
    }

    .confirmation .close-btn {
        margin-top: 1rem;
    }

    @media (max-width: 600px) {
        .form-group {
            flex-direction: column;
        }
    }
</style>
