import { App } from './src/App.js';

const app = document.getElementById('app');

// Check if a cookie exists
const hasVisitedBefore = document.cookie.includes('visited=true');
const hasAcceptedCookies = document.cookie.includes('acceptedCookies=true');

// Initialize components
const renderApp = new App();

// Render components
app.appendChild(renderApp.render());

// Set a cookie if the user is visiting for the first time
if (!hasVisitedBefore) {
  // Set the cookie to expire in 30 days
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  
  document.cookie = `visited=true; expires=${expirationDate.toUTCString()}; path=/`;
}

// Display cookie settings modal
if (!hasAcceptedCookies) {
  const cookieSettingsModal = document.createElement('div');
  cookieSettingsModal.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'flex', 'justify-center', 'items-center', 'bg-black', 'bg-opacity-50', 'z-50');

  const cookieSettingsContent = document.createElement('div');
  cookieSettingsContent.classList.add('bg-white', 'p-8', 'rounded-lg', 'relative');

  cookieSettingsContent.innerHTML = `
    <div class="relative">
      <h2 class="text-2xl font-bold mb-4">Cookies Settings</h2>
      <button id="remove-cookies" class="absolute top-0 right-0"><i class="bx bx-x text-4xl"></i></button>
    </div>
    <div class="max-w-md">
      <p class="text-gray-600 mb-6">We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.</p>
    </div>
    <div class="flex space-x-4">
      <button class="bg-gray-900 hover:bg-gray-200 hover:text-gray-900 text-white font-semibold py-2 px-4 rounded" id="accept-cookies">Accept</button>
      <button class="bg-gray-200 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold py-2 px-4 rounded" id="preference-cookies">Preference</button>
    </div>
  `;

  cookieSettingsModal.appendChild(cookieSettingsContent);
  app.appendChild(cookieSettingsModal);

  const acceptCookiesBtn = document.getElementById('accept-cookies');
  acceptCookiesBtn.addEventListener('click', () => {
    // Set the cookie to indicate acceptance
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `acceptedCookies=true; expires=${expirationDate.toUTCString()}; path=/`;
    // Remove the modal
    cookieSettingsModal.remove();
  });

  const preferenceCookiesBtn = document.getElementById('preference-cookies');
  preferenceCookiesBtn.addEventListener('click', () => {
    // You can implement cookie preference settings logic here
    console.log('Implement cookie preference settings here');
    cookieSettingsModal.remove();
  });

  const removeCookiesBtn = document.getElementById('remove-cookies');
  removeCookiesBtn.addEventListener('click', () => {
    // Remove the cookies by setting expiration date to a past date
    // const pastExpirationDate = new Date(0);
    // document.cookie = 'visited=; expires=' + pastExpirationDate.toUTCString() + '; path=/;';
    // document.cookie = 'acceptedCookies=; expires=' + pastExpirationDate.toUTCString() + '; path=/;';
    // Remove the modal
    cookieSettingsModal.remove();
  });
}
