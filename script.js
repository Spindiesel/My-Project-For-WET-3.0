let selected = [];
let isHeated = false;
let temperature = 25; // Default room temperature

function selectChem(c) {
  if (selected.length < 2) {
    selected.push(c);
    document.getElementById("beakerText").innerText = selected.join(" + ");
  }
}

function mix() {
  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");
  let beaker = document.getElementById("beaker");

  let combo = selected.sort().join("-");
  let isGas = false;
  let reactionType = 'none';

  if (combo === "acid-base") {
    result.innerText = "Salt + Water";
    explanation.innerText = "Neutralization reaction: HCl + NaOH → NaCl + H₂O. Acids and bases react to form salt and water, releasing heat.";
    reactionType = 'neutralization';
  } 
  else if (combo === "acid-metal") {
    result.innerText = "Hydrogen Gas + Salt";
    explanation.innerText = "Metal displacement reaction: Zn + 2HCl → ZnCl₂ + H₂. Active metals react with acids to produce hydrogen gas and metal salts.";
    isGas = true;
    reactionType = 'gas';
  }
  else if (combo === "acid-carbonate") {
    result.innerText = "CO2 + Water + Salt";
    explanation.innerText = "Acid-carbonate reaction: 2HCl + CaCO₃ → CaCl₂ + CO₂ + H₂O. Acids react with carbonates to release carbon dioxide gas.";
    isGas = true;
    reactionType = 'gas';
  }
  else if (combo === "salt-water") {
    result.innerText = "Salt Solution";
    explanation.innerText = "Dissolution: NaCl(s) → Na⁺(aq) + Cl⁻(aq). Ionic compounds dissolve in polar solvents like water through hydration.";
    reactionType = 'dissolution';
  }
  else if (combo === "acid-water") {
    result.innerText = "Dilute Acid";
    explanation.innerText = "Dilution: Concentrated acid is diluted with water. Always add acid to water, never water to acid.";
    reactionType = 'dilution';
  }
  else if (combo === "base-water") {
    result.innerText = "Dilute Base";
    explanation.innerText = "Base is diluted with water.";
    reactionType = 'dilution';
  }
  else if (combo === "hydrogen-oxygen") {
    if (temperature > 500) {
      result.innerText = "Water";
      explanation.innerText = "Combustion: 2H₂ + O₂ → 2H₂O. Hydrogen burns in oxygen to form water vapor, releasing energy.";
      reactionType = 'combustion';
    } else {
      result.innerText = "No reaction";
      explanation.innerText = "Hydrogen and oxygen are stable at room temperature. High temperature or catalyst needed for reaction.";
    }
  }
  else if (selected.length === 1 && selected[0] === "water" && temperature >= 100) {
    result.innerText = "Steam";
    explanation.innerText = "Boiling: H₂O(l) → H₂O(g). Water changes from liquid to gas at 100°C (at sea level).";
    isGas = true;
    reactionType = 'boiling';
  }
  else if (selected.length === 1 && selected[0] === "sugar" && temperature > 150) {
    result.innerText = "Caramel";
    explanation.innerText = "Caramelization: C₁₂H₂₂O₁₁ → complex compounds. Sugar decomposes when heated, forming brown caramel compounds.";
    reactionType = 'caramelization';
  }
  else if (selected.length === 1 && selected[0] === "sodium" && temperature >= 98) {
    if (temperature >= 883) {
      result.innerText = "Sodium Vapor";
      explanation.innerText = "Boiling: Na(s) → Na(g). Sodium boils at 883°C.";
      isGas = true;
      reactionType = 'boiling';
    } else {
      result.innerText = "Molten Sodium";
      explanation.innerText = "Melting: Na(s) → Na(l). Sodium melts at 98°C.";
      reactionType = 'melting';
    }
  }
  else if (selected.length === 1 && selected[0] === "ethanol" && temperature >= 78) {
    result.innerText = "Ethanol Vapor";
    explanation.innerText = "Boiling: C₂H₅OH(l) → C₂H₅OH(g). Ethanol boils at 78°C.";
    isGas = true;
    reactionType = 'boiling';
  }
  else if (selected.length === 1 && selected[0] === "vinegar" && temperature >= 118) {
    result.innerText = "Acetic Acid Vapor";
    explanation.innerText = "Boiling: CH₃COOH(l) → CH₃COOH(g). Acetic acid boils at 118°C.";
    isGas = true;
    reactionType = 'boiling';
  }
  else if (selected.length === 1 && selected[0] === "metal" && temperature >= 419.53) {
    if (temperature >= 907) {
      result.innerText = "Zinc Vapor";
      explanation.innerText = "Boiling: Zn(s) → Zn(g). Zinc boils at 907°C.";
      isGas = true;
      reactionType = 'boiling';
    } else {
      result.innerText = "Molten Zinc";
      explanation.innerText = "Melting: Zn(s) → Zn(l). Zinc melts at 419.53°C.";
      reactionType = 'melting';
    }
  }
  else if (selected.length === 1 && selected[0] === "carbonate" && temperature >= 840) {
    result.innerText = "Calcium Oxide + CO2";
    explanation.innerText = "Thermal decomposition: CaCO₃(s) → CaO(s) + CO₂(g). Calcium carbonate decomposes at around 840°C.";
    isGas = true;
    reactionType = 'decomposition';
  }
  else if (selected.length === 1 && selected[0] === "salt" && temperature >= 801) {
    if (temperature >= 1413) {
      result.innerText = "Sodium Chloride Vapor";
      explanation.innerText = "Boiling: NaCl(s) → NaCl(g). Sodium chloride boils at 1413°C.";
      isGas = true;
      reactionType = 'boiling';
    } else {
      result.innerText = "Molten Sodium Chloride";
      explanation.innerText = "Melting: NaCl(s) → NaCl(l). Sodium chloride melts at 801°C.";
      reactionType = 'melting';
    }
  }
  else if (selected.length === 1 && selected[0] === "base" && temperature >= 318) {
    if (temperature >= 1388) {
      result.innerText = "Sodium Hydroxide Vapor";
      explanation.innerText = "Boiling: NaOH(s) → NaOH(g). Sodium hydroxide boils at 1388°C.";
      isGas = true;
      reactionType = 'boiling';
    } else {
      result.innerText = "Molten Sodium Hydroxide";
      explanation.innerText = "Melting: NaOH(s) → NaOH(l). Sodium hydroxide melts at 318°C.";
      reactionType = 'melting';
    }
  }
  else if (combo === "copper-acid") {
    result.innerText = "Copper Sulfate + Hydrogen";
    explanation.innerText = "Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O. Copper reacts slowly with concentrated sulfuric acid.";
    isGas = true;
    reactionType = 'gas';
  }
  else if (combo === "iron-acid") {
    result.innerText = "Iron Sulfate + Hydrogen";
    explanation.innerText = "Fe + 2HCl → FeCl₂ + H₂. Iron reacts with hydrochloric acid to produce hydrogen gas.";
    isGas = true;
    reactionType = 'gas';
  }
  else if (combo === "sodium-water") {
    result.innerText = "Sodium Hydroxide + Hydrogen";
    explanation.innerText = "2Na + 2H₂O → 2NaOH + H₂. Sodium reacts vigorously with water, producing hydrogen gas and sodium hydroxide.";
    isGas = true;
    reactionType = 'gas';
  }
  else if (combo === "chlorine-sodium") {
    result.innerText = "Sodium Chloride";
    explanation.innerText = "2Na + Cl₂ → 2NaCl. Sodium and chlorine react violently to form table salt.";
    reactionType = 'neutralization';
  }
  else if (combo === "ethanol-oxygen" && temperature > 400) {
    result.innerText = "CO2 + Water";
    explanation.innerText = "Combustion: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Ethanol burns in oxygen to produce carbon dioxide and water.";
    isGas = true;
    reactionType = 'combustion';
  }
  else if (combo === "vinegar-base") {
    result.innerText = "Salt + Water";
    explanation.innerText = "CH₃COOH + NaOH → CH₃COONa + H₂O. Acetic acid in vinegar neutralizes with base to form sodium acetate.";
    reactionType = 'neutralization';
  }
  else {
    result.innerText = "No reaction";
    explanation.innerText = "";
    reactionType = 'none';
  }

  // Add mixing animation
  beaker.classList.add('mixing');
  setTimeout(() => beaker.classList.remove('mixing'), 1000);

  animate(isGas, reactionType);

  selected = [];
  document.getElementById("beakerText").innerText = "Add chemicals";
}

function animate(isGas, reactionType) {
  let beaker = document.getElementById("beaker");
  let bubbles = document.getElementById("bubbles");
  let particles = document.getElementById("particles");

  // Reset
  beaker.classList.remove('reacting');
  particles.innerHTML = '';

  // Color based on reaction
  let color = "rgba(255,255,255,0.1)";
  if (reactionType === 'neutralization') color = "#22c55e";
  else if (reactionType === 'gas') color = "#f59e0b";
  else if (reactionType === 'dissolution') color = "#3b82f6";
  else if (reactionType === 'dilution') color = "#8b5cf6";
  else if (reactionType === 'combustion') color = "#ef4444";
  else if (reactionType === 'boiling') color = "#06b6d4";
  else if (reactionType === 'caramelization') color = "#d97706";
  else if (reactionType === 'melting') color = "#fbbf24";
  else if (reactionType === 'decomposition') color = "#dc2626";

  beaker.style.background = color;

  // Add reacting shake
  if (reactionType !== 'none') {
    beaker.classList.add('reacting');
    setTimeout(() => beaker.classList.remove('reacting'), 500);
  }

  // Bubbles for gas
  if (isGas) {
    bubbles.innerHTML = '<div class="bubble"></div><div class="bubble"></div><div class="bubble"></div><div class="bubble"></div><div class="bubble"></div>';
    bubbles.style.display = 'block';
    setTimeout(() => {
      bubbles.style.display = 'none';
      bubbles.innerHTML = '';
    }, 3000);
  }

  // Particles for special reactions
  if (reactionType === 'combustion' || reactionType === 'caramelization' || reactionType === 'decomposition') {
    for (let i = 0; i < 10; i++) {
      let particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particles.appendChild(particle);
    }
    setTimeout(() => particles.innerHTML = '', 3000);
  }

  // Reset color
  setTimeout(() => {
    beaker.style.background = "rgba(255,255,255,0.1)";
  }, 2000);
}

function updateTemperature() {
  temperature = parseInt(document.getElementById("tempSlider").value);
  document.getElementById("tempValue").innerText = temperature;
  let flame = document.getElementById("flame");

  if (temperature > 25) { // Show flame above room temperature
    flame.style.display = 'block';

    // Calculate flame intensity based on temperature
    // Intensity ranges from 0.3 (just above room temp) to 1.0 (very hot)
    let intensity = Math.min(1.0, 0.3 + (temperature - 25) / 200); // Max intensity at 225°C+

    flame.style.opacity = intensity;

    // Scale flame size based on temperature
    let scale = 0.8 + (intensity - 0.3) * 1.5; // Size from 0.8x to 2.3x
    flame.style.transform = `translateX(-50%) scale(${scale})`;

    // Adjust animation speed for more intense flicker at higher temps
    let animationDuration = Math.max(0.2, 0.5 - (intensity - 0.3) * 0.3);
    flame.style.animation = `flicker ${animationDuration}s infinite alternate`;
  } else {
    flame.style.opacity = '0';
    setTimeout(() => flame.style.display = 'none', 500);
  }
}

function filterChemicals() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let buttons = document.querySelectorAll("#chemicalsList button");
  buttons.forEach(btn => {
    let name = btn.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });
}

function clearBeaker() {
  selected = [];
  document.getElementById("beakerText").innerText = "Add chemicals";
}

function scrollToLab() {
  document.getElementById("lab").scrollIntoView({behavior:"smooth"});
}

// Settings and Theme Functions
function openSettings() {
  document.getElementById('settingsModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Load current settings
  const currentTheme = localStorage.getItem('theme') || 'science';
  const bgAnimation = localStorage.getItem('bgAnimation') !== 'false';
  const soundEffects = localStorage.getItem('soundEffects') === 'true';
  
  // Set active theme
  document.querySelectorAll('.theme-option').forEach(option => {
    option.classList.remove('active');
  });
  document.querySelector(`[data-theme="${currentTheme}"]`).classList.add('active');
  
  // Set toggles
  document.getElementById('bgAnimation').checked = bgAnimation;
  document.getElementById('soundEffects').checked = soundEffects;
}

function closeSettings() {
  document.getElementById('settingsModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function setTheme(theme) {
  // Remove all theme classes
  document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
  
  // Add new theme class
  document.body.classList.add(`theme-${theme}`);
  
  // Update active indicator
  document.querySelectorAll('.theme-option').forEach(option => {
    option.classList.remove('active');
  });
  document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
  
  // Save to localStorage
  localStorage.setItem('theme', theme);
  
  // Update background based on theme
  updateBackgroundForTheme(theme);
}

function updateBackgroundForTheme(theme) {
  const body = document.body;
  const floatingShapes = document.querySelector('.floating-shapes');
  
  // Reset background
  body.style.background = '';
  
  switch(theme) {
    case 'light':
      body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
      if (floatingShapes) floatingShapes.style.opacity = '0.6';
      break;
    case 'dark':
      body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)';
      if (floatingShapes) floatingShapes.style.opacity = '1';
      break;
    case 'science':
      body.style.background = 'radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.15) 0%, transparent 50%), linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)';
      if (floatingShapes) floatingShapes.style.opacity = '1';
      break;
    case 'ocean':
      body.style.background = 'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)';
      if (floatingShapes) floatingShapes.style.opacity = '1';
      break;
  }
}

function toggleBgAnimation() {
  const enabled = document.getElementById('bgAnimation').checked;
  const floatingShapes = document.querySelector('.floating-shapes');
  
  if (floatingShapes) {
    floatingShapes.style.display = enabled ? 'block' : 'none';
  }
  
  localStorage.setItem('bgAnimation', enabled);
}

function toggleSound() {
  const enabled = document.getElementById('soundEffects').checked;
  localStorage.setItem('soundEffects', enabled);
  
  // You can add sound initialization here if you implement audio
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme') || 'science';
  setTheme(savedTheme);
  
  const bgAnimation = localStorage.getItem('bgAnimation') !== 'false';
  if (!bgAnimation) {
    const floatingShapes = document.querySelector('.floating-shapes');
    if (floatingShapes) floatingShapes.style.display = 'none';
  }
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('settingsModal');
    if (event.target === modal) {
      closeSettings();
    }
  }
});

function checkAnswer(questionNum, answer) {
  let correctAnswers = {
    1: 'H2O',
    2: 'CO2',
    3: 'Displacement',
    4: '100°C',
    5: 'CO2 and H2O'
  };
  let result = document.getElementById("quiz-result");
  let questionDiv = document.querySelectorAll('.quiz-question')[questionNum - 1];
  let buttons = questionDiv.querySelectorAll('button');

  // Disable all buttons
  buttons.forEach(btn => {
    btn.classList.add('disabled');
    btn.disabled = true;
  });

  if (answer === correctAnswers[questionNum]) {
    // Find the correct button and make it green
    buttons.forEach(btn => {
      if (btn.innerText === answer) {
        btn.classList.add('correct');
      }
    });
    result.innerText = "Correct! Well done.";
    result.style.color = "#4ade80";
  } else {
    // Make the selected wrong answer red
    buttons.forEach(btn => {
      if (btn.innerText === answer) {
        btn.classList.add('incorrect');
      }
      // Also highlight the correct answer in green
      if (btn.innerText === correctAnswers[questionNum]) {
        btn.classList.add('correct');
      }
    });
    result.innerText = "Incorrect. The correct answer is " + correctAnswers[questionNum] + ".";
    result.style.color = "#f87171";
  }
}

// Drag and Drop functionality
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#chemicalsList button');
  const beaker = document.getElementById('beaker');

  buttons.forEach(btn => {
    btn.draggable = true;
    btn.addEventListener('dragstart', (e) => {
      const chem = btn.onclick.toString().match(/'([^']+)'/)[1];
      e.dataTransfer.setData('text/plain', chem);
      e.dataTransfer.effectAllowed = 'copy';
    });
  });

  beaker.addEventListener('dragover', (e) => {
    e.preventDefault();
    beaker.style.borderColor = '#facc15';
    beaker.style.transform = 'scale(1.05)';
  });

  beaker.addEventListener('dragleave', () => {
    beaker.style.borderColor = 'rgba(255,255,255,0.5)';
    beaker.style.transform = 'scale(1)';
  });

  beaker.addEventListener('drop', (e) => {
    e.preventDefault();
    const chem = e.dataTransfer.getData('text/plain');
    selectChem(chem);
    beaker.style.borderColor = 'rgba(255,255,255,0.5)';
    beaker.style.transform = 'scale(1)';
  });
});
