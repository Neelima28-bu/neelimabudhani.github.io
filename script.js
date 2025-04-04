document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const feedback = document.getElementById("feedback").value;
  alert("Thank you for your feedback:\n\n" + feedback);
  this.reset(); // optional: clears the form
});
