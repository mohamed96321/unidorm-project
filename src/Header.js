export class Header {
  constructor() {
    // Create header element
    this.element = document.createElement('header');
    this.element.classList.add('text-black', 'py-6', 'px-6');

    // Create header content
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'justify-between', 'items-center', 'relative');
    container.innerHTML = `
      <!-- Logo -->
      <div class="flex items-center">
        <img src="./assets/img/logo.png" alt="UniDorm Logo" class="h-8 mr-2">
        <span class="text-xl font-bold">Uni<span class="text-orange-400">Dorm</span></span>
      </div>

      <!-- Buttons -->
        <div class="flex space-x-4">
          <button class="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded text-buttons">
            List of Properties
          </button>
          <button id="loginBtn" class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-buttons">
            Sign In
          </button>
          <button class="text-black font-bold py-2 hover:text-gray-600 icon-buttons">
            <i class="bx bx-list-ul text-3xl"></i>
            <div class="absolute text-sm px-2 py-1 rounded w-20 text-center hidden">List of Properties</div>
          </button>
          <button id="loginIcon" class="text-black font-bold py-2 hover:text-gray-600 icon-buttons relative">
            <i class="bx bx-log-in text-2xl"></i>
            <div id="loginLabel" class="absolute text-sm px-2 py-1 rounded w-20 text-center hidden">Sign In</div>
          </button>
        </div>

      <!-- Links -->
      <div id="desktop-links" class="hidden md:flex space-x-4"></div>

      <!-- Hamburger Icon for Medium and Small Screens -->
      <div class="md:hidden">
        <button id="menu-toggle" class="block text-black hover:text-gray-600 focus:outline-none">
          <i class="bx bx-menu text-3xl"></i>
          <i class="bx bx-x text-3xl hidden"></i>
        </button>
      </div>
      
      <!-- Links -->
      <nav id="links-container" class="md:hidden fixed top-0 right-0 h-full bg-white w-64 z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
        <div class="flex flex-col items-center justify-center h-full space-y-4" id="mobile-links"></div>
        <button id="menu-close" class="block text-black hover:text-gray-600 focus:outline-none mt-6 mr-6 absolute top-0 right-0">
          <i class="bx bx-x text-3xl"></i>
        </button>
      </nav>
    `;

    // Toggle function for menu visibility
    const menuToggle = container.querySelector('#menu-toggle');
    const menuClose = container.querySelector('#menu-close');
    const linksContainer = container.querySelector('#links-container');
    const desktopLinks = container.querySelector('#desktop-links');
    const mobileLinks = container.querySelector('#mobile-links');
    const loginIcon = container.querySelector('#loginIcon');
    const loginLabel = container.querySelector('#loginLabel');
    const listIcon = container.querySelector('.bx-list-ul');
    const listLabel = container.querySelector('.bx-list-ul + div');

    // Show login label on hover
    loginIcon.addEventListener('mouseenter', () => {
      loginLabel.classList.remove('hidden');
    });

    // Hide login label on mouseout
    loginIcon.addEventListener('mouseleave', () => {
      loginLabel.classList.add('hidden');
    });

    // Show list label on hover
    listIcon.addEventListener('mouseenter', () => {
      listLabel.classList.remove('hidden');
    });

    // Hide list label on mouseout
    listIcon.addEventListener('mouseleave', () => {
      listLabel.classList.add('hidden');
    });

    // Data for links
    const linksData = [
      { text: 'Home', href: '#' },
      { text: 'Properties', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Contact', href: '#' }
    ];

    // Function to create links
    const createLinks = (container, links) => {
      links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        anchor.classList.add('hover:text-blue-700');

        // Check if it's the "Home" link
        if (link.text === 'Home') {
          anchor.classList.add('text-blue-700', 'relative', 'font-bold');
          const underline = document.createElement('div');
          underline.classList.add('absolute', 'top-6', 'left-0', 'w-full', 'h-1', 'rounded-full', 'bg-orange-500');
          anchor.appendChild(underline);
        }

        container.appendChild(anchor);
      });
    };

    createLinks(desktopLinks, linksData);
    createLinks(mobileLinks, linksData);

    menuToggle.addEventListener('click', () => {
      linksContainer.classList.toggle('translate-x-full');
      linksContainer.classList.toggle('translate-x-0');
    });

    menuClose.addEventListener('click', () => {
      linksContainer.classList.add('translate-x-full');
      linksContainer.classList.remove('translate-x-0');
    });

    // Append container to header element
    this.element.appendChild(container);
  }

  // Render method to return the header element
  render() {
    return this.element;
  }
}
