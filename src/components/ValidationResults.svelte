<!-- src/components/ValidationResults.svelte -->
<script>
    import { onMount } from "svelte";
    export let validationResult;

    const ratings = {
        0: "❌",
        1: "⭐️",
        2: "⭐️⭐️",
        3: "⭐️⭐️⭐️",
        4: "⭐️⭐️⭐️⭐️",
        5: "⭐️⭐️⭐️⭐️⭐️",
        6: "⭐️⭐️⭐️⭐️⭐️⭐️",
        7: "⭐️⭐️⭐️⭐️⭐️⭐️⭐️",
        8: "⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️",
        9: "⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️",
        10: "⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️",
    };

    let showChat = false;
    let messages = [
        {
            type: "ai",
            content:
                "Hi there! I'm your AI business expert, here to help you validate and refine your business idea. Feel free to ask me any questions about the validation results or your business concept in general. How can I assist you today?",
        },
    ];
    let newMessage = "";
    let remainingMessages = 7; // Start with 7 messages
    let chatSessionId = null;

    async function createPersonaChat() {
        try {
            const response = await fetch(
                "https://web-aca-app.ambitiousplant-60435fdc.westus2.azurecontainerapps.io/create-persona-chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        session_id: validationResult.session_id,
                        // Add any other required parameters here
                    }),
                },
            );

            if (!response.ok) {
                throw new Error("Failed to create persona chat");
            }

            const data = await response.json();
            chatSessionId = data.chat_session_id; // Assuming the API returns a chat_session_id
        } catch (error) {
            console.error("Error creating persona chat:", error);
            messages = [
                ...messages,
                {
                    type: "error",
                    content: "Failed to initialize chat. Please try again.",
                },
            ];
        }
    }

    async function sendMessage() {
        if (newMessage.trim() === "") return;

        messages = [...messages, { type: "user", content: newMessage }];
        const userMessage = newMessage;
        newMessage = "";

        try {
            const response = await fetch(
                `https://web-aca-app.ambitiousplant-60435fdc.westus2.azurecontainerapps.io/chat/${chatSessionId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message: userMessage }),
                },
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            messages = [...messages, { type: "ai", content: data.response }];
            remainingMessages = data.remaining_messages;
        } catch (error) {
            console.error("Error:", error);
            messages = [
                ...messages,
                {
                    type: "error",
                    content: "Failed to send message. Please try again.",
                },
            ];
        }
    }

    function toggleChat() {
        if (!showChat && !chatSessionId) {
            createPersonaChat();
        }
        showChat = !showChat;
    }

    onMount(() => {
        // Scroll to the bottom of the chat window when new messages are added
        const chatMessages = document.querySelector(".chat-messages");
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
</script>

<div class="validation-results">
    <h2>Validation Results</h2>
    <div class="session-id">Session ID: {validationResult.session_id}</div>

    <section class="refined-idea">
        <h3>Refined Business Idea</h3>
        <p>{validationResult.refined_business_idea}</p>
    </section>

    <section class="business-expert-report">
        <h3>Business Expert Report</h3>

        <div class="report-item">
            <h4>
                Key Insights {ratings[
                    validationResult.business_expert_report.keyInsightsRating
                ]}
            </h4>
            <p>{validationResult.business_expert_report.keyInsights}</p>
        </div>

        <div class="report-item">
            <h4>
                Strengths {ratings[
                    validationResult.business_expert_report.strengthsRating
                ]}
            </h4>
            <p>{validationResult.business_expert_report.strengths}</p>
        </div>

        <div class="report-item">
            <h4>
                Weaknesses {ratings[
                    validationResult.business_expert_report.weaknessesRating
                ]}
            </h4>
            <p>{validationResult.business_expert_report.weaknesses}</p>
        </div>

        <div class="report-item">
            <h4>
                Opportunities {ratings[
                    validationResult.business_expert_report.opportunitiesRating
                ]}
            </h4>
            <p>{validationResult.business_expert_report.opportunities}</p>
        </div>

        <div class="report-item">
            <h4>
                Market Analysis {ratings[
                    validationResult.business_expert_report.marketAnalysisRating
                ]}
            </h4>
            <p>{validationResult.business_expert_report.marketAnalysis}</p>
        </div>

        <div class="report-item">
            <h4>
                Differentiation Strategies {ratings[
                    validationResult.business_expert_report
                        .differentiationStrategiesRating
                ]}
            </h4>
            <p>
                {validationResult.business_expert_report
                    .differentiationStrategies}
            </p>
        </div>

        <div class="report-item">
            <h4>
                Strategic Recommendations {ratings[
                    validationResult.business_expert_report
                        .strategicRecommendationsRating
                ]}
            </h4>
            <p>
                {validationResult.business_expert_report
                    .strategicRecommendations}
            </p>
        </div>

        <div class="report-item">
            <h4>
                Important Trends {ratings[
                    validationResult.business_expert_report
                        .importantTrendsRating
                ]}
            </h4>
            <p>{validationResult.business_expert_report.importantTrends}</p>
        </div>
    </section>
</div>

<div class="chat-container">
    <button class="chat-toggle" on:click={toggleChat}>
        {showChat ? "Close Chat" : "Chat with AI Expert"}
    </button>

    {#if showChat}
        <div class="chat-window">
            <div class="chat-messages">
                {#each messages as message}
                    <div class="message {message.type}">
                        {message.content}
                    </div>
                {/each}
            </div>
            <form on:submit|preventDefault={sendMessage} class="chat-input">
                <input
                    type="text"
                    bind:value={newMessage}
                    placeholder="Type your message..."
                    disabled={remainingMessages === 0}
                />
                <button type="submit" disabled={remainingMessages === 0}
                    >Send</button
                >
            </form>
            <div class="remaining-messages">
                Remaining messages: {remainingMessages}
            </div>
        </div>
    {/if}
</div>

<style>
    .validation-results {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 2.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
        text-align: center;
    }

    .session-id {
        text-align: center;
        font-size: 0.9rem;
        color: #718096;
        margin-bottom: 2rem;
    }

    section {
        margin-bottom: 2rem;
    }

    h3 {
        font-family: "Playfair Display", serif;
        font-size: 1.8rem;
        color: #2d3748;
        margin-bottom: 1rem;
        border-bottom: 2px solid #ff6347;
        padding-bottom: 0.5rem;
    }

    .report-item {
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
        color: #4a5568;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
    }

    h4::after {
        content: attr(data-rating);
        margin-left: 0.5rem;
        font-size: 0.9rem;
    }

    p {
        color: #4a5568;
        line-height: 1.6;
    }

    .chat-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }

    .chat-toggle {
        background-color: #ff6347;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .chat-window {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 400px;
        height: 600px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .chat-messages {
        flex-grow: 1;
        overflow-y: auto;
        padding: 20px;
    }

    .message {
        margin-bottom: 15px;
        padding: 10px 15px;
        border-radius: 5px;
        max-width: 80%;
    }

    .user {
        background-color: #e6f3ff;
        align-self: flex-end;
        margin-left: auto;
    }

    .ai {
        background-color: #f0f0f0;
        align-self: flex-start;
    }

    .error {
        background-color: #ffe6e6;
        color: #ff0000;
    }

    .chat-input {
        display: flex;
        padding: 15px;
        border-top: 1px solid #ccc;
    }

    .chat-input input {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 14px;
    }

    .chat-input button {
        margin-left: 10px;
        padding: 10px 20px;
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 14px;
    }

    .remaining-messages {
        text-align: center;
        font-size: 0.9em;
        color: #666;
        padding: 10px;
        border-top: 1px solid #ccc;
    }
</style>
