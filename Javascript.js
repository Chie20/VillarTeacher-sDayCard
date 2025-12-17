const defaultConfig = {
  main_message: "Happy Teacher's Day!",
  teacher_name: "Dear Ms. Johnson",
  personal_message:
    "Thank you for inspiring us every day! Your dedication, patience, and wisdom have shaped our minds and hearts.",
  student_name: "Your Students",
  primary_color: "#667eea",
  secondary_color: "#764ba2",
  text_color: "#4b5563",
  font_family: "Georgia",
  font_size: 16
};

function onConfigChange(config) {
  document.getElementById("mainMessage").textContent =
    config.main_message || defaultConfig.main_message;

  document.getElementById("teacherName").textContent =
    config.teacher_name || defaultConfig.teacher_name;

  document.getElementById("personalMessage").textContent =
    config.personal_message || defaultConfig.personal_message;

  document.getElementById("studentName").innerHTML =
    `With gratitude,<br><span>${config.student_name || defaultConfig.student_name}</span>`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange
  });
}
