<script>
    import { fade, scale } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    const dispatch = createEventDispatcher();

    let personas = [
        {
            id: 1,
            name: "Tech-Savvy Professional",
            emoji: "💻",
            summary:
                "Experienced in using modern technology and expects seamless experiences.",
            industry: "Technology",
            demographics: {
                age: "25-40",
                gender: "Any",
                location: "Urban",
                occupation: "Software Developer",
            },
            traits: [
                "High tech proficiency",
                "Values efficiency",
                "Early adopter",
            ],
            goals: ["Streamline workflows", "Stay ahead of tech trends"],
            painPoints: ["Complex interfaces", "Slow performance"],
            emotionalTendencies: [
                "Impatient with inefficiencies",
                "Excited by innovation",
            ],
        },
        {
            id: 2,
            name: "First-Time User",
            emoji: "🆕",
            summary:
                "New to the product and may need extra guidance and support.",
            industry: "Education",
            demographics: {
                age: "18-65",
                gender: "Any",
                location: "Various",
                occupation: "Student",
            },
            traits: ["Curious", "Potentially hesitant", "Learning-oriented"],
            goals: ["Understand basic functionality", "Achieve quick wins"],
            painPoints: ["Overwhelming features", "Lack of clear instructions"],
            emotionalTendencies: [
                "Easily frustrated",
                "Delighted by small successes",
            ],
        },
        {
            id: 3,
            name: "Senior Executive",
            emoji: "👔",
            summary:
                "Busy decision-maker looking for high-level insights and efficiency.",
            industry: "Finance",
            demographics: {
                age: "45-60",
                gender: "Any",
                location: "Urban",
                occupation: "CFO",
            },
            traits: ["Strategic thinker", "Time-constrained", "Results-driven"],
            goals: ["Maximize ROI", "Streamline operations"],
            painPoints: ["Information overload", "Difficulty delegating tasks"],
            emotionalTendencies: [
                "Stressed by deadlines",
                "Satisfied by clear metrics",
            ],
        },
        {
            id: 4,
            name: "Creative Professional",
            emoji: "🎨",
            summary:
                "Visually-oriented user seeking intuitive and inspiring tools.",
            industry: "Design",
            demographics: {
                age: "22-45",
                gender: "Any",
                location: "Urban",
                occupation: "Graphic Designer",
            },
            traits: [
                "Visually-driven",
                "Appreciates aesthetics",
                "Collaborative",
            ],
            goals: ["Enhance creativity", "Simplify complex processes"],
            painPoints: [
                "Uninspiring interfaces",
                "Limited customization options",
            ],
            emotionalTendencies: [
                "Frustrated by constraints",
                "Inspired by novel solutions",
            ],
        },
        {
            id: 5,
            name: "Small Business Owner",
            emoji: "🏪",
            summary:
                "Entrepreneur juggling multiple responsibilities and seeking cost-effective solutions.",
            industry: "Retail",
            demographics: {
                age: "30-55",
                gender: "Any",
                location: "Suburban",
                occupation: "Store Owner",
            },
            traits: ["Resourceful", "Budget-conscious", "Multitasker"],
            goals: ["Increase efficiency", "Grow customer base"],
            painPoints: ["Limited resources", "Time management challenges"],
            emotionalTendencies: [
                "Anxious about competition",
                "Proud of business growth",
            ],
        },
        {
            id: 6,
            name: "Healthcare Professional",
            emoji: "⚕️",
            summary:
                "Dedicated practitioner focused on patient care and medical accuracy.",
            industry: "Healthcare",
            demographics: {
                age: "28-60",
                gender: "Any",
                location: "Various",
                occupation: "Nurse Practitioner",
            },
            traits: ["Detail-oriented", "Empathetic", "Continuous learner"],
            goals: ["Improve patient outcomes", "Streamline documentation"],
            painPoints: [
                "Time-consuming data entry",
                "Complex regulatory compliance",
            ],
            emotionalTendencies: [
                "Stressed by high-stakes decisions",
                "Fulfilled by helping others",
            ],
        },
        {
            id: 7,
            name: "Remote Worker",
            emoji: "🏠",
            summary:
                "Professional adapting to remote work environments and digital collaboration tools.",
            industry: "Various",
            demographics: {
                age: "22-50",
                gender: "Any",
                location: "Global",
                occupation: "Digital Marketer",
            },
            traits: [
                "Self-motivated",
                "Tech-adaptable",
                "Communication-focused",
            ],
            goals: ["Maintain productivity", "Balance work-life integration"],
            painPoints: [
                "Isolation",
                "Technical difficulties with remote tools",
            ],
            emotionalTendencies: [
                "Anxious about staying connected",
                "Appreciative of flexibility",
            ],
        },
        {
            id: 8,
            name: "Manufacturing Manager",
            emoji: "🏭",
            summary:
                "Oversees production processes and seeks to optimize efficiency and quality.",
            industry: "Manufacturing",
            demographics: {
                age: "35-55",
                gender: "Any",
                location: "Industrial areas",
                occupation: "Plant Manager",
            },
            traits: [
                "Process-oriented",
                "Safety-conscious",
                "Efficiency-driven",
            ],
            goals: [
                "Increase production efficiency",
                "Reduce waste and errors",
            ],
            painPoints: ["Equipment downtime", "Supply chain disruptions"],
            emotionalTendencies: [
                "Proud of quality output",
                "Stressed by production delays",
            ],
        },
        {
            id: 9,
            name: "Startup Founder",
            emoji: "🚀",
            summary:
                "Ambitious entrepreneur seeking scalable solutions for rapid growth.",
            industry: "Technology",
            demographics: {
                age: "25-40",
                gender: "Any",
                location: "Urban",
                occupation: "CEO",
            },
            traits: ["Risk-taker", "Innovative", "Adaptable"],
            goals: ["Secure funding", "Achieve product-market fit"],
            painPoints: ["Limited resources", "Fierce competition"],
            emotionalTendencies: [
                "Excited by possibilities",
                "Stressed about uncertainty",
            ],
        },
        {
            id: 10,
            name: "Educator",
            emoji: "🍎",
            summary:
                "Dedicated teacher looking for tools to enhance student engagement and learning outcomes.",
            industry: "Education",
            demographics: {
                age: "30-55",
                gender: "Any",
                location: "Various",
                occupation: "High School Teacher",
            },
            traits: ["Patient", "Creative", "Tech-curious"],
            goals: ["Improve student engagement", "Streamline lesson planning"],
            painPoints: [
                "Limited classroom resources",
                "Diverse learning needs",
            ],
            emotionalTendencies: [
                "Passionate about student success",
                "Frustrated by administrative burdens",
            ],
        },
        {
            id: 11,
            name: "Retiree",
            emoji: "🌴",
            summary:
                "Senior individual exploring technology for personal interests and staying connected.",
            industry: "Various",
            demographics: {
                age: "65+",
                gender: "Any",
                location: "Suburban",
                occupation: "Retired",
            },
            traits: ["Curious", "Patient", "Value-oriented"],
            goals: ["Stay connected with family", "Pursue hobbies"],
            painPoints: [
                "Complex interfaces",
                "Concerns about online security",
            ],
            emotionalTendencies: [
                "Excited to learn new things",
                "Cautious about technology",
            ],
        },
        {
            id: 12,
            name: "Freelance Content Creator",
            emoji: "📸",
            summary:
                "Independent professional producing various forms of digital content.",
            industry: "Media",
            demographics: {
                age: "22-40",
                gender: "Any",
                location: "Various",
                occupation: "Content Creator",
            },
            traits: ["Creative", "Self-motivated", "Trend-aware"],
            goals: ["Grow audience", "Monetize content"],
            painPoints: ["Inconsistent income", "Platform algorithm changes"],
            emotionalTendencies: [
                "Thrilled by viral content",
                "Anxious about platform dependence",
            ],
        },
    ];

    let filteredPersonas = personas;
    let selectedPersona = null;

    // Filter options
    let industries = [...new Set(personas.map((p) => p.industry))];
    let ageRanges = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
    let locations = [...new Set(personas.map((p) => p.demographics.location))];
    let selectedIndustry = "";
    let selectedAgeRange = "";
    let selectedLocation = "";

    $: {
        filteredPersonas = personas.filter((persona) => {
            let industryMatch =
                !selectedIndustry || persona.industry === selectedIndustry;
            let ageMatch =
                !selectedAgeRange ||
                isInAgeRange(persona.demographics.age, selectedAgeRange);
            let locationMatch =
                !selectedLocation ||
                persona.demographics.location === selectedLocation;
            return industryMatch && ageMatch && locationMatch;
        });
    }

    function isInAgeRange(personaAge, selectedRange) {
        let [min, max] = selectedRange.split("-").map(Number);

        let [personaMin, personaMax] = personaAge.split("-").map(Number);
        return (
            (personaMin >= min && personaMax <= max) ||
            (personaMin <= min && personaMax >= max)
        );
    }

    function openPersonaModal(persona) {
        selectedPersona = persona;
    }

    function closePersonaModal() {
        selectedPersona = null;
    }

    function selectPersona(persona) {
        // Assuming you have a modal component or function to show the modal
        showModal({
            title: persona.name,
            content: `
                <div class="persona-modal-content">
                    <span class="persona-emoji">${persona.emoji}</span>
                    <p><strong>Summary:</strong> ${persona.summary}</p>
                    <p><strong>Industry:</strong> ${persona.industry}</p>
                    <p><strong>Demographics:</strong></p>
                    <ul>
                        <li>Age: ${persona.demographics.age}</li>
                        <li>Gender: ${persona.demographics.gender}</li>
                        <li>Location: ${persona.demographics.location}</li>
                        <li>Occupation: ${persona.demographics.occupation}</li>
                    </ul>
                    <p><strong>Traits:</strong> ${persona.traits.join(", ")}</p>
                    <p><strong>Goals:</strong> ${persona.goals.join(", ")}</p>
                    <p><strong>Pain Points:</strong> ${persona.painPoints.join(", ")}</p>
                    <p><strong>Emotional Tendencies:</strong> ${persona.emotionalTendencies.join(", ")}</p>
                </div>
            `,
            onConfirm: () => {
                dispatch("select", { persona });
            },
        });
    }
</script>

<Header />

<main class="ai-persona-selection">
    <div class="container">
        <div class="header">
            <h1>
                Select Your <span class="highlight">AI Customer Persona</span>
            </h1>
            <div class="subheader">
                <div class="line"></div>
                <p class="description">
                    Simulate user interactions & uncover insights
                </p>
                <div class="line"></div>
            </div>
        </div>

        <div class="filters">
            <select bind:value={selectedIndustry}>
                <option value="">All Industries</option>
                {#each industries as industry}
                    <option value={industry}>{industry}</option>
                {/each}
            </select>
            <select bind:value={selectedAgeRange}>
                <option value="">All Age Ranges</option>
                {#each ageRanges as range}
                    <option value={range}>{range}</option>
                {/each}
            </select>
            <select bind:value={selectedLocation}>
                <option value="">All Locations</option>
                {#each locations as location}
                    <option value={location}>{location}</option>
                {/each}
            </select>
        </div>

        <div class="persona-grid">
            {#each filteredPersonas as persona (persona.id)}
                <div
                    class="persona-card"
                    on:click={() => openPersonaModal(persona)}
                >
                    <span class="persona-emoji">{persona.emoji}</span>
                    <h3>{persona.name}</h3>
                    <p>{persona.summary}</p>
                    <span class="industry-tag">{persona.industry}</span>
                </div>
            {/each}
        </div>

        <div class="coming-soon">
            <h2>Coming Soon</h2>
            <div class="features">
                <div class="feature">
                    <h3>Custom Persona Creation</h3>
                    <p>
                        Create your own AI customer persona with our guided
                        step-by-step process.
                    </p>
                </div>
                <div class="feature">
                    <h3>Edit Existing Personas</h3>
                    <p>
                        Customize predefined personas to better fit your target
                        audience.
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>

{#if selectedPersona}
    <div class="modal-overlay" on:click={closePersonaModal} transition:fade>
        <div class="modal-content" on:click|stopPropagation transition:scale>
            <button class="close-button" on:click={closePersonaModal}
                >&times;</button
            >
            <div class="modal-header">
                <span class="modal-emoji">{selectedPersona.emoji}</span>
                <div>
                    <h2>{selectedPersona.name}</h2>
                    <p class="modal-summary">{selectedPersona.summary}</p>
                    <span class="modal-industry-tag"
                        >{selectedPersona.industry}</span
                    >
                </div>
            </div>

            <div class="modal-body">
                <div class="modal-section">
                    <h3>Demographics</h3>
                    <ul>
                        <li>
                            <strong>Age:</strong>
                            {selectedPersona.demographics.age}
                        </li>
                        <li>
                            <strong>Gender:</strong>
                            {selectedPersona.demographics.gender}
                        </li>
                        <li>
                            <strong>Location:</strong>
                            {selectedPersona.demographics.location}
                        </li>
                        <li>
                            <strong>Occupation:</strong>
                            {selectedPersona.demographics.occupation}
                        </li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>Traits</h3>
                    <ul class="traits-list">
                        {#each selectedPersona.traits as trait}
                            <li>{trait}</li>
                        {/each}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>Goals</h3>
                    <ul class="goals-list">
                        {#each selectedPersona.goals as goal}
                            <li>{goal}</li>
                        {/each}
                    </ul>
                </div>
            </div>

            <button
                class="select-button"
                on:click={() => selectPersona(selectedPersona)}
            >
                Select This Persona
            </button>
        </div>
    </div>
{/if}

<Footer />

<style>
    .ai-persona-selection {
        background-color: #f8fafc;
        padding: 3rem 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .header {
        text-align: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-family: "Playfair Display", serif;
        font-size: 3rem;
        color: #2d3748;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .highlight {
        color: #4299e1;
        position: relative;
        display: inline-block;
    }

    .highlight::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #4299e1;
        border-radius: 2px;
    }

    .subheader {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .line {
        flex-grow: 1;
        height: 1px;
        background-color: #cbd5e0;
        max-width: 100px;
    }

    .description {
        color: #718096;
        font-size: 1.1rem;
        margin: 0 1rem;
        font-style: italic;
    }

    .filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    select {
        padding: 0.5rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        background-color: white;
        font-family: "Nunito", sans-serif;
        font-size: 0.9rem;
        color: #4a5568;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    select:hover,
    select:focus {
        border-color: #4299e1;
        outline: none;
        box-shadow: 0 4px 6px rgba(66, 153, 225, 0.1);
    }

    .persona-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .persona-card {
        background-color: white;
        border-radius: 12px;
        padding: 1.25rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        overflow: hidden;
    }

    .persona-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }

    .persona-emoji {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-family: "Playfair Display", serif;
        font-size: 1.1rem;
        color: #2d3748;
        margin-bottom: 0.5rem;
    }

    .persona-card p {
        color: #4a5568;
        font-size: 0.85rem;
        line-height: 1.4;
        margin-bottom: 0.75rem;
    }

    .industry-tag {
        display: inline-block;
        background-color: #edf2f7;
        color: #4a5568;
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .coming-soon {
        background-color: #edf2f7;
        border-radius: 12px;
        padding: 1.5rem;
        margin-top: 3rem;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .coming-soon h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
    }

    .features {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .feature {
        flex: 1;
        min-width: 200px;
        background-color: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .feature h3 {
        font-size: 1rem;
        color: #4a5568;
        margin-bottom: 0.5rem;
    }

    .feature p {
        color: #718096;
        font-size: 0.85rem;
        line-height: 1.4;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: white;
        border-radius: 16px;
        padding: 2rem;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: #4a5568;
        transition: color 0.3s ease;
    }

    .close-button:hover {
        color: #2d3748;
    }

    .modal-header {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
    }

    .modal-emoji {
        font-size: 4rem;
        margin-right: 1.5rem;
    }

    .modal-content h2 {
        font-family: "Playfair Display", serif;
        font-size: 2rem;
        color: #2d3748;
        margin-bottom: 0.5rem;
    }

    .modal-summary {
        color: #4a5568;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .modal-industry-tag {
        display: inline-block;
        background-color: #ebf4ff;
        color: #4299e1;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .modal-body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .modal-section {
        background-color: #f7fafc;
        border-radius: 8px;
        padding: 1rem;
    }

    .modal-content h3 {
        font-family: "Playfair Display", serif;
        font-size: 1.2rem;
        color: #2d3748;
        margin-bottom: 0.75rem;
        border-bottom: 2px solid #4299e1;
        padding-bottom: 0.25rem;
        display: inline-block;
    }

    .modal-content ul {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
    }

    .modal-content li {
        font-size: 0.9rem;
        color: #4a5568;
        margin-bottom: 0.5rem;
    }

    .traits-list,
    .goals-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .traits-list li,
    .goals-list li {
        background-color: #e2e8f0;
        color: #4a5568;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .select-button {
        display: block;
        width: 100%;
        padding: 0.75rem;
        background-color: #4299e1;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: 1.5rem;
    }

    .select-button:hover {
        background-color: #3182ce;
    }

    :global(.persona-modal-content) {
        text-align: left;
    }

    :global(.persona-modal-content .persona-emoji) {
        font-size: 3rem;
        display: block;
        text-align: center;
        margin-bottom: 1rem;
    }

    :global(.persona-modal-content ul) {
        padding-left: 1.5rem;
    }
</style>
