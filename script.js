document.querySelector('.request-btn').addEventListener('click', () => {
    alert('Pick-up request feature coming soon!');
  });
  // scripts.js
// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle the active state for the clicked question
    question.classList.toggle('active');

    // Find the answer related to the clicked question
    const answer = question.nextElementSibling;

    // Toggle visibility of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none'; // Hide the answer
    } else {
      answer.style.display = 'block'; // Show the answer
    }
  });
});

