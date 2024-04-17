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
        <button id="menu-toggle" class="block text-black hover:text-gray-600 focus:outline-none">
          <i class="bx bx-menu text-3xl"></i>
          <i class="bx bx-x text-3xl hidden"></i>
        </button>
      </div>
      
      <!-- Links -->
      <nav id="links-container" class="hidden md:flex flex-col md:flex-row md:space-x-4 md:space-y-0 transition-all duration-300">
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
      linksContainer.classList.toggle('flex');
      menuToggle.querySelector('.bx-menu').classList.toggle('hidden');
      menuToggle.querySelector('.bx-x').classList.toggle('hidden');

      // Add animation
      if (!linksContainer.classList.contains('hidden')) {
        linksContainer.classList.add('animate-slideIn');
      } else {
        linksContainer.classList.remove('animate-slideIn');
      }
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

// Define the animation keyframes
const slideInKeyframes = [
  { transform: 'translateY(-100%)' },
  { transform: 'translateY(0)' }
];

// Define the animation options
const slideInOptions = {
  duration: 500,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)', // Smooth easing
  fill: 'both'
};

// Add animation to the CSS
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .animate-slideIn {
    animation: slideIn 500ms cubic-bezier(0.77, 0, 0.175, 1) both;
  }
`;
document.head.appendChild(styles);
