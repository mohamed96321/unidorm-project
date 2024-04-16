export class Header {
  constructor() {
    // Create header element
    this.element = document.createElement('header');
    this.element.classList.add('text-black', 'py-4', 'px-6');

    // Create header content
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'justify-between', 'items-center');
    container.innerHTML = `
      <!-- Logo -->
      <div class="flex items-center">
        <img src="./assets/img/logo.png" alt="UniDorm Logo" class="h-8 mr-2">
        <span class="text-xl font-bold">Uni<span class="text-orange-400">Dorm</span></span>
      </div>

      <!-- Buttons -->
      <div class="flex space-x-4">
        <button class="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded">List of Properties</button>
        <button class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Sign In</button>
      </div>

      <!-- Hamburger Icon for Medium and Small Screens -->
      <div class="md:hidden">
        <button id="menu-toggle" class="block text-black hover:text-gray-600 focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current text-black hover:text-gray-600" viewBox="0 0 24 24">
            <path class="menu-icon" fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            <path class="close-icon hidden" fill-rule="evenodd" clip-rule="evenodd" d="M6.707 6.293a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414L6.707 7.707a1 1 0 0 1 0-1.414zM12 11.657L6.343 17.314a1 1 0 1 1-1.414-1.414L10.586 10 4.929 4.343a1 1 0 1 1 1.414-1.414L12 8.828l5.657-5.657a1 1 0 0 1 1.414 1.414L13.414 10l5.657 5.657a1 1 0 1 1-1.414 1.414L12 11.657z"/>
          </svg>
        </button>
      </div>
      
      <!-- Links -->
      <nav id="links-container" class="hidden md:flex space-x-4">
        <a href="#" class="hover:text-blue-300">Home</a>
        <a href="#" class="hover:text-blue-300">Properties</a>
        <a href="#" class="hover:text-blue-300">Blog</a>
        <a href="#" class="hover:text-blue-300">Contact</a>
      </nav>
    `;

    // Toggle function for menu visibility
    const menuToggle = container.querySelector('#menu-toggle');
    const linksContainer = container.querySelector('#links-container');
    const homeLink = container.querySelector('#links-container a:first-child');
    menuToggle.addEventListener('click', () => {
      linksContainer.classList.toggle('hidden');
      menuToggle.querySelector('.menu-icon').classList.toggle('hidden');
      menuToggle.querySelector('.close-icon').classList.toggle('hidden');
    });

    // Add active styles to home link
    homeLink.classList.add('font-bold', 'text-black', 'underline', 'hover:no-underline', 'hover:text-blue-700');

    // Append container to header element
    this.element.appendChild(container);
  }

  // Render method to return the header element
  render() {
    return this.element;
  }
}
