<script>
    import logo from "../asset/logo.svg";
</script>

<footer>
    <div class="footer-content">
        <div class="company-info">
            <img src={logo} alt="LemonSoda.ai Logo" class="logo" />
            <p>
                EmotiAI: Revolutionizing user experience through emotion-driven
                AI insights.
            </p>
            <p>Contact: info@emotiai.com | +1 (555) 123-4567</p>
        </div>
        <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#demo">Demo</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="copyright">© 2023 EmotiAI. All rights reserved.</div>
</footer>

<style>
    footer {
        background-color: #f7f7f7;
        color: #333333;
        padding: 3rem 2rem 1rem;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }

    .company-info {
        flex: 1 1 300px;
    }

    .logo {
        height: 2.5rem;
        margin-bottom: 1rem;
    }

    .footer-links {
        flex: 1 1 200px;
    }

    .footer-links h3 {
        font-family: "Lora", serif;
        margin-bottom: 1rem;
        color: #333333;
    }

    .footer-links ul {
        list-style-type: none;
        padding: 0;
    }

    .footer-links li {
        margin-bottom: 0.5rem;
    }

    .footer-links a {
        color: #555555;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-links a:hover {
        color: #007bff;
    }

    .cta-container {
        flex: 1 1 200px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }

    .copyright {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #e0e0e0;
        color: #555555;
    }

    @media (max-width: 768px) {
        .footer-content {
            flex-direction: column;
        }

        .cta-container {
            justify-content: flex-start;
            margin-top: 1rem;
        }

        button {
            width: 100%;
        }
    }
</style>
