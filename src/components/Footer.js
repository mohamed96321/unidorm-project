export class Footer {
  constructor() {
    // Create footer element
    this.element = document.createElement('footer');
    this.element.classList.add('bg-pink-200', 'dark:bg-gray-800', 'dark:text-white', 'text-gray-800', 'py-8', 'px-6');

    // Create container for content
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'flex-wrap', 'justify-between');

    // Logo and Subscribe section
    const logoSubscribeSection = document.createElement('div');
    logoSubscribeSection.classList.add('mb-8', 'md:mb-0');
    logoSubscribeSection.innerHTML = `
      <div class="flex items-center mb-4">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/color-icon-is-not-embellished/blue-house-1.png" alt="UniDorm Logo" class="h-8 mr-2">
        <span class="text-xl font-bold">Uni<span class="text_orange_400">Dorm</span></span>
      </div>
      <div class="flex items-center">
        <div class="relative flex-grow">
          <h4 class="mr-2 mb-2">Subscribe</h4>
          <input type="email" placeholder="Enter your email" class="bg-white dark:bg-gray-800 border border-gray-600 rounded px-3 py-2 pr-10 focus:outline-none focus:border-blue-400">
          <button class="dark:text-white absolute right-0 bottom-0 text-black font-bold py-2 px-2">
            <i class="bx bx-send"></i>
          </button>
        </div>
      </div>
    `;
    
    container.appendChild(logoSubscribeSection);

    // Links section
    const linksSection = document.createElement('div');
    linksSection.classList.add('mb-8', 'md:mb-0');
    linksSection.innerHTML = `
      <div class="flex flex-wrap gap-2">
        ${this.createLinkGroup('Support', ['Help Center', 'FAQ', 'Terms of Service'])}
        ${this.createLinkGroup('Account', ['Profile', 'Settings', 'Billing'])}
        ${this.createLinkGroup('About UniDorm', ['Our Team', 'Mission', 'Privacy Policy'])}
      </div>
    `;
    container.appendChild(linksSection);

    // Social media section
    const socialMediaSection = document.createElement('div');
    socialMediaSection.classList.add('mb-8', 'md:mb-0');
    socialMediaSection.innerHTML = `
      <div class="flex flex-wrap">
        <div class="mr-8">
          <h4 class="mb-2">Follow Us</h4> <!-- Style the title -->
          <div class="flex space-x-4"> <!-- Style the social media icons -->
            <a href="#" class="text-gray-400 hover:text-blue-500">
              <i class="bx bxl-facebook text-2xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-500">
              <i class="bx bxl-twitter text-2xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-500">
              <i class="bx bxl-instagram text-2xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-500">
              <i class="bx bxl-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(socialMediaSection);

    // Add copyright text and hr element
    const copyrightSection = document.createElement('div');
    copyrightSection.classList.add('w-full', 'text-center', 'lg:mt-4');
    copyrightSection.innerHTML = `
      <hr class="my-6 border-t-1 border-gray-400">
      <p class="text-sm text-gray-600 dark:text-gray-400">&copy; ${new Date().getFullYear()} UniDorm. All Rights Reserved.</p>
    `;
    container.appendChild(copyrightSection);

    // Append container to footer element
    this.element.appendChild(container);
  }

  createLinkGroup(title, links) {
    const linkGroup = `
      <div class="mr-8">
        <h4 class="mb-2 md:mt-2">${title}</h4>
        <ul class="space-y-2">
          ${links.map(link => `<li><a href="#" class="text-gray-400 hover:text-blue-500">${link}</a></li>`).join('')}
        </ul>
      </div>
    `;
    return linkGroup;
  }

  // Render method to return the footer element
  render() {
    return this.element;
  }
}
