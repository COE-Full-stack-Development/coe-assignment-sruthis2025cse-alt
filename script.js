const profileCard = document.getElementById("profile-card");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const addSkillBtn = document.getElementById("add-skill-btn");
const skillInput = document.getElementById("skill-input");
const skillsList = document.getElementById("skills-list");

toggleThemeBtn.addEventListener("click", () => {
  profileCard.classList.toggle("dark-theme");
});

addSkillBtn.addEventListener("click", () => {
  const skillText = skillInput.value.trim();

  if (!skillText) {
    return;
  }

  const newSkillItem = document.createElement("li");
  newSkillItem.textContent = skillText;
  skillsList.appendChild(newSkillItem);
  skillInput.value = "";
});
