export class Header {
  constructor() {}

  render() {
    // Header container
    const header = document.createElement('header');
    header.classList.add('w-full', 'text-black', 'py-4', 'px-6');

    // Container div
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'justify-between', 'items-center');

    // Logo and Brand
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('flex', 'items-center', 'space-x-2');

    const logoImg = document.createElement('img');
    logoImg.src = './assets/img/logo.png';
    logoImg.alt = 'UniDorm Logo';
    logoImg.classList.add('h-8');

    const logoText = document.createElement('h4');
    logoText.classList.add('font-bold', 'text-blue-700');
    logoText.innerHTML = `Uni<span class="text-orange-400">Dorm</span>`;

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(logoText);

    // Navigation Links
    const navLinksContainer = document.createElement('div');
    navLinksContainer.classList.add('flex', 'items-center', 'space-x-4'); // Hidden on screens larger than md

    const listOfPropertiesBtn = document.createElement('button');
    listOfPropertiesBtn.classList.add('bg-orange-400', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
    listOfPropertiesBtn.textContent = 'List of Properties';

    const signInBtn = document.createElement('button');
    signInBtn.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
    signInBtn.textContent = 'Sign In';

    navLinksContainer.appendChild(listOfPropertiesBtn);
    navLinksContainer.appendChild(signInBtn);

    // Mobile Menu Icon
    const mobileMenuIcon = document.createElement('div');
    mobileMenuIcon.classList.add('block', 'md:hidden'); // Hidden by default on screens larger than md
    mobileMenuIcon.innerHTML = `
      <button id="mobile-menu-toggle" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path id="menu-icon" fill-rule="evenodd" clip-rule="evenodd" d="M4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM20 12H4C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H20C20.5523 14 21 13.5523 21 13C21 12.4477 20.5523 12 20 12ZM20 18H4C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18Z"></path>
        </svg>
      </button>
    `;

    // Menu Links Container
    const menuLinksContainer = document.createElement('div');
    menuLinksContainer.classList.add('hidden', 'md:flex', 'md:items-center', 'md:space-x-6'); // Hidden on screens larger than md

    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.classList.add('font-bold', 'text-lg');
    homeLink.textContent = 'Home';

    const propertiesLink = document.createElement('a');
    propertiesLink.href = '#properties';
    propertiesLink.textContent = 'Properties';

    const blogLink = document.createElement('a');
    blogLink.href = '#blog';
    blogLink.textContent = 'Blog';

    const contactLink = document.createElement('a');
    contactLink.href = '#contact';
    contactLink.textContent = 'Contact';

    menuLinksContainer.appendChild(homeLink);
    menuLinksContainer.appendChild(propertiesLink);
    menuLinksContainer.appendChild(blogLink);
    menuLinksContainer.appendChild(contactLink);

    // Append elements to header container
    container.appendChild(logoContainer);
    container.appendChild(navLinksContainer);
    container.appendChild(menuLinksContainer);
    container.appendChild(mobileMenuIcon);
    header.appendChild(container);

    // JavaScript to toggle the visibility of navLinksContainer and menuLinksContainer when mobileMenuIcon is clicked
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) { // Check if the element exists before adding event listener
      mobileMenuToggle.addEventListener('click', () => {
        menuLinksContainer.classList.toggle('hidden');
        const menuIcon = document.getElementById('menu-icon');
        if (menuIcon) {
          menuIcon.classList.toggle('hidden');
        }
        const closeIcon = document.getElementById('close-icon');
        if (closeIcon) {
          closeIcon.classList.toggle('hidden');
        }
      });
    }

    return header;
  }
}
