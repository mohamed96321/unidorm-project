export class Footer {
  constructor() {
    // Create footer element
    this.element = document.createElement('footer');
    this.element.classList.add('bg-pink-200', 'text-gray-800', 'py-8', 'px-6');

    // Create container for content
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'flex-wrap', 'justify-between');

    // Logo and Subscribe section
    const logoSubscribeSection = document.createElement('div');
    logoSubscribeSection.classList.add('mb-8', 'md:mb-0');
    logoSubscribeSection.innerHTML = `
      <div class="flex items-center mb-4">
        <img src="./assets/img/logo.png" alt="UniDorm Logo" class="h-8 mr-2">
        <span class="text-xl font-bold">Uni<span class="text-orange-400">Dorm</span></span>
      </div>
      <div class="flex items-center">
        <div class="relative flex-grow">
          <h4 class="mr-2">Subscribe</h4>
          <input type="email" placeholder="Enter your email" class="border border-gray-600 rounded px-3 py-2 pr-10 focus:outline-none focus:border-blue-400">
          <button class="absolute right-0 bottom-0 text-black font-bold py-2 px-2">
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
      <div class="flex flex-wrap">
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


    // Append container to footer element
    this.element.appendChild(container);
  }

  createLinkGroup(title, links) {
    const linkGroup = `
      <div class="mr-8">
        <h4 class="mb-2">${title}</h4>
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