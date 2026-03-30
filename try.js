
// 1. Initialize Radar Chart
const ctx = document.getElementById('aptitudeRadar');
let traitScores = [20, 20, 20]; // Default: Logic, Creative, Technical

const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Logic', 'Creative', 'Technical'],
        datasets: [{
            data: traitScores,
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            borderColor: '#ffd700',
            pointBackgroundColor: '#ffd700'
        }]
    },
    options: { plugins: { legend: { display: false } }, scales: { r: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { display: false } } } }
});

// 2. Chat Interaction
function updateAptitude(type, label) {
    const chat = document.getElementById('missionChat');
    chat.innerHTML += `<div class="bot-bubble" style="background:var(--bhutan-gold); color:black; border:none; align-self:flex-end;">I choose the ${label}.</div>`;
    
    // Update data based on selection
    if(type === 'logic') traitScores[0] += 25;
    if(type === 'creative') traitScores[1] += 25;
    if(type === 'technical') traitScores[2] += 25;
    
    radarChart.update();
    
    setTimeout(() => {
        chat.innerHTML += `<div class="bot-bubble">Trait recorded. Based on your ${type} focus, you have a high potential for Bhutan's emerging sectors. Check the Bridge below!</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 600);
}

// 3. The Bridge Logic (Crucial for Convincing)
function generateRoadmap() {
    const marks = document.getElementById('class10Marks').value;
    const output = document.getElementById('roadmapOutput');
    output.style.display = "block";
    
    if (marks < 60) {
        output.innerHTML = `
            <h3 style="color:var(--bhutan-gold)">🌉 YOUR BRIDGE PATH: THE SPECIALIST ROUTE</h3>
            <p>Your 10th marks are just a starting point. Since your aptitude is high, follow this <b>Nation Builder</b> path:</p>
            <ul>
                <li><b>Phase 1:</b> Diploma at JNEC (2 Years) - Get your hands on real tech.</li>
                <li><b>Phase 2:</b> Industry Internship in Thimphu/Gelephu.</li>
                <li><b>Phase 3:</b> Lateral Entry to Degree. You graduate with 2 years more experience than others!</li>
            </ul>`;
    } else {
        output.innerHTML = `<h3 style="color:#2ed573">🚀 DIRECT MISSION PATH</h3>
                            <p>Your marks and aptitude align for direct entry. Focus on your portfolio for the 13th Plan scholarships!</p>`;
    }
}

// Persona Data Definitions
const personas = {
    architect: [90, 40, 70],  // High Logic, Med Creative, High Tech
    storyteller: [40, 95, 30], // Med Logic, High Creative, Low Tech
    builder: [50, 30, 95]     // Med Logic, Low Creative, High Tech
};

function testPersona(role) {
    // 1. Update the chart data array
    radarChart.data.datasets[0].data = [...personas[role]];
    
    // 2. Add a message to the chat for context
    const chat = document.getElementById('missionChat');
    chat.innerHTML += `<div class="bot-bubble" style="border-left-color: #2ecc71;">
        <b>SYSTEM:</b> Visualizing the <u>${role.toUpperCase()}</u> profile. This is the ideal trait balance for GMC Phase 1.
    </div>`;
    
    // 3. Animate the chart update
    radarChart.update();
    chat.scrollTop = chat.scrollHeight;
}

function resetRadar() {
    radarChart.data.datasets[0].data = [20, 20, 20];
    radarChart.update();
    
    const chat = document.getElementById('missionChat');
    chat.innerHTML += `<div class="bot-bubble">Data cleared. Let's start fresh, Hero.</div>`;
    chat.scrollTop = chat.scrollHeight;
}
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "light" ? "dark" : "light";
    const icon = document.querySelector(".mode-icon");
    const text = document.getElementById("mode-text");

    document.documentElement.setAttribute("data-theme", targetTheme);
    
    if (targetTheme === "light") {
        icon.innerHTML = "☀️";
        text.innerText = "Light Mode";
        // Update Chart Colors for Light Mode
        radarChart.options.scales.r.grid.color = "rgba(255, 255, 255, 0.1)";
        radarChart.options.scales.r.angleLines.color = "rgba(255, 255, 255, 0.1)";
    } else {
        icon.innerHTML = "🌙";
        text.innerText = "Dark Mode";
        // Update Chart Colors for Dark Mode
        radarChart.options.scales.r.grid.color = "rgba(255,255,255,0.1)";
        radarChart.options.scales.r.angleLines.color = "rgba(255,255,255,0.1)";
    }
    radarChart.update();
}