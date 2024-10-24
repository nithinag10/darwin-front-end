<!-- CustomerInsights.svelte -->
<script>
    // Add any necessary imports or logic here
</script>

<section class="customer-insights">
    <div class="content">
        <h2>Unlock Your Market Potential</h2>
        <div class="features">
            <div class="feature">
                <span class="icon">👥</span>
                <h3>Define Your Target Audience</h3>
                <p>
                    Specify your ideal customer demographics and psychographics
                </p>
            </div>
            <div class="feature">
                <span class="icon">💡</span>
                <h3>Describe Your Business Idea</h3>
                <p>Outline your product or service concept in detail</p>
            </div>
            <div class="feature">
                <span class="icon">💬</span>
                <h3>Engage with AI Customers</h3>
                <p>Get insights and chat with simulated potential customers</p>
            </div>
        </div>
        <a href="#" class="cta">Start Your Market Research</a>
    </div>
    <!-- <div class="visual">
        <div class="chat-window">
            <div class="chat-header">
                <span>AI Customer Chat</span>
            </div>
            <div class="chat-messages">
                <div class="message">
                    Hi! I'm interested in your product. Can you tell me more?
                </div>
                <div class="message user">
                    Sure! Our product helps validate business ideas quickly...
                </div>
                <div class="message">
                    That sounds interesting! How does it work exactly?
                </div>
            </div>
        </div>
    </div> -->
</section>

<style>
    .customer-insights {
        background-color: #fff1f1;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        text-align: center;
        max-width: 1200px;
        margin-bottom: 3rem;
    }

    h2 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 2rem;
    }

    .features {
        display: flex;
        justify-content: space-around;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .feature {
        flex: 1;
        background-color: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .icon {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: #666;
    }

    .cta {
        background-color: #ff6347;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
        transition: background-color 0.3s ease;
        display: inline-block;
        margin-top: 1rem;
    }

    .cta:hover {
        background-color: #ff4500;
    }

    .visual {
        width: 100%;
        max-width: 400px;
    }

    .chat-window {
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .chat-header {
        background-color: #ff6347;
        color: white;
        padding: 0.5rem 1rem;
        font-weight: bold;
    }

    .chat-messages {
        padding: 1rem;
    }

    .message {
        background-color: #f0f0f0;
        padding: 0.5rem 1rem;
        border-radius: 15px;
        margin-bottom: 0.5rem;
    }

    .message.user {
        background-color: #ff6347;
        color: white;
        align-self: flex-end;
    }
</style>
