const rules = {
    email: {
      required: true,
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
      required: true,
      minLength: 8,
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
    }
  };
  
  document.getElementById('dynamicForm').addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    let isValid = true;
  
    if (rules.email.required && !email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!rules.email.regex.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    if (rules.password.required && !password) {
      document.getElementById('passwordError').textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < rules.password.minLength) {
      document.getElementById('passwordError').textContent = `Password must be at least ${rules.password.minLength} characters long.`;
      isValid = false;
    } else if (!rules.password.regex.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must include uppercase, lowercase, numbers, and symbols.';
      isValid = false;
    } else {
      document.getElementById('passwordError').textContent = '';
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
    }
  }