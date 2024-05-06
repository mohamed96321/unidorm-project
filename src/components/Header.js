import { Profile } from '../pages/Profile.js';
import { Auth } from '../pages/Auth.js';
import { HomeSection } from '../pages/Home.js';
import { Rent } from '../pages/Rent.js';
import { NewProjects } from '../pages/NewProjects.js';
import { FindAgent } from '../pages/FindAgent.js';

export class Header {
  constructor() {
    // Create header element
    this.element = document.createElement('header');
    this.element.classList.add(
      'bg-white',
      'dark:bg-gray-800',
      'text-black',
      'dark:text-white',
      'py-6',
      'px-6'
    );

    // Create header content
    const container = document.createElement('div');
    container.classList.add(
      'container',
      'mx-auto',
      'flex',
      'justify-between',
      'items-center',
      'relative'
    );
    container.innerHTML = `
      <!-- Logo -->
      <div class="flex items-center">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/color-icon-is-not-embellished/blue-house-1.png" alt="UniDorm Logo" class="h-8 mr-2">
        <span class="text-xl font-bold">Uni<span class="text-yellow-500">Dorm</span></span>
      </div>

      <!-- Buttons -->
      <div class="flex space-x-4">
        <button class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded text-buttons">
          List of Properties
        </button>
        <button id="loginBtn" class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-buttons">
          Sign In
        </button>
        <button class="text-black dark:text-white font-medium py-2 hover:text-gray-600 icon-buttons">
          <i class="bx bx-list-ul text-3xl"></i>
          <div class="absolute text-sm px-2 py-1 rounded w-20 text-center hidden">List of Properties</div>
        </button>
        <button id="loginIcon" class="text-black dark:text-white font-medium py-2 hover:text-gray-600 icon-buttons relative">
          <i class="bx bx-log-in text-2xl"></i>
          <div id="loginLabel" class="absolute text-sm px-2 py-1 rounded w-20 text-center hidden">Sign In</div>
        </button>
      </div>

      <!-- Links -->
      <div id="desktop-links" class="hidden md:flex space-x-4"></div>

      <!-- Hamburger Icon for Medium and Small Screens -->
      <div class="md:hidden">
        <button id="menu-toggle" class="block text-black dark:text-white hover:text-gray-600 focus:outline-none">
          <i class="bx bx-menu text-3xl"></i>
        </button>
      </div>
      
      <!-- Links -->
      <nav id="links-container" class="bg-white dark:bg-gray-800 md:hidden fixed top-0 right-0 h-full bg-white w-64 z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
        <div class="flex flex-col items-center justify-start mt-9 h-full space-y-4" id="mobile-links"></div>
        <button id="menu-close" class="block text-black dark:text-white hover:text-gray-600 focus:outline-none mt-8 mr-6 absolute top-0 right-0">
          <i class="bx bx-x text-3xl"></i>
        </button>
      </nav>

      <!-- Scroll to top button -->
      <button id="scrollToTopBtn" class="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-2 rounded cursor-pointer hidden">
        <i class="bx bx-chevrons-up text-2xl"></i>
      </button>

      <!-- Dark/Light mode toggle -->
      <button id="theme-toggle" class="fixed bottom-14 right-4 bg-blue-600 hover:bg-blue-500 text-white px-2 rounded cursor-pointer">
        <i id="darkModeIcon" class="bx bx-moon text-2xl"></i>
      </button>
    `;

    // Toggle scroll to top button visibility based on scroll position
    const scrollToTopBtn = container.querySelector('#scrollToTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove('hidden');
      } else {
        scrollToTopBtn.classList.add('hidden');
      }

      if (window.scrollY > 0) {
        this.element.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-50', 'shadow-md');
      } else {
        this.element.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'z-50', 'shadow-md');
      }
    });

    // Functionality to scroll back to the header when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle dark mode class on body
    const darkModeToggle = container.querySelector('#theme-toggle');
    const darkModeIcon = container.querySelector('#darkModeIcon');

    // Function to set dark mode state
    const setDarkModeState = (isDarkMode) => {
      if (isDarkMode) {
        document.body.classList.add('dark');
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
      } else {
        document.body.classList.remove('dark');
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
      }
      // Store the dark mode state in localStorage
      localStorage.setItem('darkMode', isDarkMode);
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
      const isDarkMode = document.body.classList.contains('dark');
      setDarkModeState(!isDarkMode);
    };

    // Load dark mode state from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkModeState(savedDarkMode);

    // Add event listener to toggle dark mode
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Toggle function for menu visibility
    const menuToggle = container.querySelector('#menu-toggle');
    const menuClose = container.querySelector('#menu-close');
    const linksContainer = container.querySelector('#links-container');
    const desktopLinks = container.querySelector('#desktop-links');
    const mobileLinks = container.querySelector('#mobile-links');
    const signInButton = container.querySelector('#loginBtn');
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

    const linksData = [
      { text: 'Home', href: '#' },
      { text: 'Rent', href: '#' },
      { text: 'New Projects', href: '#' },
      { text: 'Find Agent', href: '#' },
    ];
    
    const createLinks = (container, links) => {
      let activeLink = localStorage.getItem('activeLink'); // Get the active link from localStorage
    
      // If activeLink is null or empty, set it to "Home"
      if (!activeLink) {
        activeLink = 'Home';
        localStorage.setItem('activeLink', activeLink);
      }
    
      links.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        anchor.classList.add('hover:text-blue-500', 'header-link'); // Add 'header-link' class
    
        // Check if it's the active link
        if (link.text === activeLink) {
          anchor.classList.add('text-blue-600', 'relative', 'font-bold', 'active'); // Add 'active' class
          const underline = document.createElement('div');
          underline.classList.add(
            'absolute',
            'top-6',
            'left-0',
            'w-full',
            'h-1',
            'bg-yellow-500'
          );
          anchor.appendChild(underline);
        }
    
        // Add click event listener
        anchor.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default behavior
          navigateToPage(link.text); // Navigate to the corresponding page
          setActiveLink(anchor); // Set the clicked link as active
          localStorage.setItem('activeLink', link.text); // Store the active link in localStorage
        });
    
        container.appendChild(anchor);
      });
    
      // If activeLink is still null or empty, set the "Home" link as active visually
      if (!activeLink) {
        const homeLink = container.querySelector('a[href="#"]');
        if (homeLink) {
          homeLink.classList.add('text-blue-600', 'relative', 'active');
          const underline = document.createElement('div');
          underline.classList.add(
            'absolute',
            'top-6',
            'left-0',
            'w-full',
            'h-1',
            'rounded-full',
            'bg-yellow-500'
          );
          homeLink.appendChild(underline);
        }
      }
    };
    
    // Function to navigate to the corresponding page
    const navigateToPage = (pageName) => {
      const app = document.getElementById('app');
      app.innerHTML = ''; 
      
      let pageComponent;
      switch (pageName) {
        case 'Home':
          pageComponent = new HomeSection();
          break;
        case 'Rent':
          pageComponent = new Rent();
          break;
        case 'New Projects':
          pageComponent = new NewProjects();
          break;
        case 'Find Agent':
          pageComponent = new FindAgent();
          break;
        default:
          break;
      }
      
      if (pageComponent) {
        app.appendChild(pageComponent.render());
      }
    };
    
    // Function to set the clicked link as active
    const setActiveLink = (clickedLink) => {
      // Remove active class from all links
      const allLinks = document.querySelectorAll('.header-link');
      allLinks.forEach(link => {
        link.classList.remove('active');
      });
    
      // Add active class to the clicked link
      clickedLink.classList.add('active');
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

    // Function to navigate to the Auth page
    const navigateToAuth = () => {
      // Assuming you have a function to render the Auth page
      const app = document.getElementById('app');
      app.innerHTML = ''; // Clear previous content
      const authPage = new Auth();
      app.appendChild(authPage.render());
    };

    // Add event listener to the sign in button
    signInButton.addEventListener('click', () => {
      navigateToAuth();
    });

    loginIcon.addEventListener('click', () => {
      navigateToAuth();
    });

    // Function to toggle sign-in/sign-out state
    function toggleSignIn() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const profileDiv = document.getElementById('profile'); // Get the profile div

      if (isLoggedIn) {
        // User is signed in, so sign them out
        localStorage.removeItem('isLoggedIn');
        signInButton.textContent = 'Sign In';
        loginIcon.innerHTML = '<i class="bx bx-log-in text-2xl"></i>';
        signInButton.classList.remove('hidden');
        loginIcon.classList.remove('hidden');
        signInButton.addEventListener('click', toggleSignIn);
        loginIcon.addEventListener('click', toggleSignIn);

        // Remove profile div if exists
        if (profileDiv) {
          profileDiv.remove();
        }
      } else {
        // User is not signed in, so sign them in
        localStorage.setItem('isLoggedIn', 'true');
        signInButton.classList.add('hidden');
        loginIcon.classList.add('hidden');
        signInButton.removeEventListener('click', toggleSignIn);
        loginIcon.removeEventListener('click', toggleSignIn);

        // Create and append profile div
        createProfileDiv();
      }
    }

    // Function to create and append profile div
    const createProfileDiv = () => {
      const profileDiv = document.createElement('div');
      profileDiv.classList.add('flex', 'items-center', 'space-x-2');
      profileDiv.id = 'profile';
    
        
      // Retrieve stored user data from localStorage
      const storedData = JSON.parse(localStorage.getItem('userData'));

      // Extract email and password from stored data
      const storedLastname = storedData['signup-lastname'];
      const name = storedLastname;
    
      // Function to update the profile display based on the screen size
      const updateProfileDisplay = () => {
        // Check if the screen size is 450px or less
        const isSmallScreen = window.innerWidth <= 470;
    
        // Set the content of the span element accordingly
        const initials = isSmallScreen ? name.charAt(0) : name;
    
        // Update the content of the span element
        spanElement.textContent = initials;
      };

      profileDiv.innerHTML = `
      <div class="flex items-center">
        <div class="relative">
          <img src="https://c4.wallpaperflare.com/wallpaper/529/555/624/mask-neon-person-photography-wallpaper-thumb.jpg" alt="Profile Image" class="h-8 w-8 rounded-full overflow-hidden">
          <div class="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></div>
        </div>
        <span class="text-sm font-medium ml-1"></span>
        <button id="profileDropdownBtn" type="button">
          <i class="bx bx-chevron-down text-2xl"></i>
        </button>
      </div>
      <div id="profileDropdown" class="hidden absolute top-12">
        <div class="flex flex-col sm:w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
          <button id="profileBtn" class="flex items-center px-4 py-2 text-sm dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700" type="button">
            <i class="bx bx-user-circle text-xl mr-2"></i>
            <span>Profile</span>
          </button>
          <button id="signOutBtn" class="flex items-center px-4 py-2 text-sm dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700" type="button">
            <i class="bx bx-log-out text-xl mr-2"></i>
            <span>Log out</span>
          </button>
        </div>
      </div>
    `;    

      const spanElement = profileDiv.querySelector('span');
      updateProfileDisplay(); // Initial update of the profile display
    
      container.querySelector('.flex.space-x-4').appendChild(profileDiv);
    
      // Event listener for dropdown toggle
      const dropdownBtn = container.querySelector('#profileDropdownBtn');
      dropdownBtn.addEventListener('click', () => {
        const dropdown = document.getElementById('profileDropdown');
        dropdown.classList.toggle('hidden');

        // Toggle rotation class for the chevron icon
        const chevronIcon = dropdownBtn.querySelector('i');
        chevronIcon.classList.toggle('rotate-180');
      });

      // Event listener for profile button
      const profileButton = container.querySelector('#profileBtn');
      profileButton.addEventListener('click', () => {
        renderProfilePage();
      });

      function renderProfilePage() {
        const app = document.getElementById('app');
        app.innerHTML = ''; // Clear previous content
        const profile = new Profile();
        app.appendChild(profile.render());
      }

      // Event listener for sign out button
      const signOutButton = container.querySelector('#signOutBtn');
      signOutButton.addEventListener('click', toggleSignIn);
    
      // Event listener for window resize
      window.addEventListener('resize', updateProfileDisplay);
    };

    // Check if user is already signed in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      signInButton.classList.add('hidden');
      loginIcon.classList.add('hidden');
      // Check if profile div already exists
      const profileDiv = document.getElementById('profile');
      if (!profileDiv) {
        // Create and append profile div
        createProfileDiv();
      }
    }
      
    // Append container to header element
    this.element.appendChild(container);
  }

  // Render method to return the header element
  render() {
    return this.element;
  }
}
