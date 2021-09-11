function validateForm(input) {
  let errors = {};
  if (!input.title) {
    errors.title = "Enter a valid title";
  }
  if (!input.summary) {
    errors.summary = "Enter a summary";
  }
  if (input.readyInMinutes === "-") {
    errors.readyInMinutes = "Enter time";
  } else {
    if (input.readyInMinutes < 0) {
      errors.readyInMinutes = "Must be positive";
    }
  }
  if (input.servings === "-") {
    errors.servings = "Enter servings";
  } else {
    if (input.servings < 0) {
      errors.servings = "Must be positive";
    }
  }
  if (input.score === "-") {
    errors.score = "Enter score";
  } else if (input.score < 0 || input.score > 100) {
    errors.score = "Must be between 0 and 100";
  }
  if (input.healthScore === "-") {
    errors.healthScore = "Enter score";
  } else if (input.healthScore < 0 || input.score > 100) {
    errors.healthScore = "Must be between 0 and 100";
  }

  return errors;
}

export default validateForm;
