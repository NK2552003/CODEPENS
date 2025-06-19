document.addEventListener("DOMContentLoaded", () => {
  // Month selector dropdowns
  const monthSelectors = document.querySelectorAll(".month-selector");
  monthSelectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      // Add dropdown functionality here
      console.log("Month selector clicked");
    });
  });

  // Report selector
  const reportSelector = document.querySelector(".select-report");
  reportSelector.addEventListener("click", () => {
    // Add report selection functionality here
    console.log("Report selector clicked");
  });

  // Send button
  const sendButton = document.querySelector(".send-button");
  sendButton.addEventListener("click", () => {
    // Add send functionality here
    console.log("Send button clicked");
  });

  // Add task button
  const addTaskButton = document.querySelector(".add-task");
  addTaskButton.addEventListener("click", () => {
    // Add task creation functionality here
    console.log("Add task clicked");
  });

  // Calendar day selection
  const calendarDays = document.querySelectorAll(".day");
  calendarDays.forEach((day) => {
    day.addEventListener("click", () => {
      // Remove active class from all days
      calendarDays.forEach((d) => d.classList.remove("active"));
      // Add active class to clicked day
      day.classList.add("active");
    });
  });

  // AI Assistant arrow button
  const aiButton = document.querySelector(".arrow-button");
  aiButton.addEventListener("click", () => {
    // Add AI assistant functionality here
    console.log("AI assistant clicked");
  });

  // Notification button
  const notificationButton = document.querySelector(".actions .icon-button");
  notificationButton.addEventListener("click", () => {
    // Add notification functionality here
    console.log("Notifications clicked");
  });
});