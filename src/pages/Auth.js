import { HomeSection } from './Home.js';
import { validateEmail, validatePassword, validateField } from '../utils/authValidation.js';

export class Auth {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('flex', 'justify-center', 'items-center', 'h-screen', 'bg-white', 'dark:bg-gray-800');

    const authContainer = document.createElement('div');
    authContainer.classList.add('w-full', 'max-w-md', 'px-8', 'py-12', 'bg-gray-300', 'dark:bg-gray-700', 'shadow-lg', 'rounded-lg');

    const title = document.createElement('h2');
    title.classList.add('dark:text-white', 'text-2xl', 'font-bold', 'text-center', 'mb-8');
    title.textContent = 'Welcome to UniDorm';

    this.signUpForm = this.createForm('Sign Up', [
      { type: 'text', id: 'signup-firstname', name: 'signup-firstname', label: 'First Name' },
      { type: 'text', id: 'signup-lastname', name: 'signup-lastname', label: 'Last Name' },
      { type: 'email', id: 'signup-email', name: 'signup-email', label: 'Email' },
      { type: 'password', id: 'signup-password', name: 'signup-password', label: 'Password' },
      { type: 'password', id: 'signup-confirm-password', name: 'signup-confirm-password', label: 'Confirm Password' }
    ]);

    this.signInForm = this.createForm('Sign In', [
      { type: 'email', id: 'signin-email', name: 'signin-email', label: 'Email' },
      { type: 'password', id: 'signin-password', name: 'signin-password', label: 'Password' }
    ]);

    this.toggleButton = document.createElement('button');
    this.toggleButton.classList.add('text-blue-500', 'hover:text-blue-700', 'text-sm', 'underline', 'cursor-pointer', 'mt-2', 'block', 'text-center');
    this.toggleButton.textContent = 'Don\'t have an account? Sign Up';

    this.toggleButton.addEventListener('click', () => {
      const signUpFormVisible = this.signUpForm.style.display !== 'none';
      this.signUpForm.style.display = signUpFormVisible ? 'none' : 'block';
      this.signInForm.style.display = signUpFormVisible ? 'block' : 'none';
      this.toggleButton.textContent = signUpFormVisible ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In';
    });

    this.addPlaceholderAnimation(this.signUpForm);
    this.addPlaceholderAnimation(this.signInForm);

    this.signUpForm.style.display = 'none';

    authContainer.appendChild(title);
    authContainer.appendChild(this.signInForm);
    authContainer.appendChild(this.signUpForm);
    authContainer.appendChild(this.toggleButton);

    this.element.appendChild(authContainer);

    this.signUpForm.addEventListener('submit', this.handleSignUpSubmit.bind(this));
    this.signInForm.addEventListener('submit', this.handleSignInSubmit.bind(this));
  }

  createForm(buttonText, fields) {
    const form = document.createElement('form');
    form.classList.add('auth-form');

    fields.forEach(field => {
      const fieldContainer = document.createElement('div');
      fieldContainer.classList.add('mb-8', 'relative');

      const label = document.createElement('label');
      label.setAttribute('for', field.id);
      label.textContent = field.label;
      label.classList.add('dark:text-gray-200', 'block', 'ml-2', 'text-gray-700', 'absolute', 'top-0', 'left-0', 'transform', 'transition-all', 'duration-300', 'ease-in-out');

      const input = document.createElement('input');
      input.setAttribute('type', field.type);
      input.setAttribute('id', field.id);
      input.setAttribute('name', field.name);
      input.classList.add('dark:bg-gray-700', 'dark:text-gray-200', 'border', 'border-blue-400', 'form-input', 'mt-1', 'block', 'w-full', 'rounded-md', 'p-3', 'focus:outline-none');
      input.placeholder = '';

      const errorDiv = document.createElement('div');
      errorDiv.textContent = '';
      errorDiv.classList.add('hidden', 'error-message', 'bg-red-400', 'p-3', 'text-white', 'text-sm', 'rounded-md', 'text-center', 'mt-2');

      fieldContainer.appendChild(label);
      fieldContainer.appendChild(input);
      fieldContainer.appendChild(errorDiv);
      form.appendChild(fieldContainer);
    });

    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('bg-blue-500', 'text-white', 'font-semibold', 'py-2', 'px-4', 'rounded-md', 'w-full');
    button.textContent = buttonText;

    form.appendChild(button);
    return form;
  }
  
  addPlaceholderAnimation(form) {
    const inputFields = form.querySelectorAll('.form-input');
    
    inputFields.forEach(input => {
      const errorDiv = input.nextElementSibling;
  
      const handleInput = () => {
        const value = input.value.trim();
        const fieldName = input.getAttribute('name');
        const errorMessage = validateField(value);
        if (errorMessage) {
          this.showError(errorDiv, errorMessage);
        } else {
          errorDiv.textContent = '';
          errorDiv.classList.add('hidden');
        }
  
        if (fieldName === 'signup-email' || fieldName === 'signin-email') {
          if (!validateEmail(value)) {
            this.showError(errorDiv, 'Invalid email format');
          } else {
            errorDiv.textContent = '';
            errorDiv.classList.add('hidden');
          }
        }
  
        if (fieldName === 'signup-password') {
          if (!validatePassword(value)) {
            this.showError(errorDiv, 'Password not valid, For a strong password (e.g. MyP@ssw0rd)');
          }
          else {
            errorDiv.textContent = '';
            errorDiv.classList.add('hidden');
          }
        }

        if (fieldName === 'signup-confirm-password') {
          const passwordInput = form.querySelector('[name="signup-password"]');
          const password = passwordInput.value.trim();
          if (value !== password) {
            this.showError(errorDiv, 'Passwords do not match');
          } else {
            errorDiv.textContent = '';
            errorDiv.classList.add('hidden');
          }
        }
      };
  
      const handleFocus = () => {
        input.previousElementSibling.classList.add('text-md', '-translate-y-6', 'text-blue-white');
      };
  
      const handleBlurAnimation = () => {
        if (input.value === '') {
            input.previousElementSibling.classList.remove('text-md', '-translate-y-6', 'text-white');
        }
      };
  
      input.addEventListener('input', handleInput);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlurAnimation);
    });
  }

  inputsFieldsValidation() {
    const inputFields = this.signUpForm.querySelectorAll('.form-input');
    let isValid = true;

    inputFields.forEach(input => {
        const value = input.value.trim();
        const errorDiv = input.nextElementSibling;
        const fieldName = input.getAttribute('name');

        let errorMessage = validateField(value);

        if (fieldName === 'signup-email' && !validateEmail(value)) {
            errorMessage = 'Invalid email format';
        }

        if (fieldName === 'signup-password' && !validatePassword(value)) {
            errorMessage = 'Password not valid. For a strong password (e.g. MyP@ssw0rd)';
        }

        if (fieldName === 'signup-confirm-password') {
            const passwordInput = document.getElementById('signup-password');
            const passwordConfirmValue = value;
            const passwordValue = passwordInput.value.trim();
            if (passwordConfirmValue !== passwordValue) {
                errorMessage = 'Passwords do not match';
            }
        }

        if (errorMessage) {
            this.showError(errorDiv, errorMessage);
            isValid = false;
            return; // Stop validation on error
        } else {
            errorDiv.textContent = '';
            errorDiv.classList.add('hidden');
        }
    });

    return isValid;
  }

  handleSignUpSubmit(event) {
    event.preventDefault();
  
    if (!this.inputsFieldsValidation()) {
      return;
    }

    // Get form data
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
  
    // Check if user data already exists
    const existingUserData = JSON.parse(localStorage.getItem('userData'));
    if (existingUserData) {
      this.displayErrorMessage("You already have existing user data. Please sign in with your credentials.", this.signUpForm);
      return;
    }
  
    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Reset form fields
    event.target.reset();
  
    // Set isLoggedIn to true in localStorage after signup
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  
    // Redirect to home page after signup
    this.renderHomePage();
  }  

  handleSignInSubmit(event) {
    event.preventDefault();
  
    // Get the entered email and password directly from the form elements by their IDs
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();
          
    // Retrieve stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData'));

     // Check if user data exists
     if (!storedData) {
      this.displayErrorMessage("No user data found. Please sign up first.", this.signInForm);
      return;
    }

    // Extract email and password from stored data
    const storedEmail = storedData['signup-email'];
    const storedPassword = storedData['signup-password'];

    // Check if the entered email and password match the stored user data
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      this.renderHomePage();
    } else {
      this.displayErrorMessage("Invalid email or password. Please try again.", this.signInForm);
    }
  }

  displayErrorMessage(message, form) {
    const errorDiv = form.querySelector('.error-message');
    if (errorDiv) {
      if (message) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden'); 
        setTimeout(() => {
          errorDiv.textContent = ''; 
          errorDiv.classList.add('hidden');
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        errorDiv.textContent = ''; 
        errorDiv.classList.add('hidden');
      }
    }
  }
  
  showError(errorDiv, errorMessage, duration = 3000) {
    errorDiv.textContent = errorMessage;
    errorDiv.classList.remove('hidden');
    // Hide error message after specified duration
    setTimeout(() => {
        errorDiv.textContent = '';
        errorDiv.classList.add('hidden');
    }, duration);
  }
  
  renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = '';
    const homeSection = new HomeSection();
    app.appendChild(homeSection.render());
  }

  render() {
    return this.element;
  }
}
