<script>
    import { goto } from "$app/navigation";
    import logo from "../../asset/logo.svg";

    let email = "";
    let password = "";
    let confirmPassword = "";

    async function handleSignup() {
        // Implement signup logic here
        console.log("Signup attempted", { email, password, confirmPassword });

        // Assuming signup is successful, redirect to dashboard
        goto("/dashboard");
    }

    function handleGoogleSignIn() {
        // Implement Google Sign-In logic here
        console.log("Google Sign-In attempted");
    }

    function navigateToLogin() {
        goto("/login");
    }
</script>

<div class="signup-container">
    <div class="signup-card">
        <img src={logo} alt="LemonSoda.ai Logo" class="logo" />
        <h1>Sign Up</h1>
        <form on:submit|preventDefault={handleSignup}>
            <input
                type="email"
                bind:value={email}
                placeholder="Email"
                required
            />
            <input
                type="password"
                bind:value={password}
                placeholder="Password"
                required
            />
            <input
                type="password"
                bind:value={confirmPassword}
                placeholder="Confirm Password"
                required
            />
            <button type="submit" class="primary-button">Sign Up</button>
        </form>
        <div class="google-button-container">
            <button on:click={handleGoogleSignIn} class="google-button">
                <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                />
                Sign up with Google
            </button>
        </div>
        <p>
            Already have an account? <a
                href="#"
                on:click|preventDefault={navigateToLogin}>Log in</a
            >
        </p>
    </div>
</div>

<style>
    .signup-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f7f7f7;
    }

    .signup-card {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
        text-align: center;
    }

    .logo {
        height: 2.5rem;
        margin-bottom: 1rem;
    }

    h1 {
        font-family: "Lora", serif;
        color: #333333;
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        font-size: 1rem;
    }

    .primary-button,
    .google-button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .primary-button:hover {
        background-color: #0056b3;
    }

    .google-button {
        background-color: white;
        color: #757575;
        border: 1px solid #dadce0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .google-button:hover {
        background-color: #f8f9fa;
    }

    .google-button img {
        width: 18px;
        height: 18px;
    }

    p {
        margin-top: 1rem;
    }

    a {
        color: #007bff;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .google-button-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
</style>
