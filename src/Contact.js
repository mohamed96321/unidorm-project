export class ContactSection {
  constructor() {}

  render() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('py-12', 'px-4');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto');

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8');
    title.textContent = 'Contact Us';

    const contactForm = document.createElement('form');
    contactForm.classList.add('max-w-lg', 'mx-auto', 'text-center'); // Added 'text-center' class

    // First Name field
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.classList.add('block', 'w-full', 'border', 'rounded-md', 'py-2', 'px-3', 'mb-4');
    firstNameInput.placeholder = 'First Name';

    // Last Name field
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.classList.add('block', 'w-full', 'border', 'rounded-md', 'py-2', 'px-3', 'mb-4');
    lastNameInput.placeholder = 'Last Name';

    // Email field
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.classList.add('block', 'w-full', 'border', 'rounded-md', 'py-2', 'px-3', 'mb-4');
    emailInput.placeholder = 'Email';

    // Gender field
    const genderSelect = document.createElement('select');
    genderSelect.classList.add('block', 'w-full', 'border', 'rounded-md', 'py-2', 'px-3', 'mb-4');
    genderSelect.innerHTML = `
      <option value="" disabled selected>Choose Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    `;

    // Label for gender field
    const genderLabel = document.createElement('label');
    genderLabel.classList.add('block', 'text-sm', 'font-semibold', 'mb-1');

    // Append form fields to form
    contactForm.appendChild(firstNameInput);
    contactForm.appendChild(lastNameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(genderLabel);
    contactForm.appendChild(genderSelect);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mt-4');
    submitButton.textContent = 'Submit';

    contactForm.appendChild(submitButton);

    container.appendChild(title);
    container.appendChild(contactForm);
    contactSection.appendChild(container);

    return contactSection;
  }
}
