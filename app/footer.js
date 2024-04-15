export class Footer {
  constructor() {}

  render() {
    const footer = document.createElement('footer');
    footer.classList.add('bg-gray-800', 'text-white', 'py-8');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-center');

    // Left Content (Logo and Subscribe)
    const leftContent = document.createElement('div');
    leftContent.classList.add('flex', 'flex-col', 'md:flex-row', 'items-start', 'space-y-4', 'md:space-y-0', 'md:space-x-2', 'mb-4'); // Changed items-center to items-start

    // Logo Container
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

    leftContent.appendChild(logoContainer);

    // Subscribe Container
    const subscribeContainer = document.createElement('div');
    subscribeContainer.classList.add('flex', 'flex-col', 'items-start', 'space-y-2' );

    const subscribeTitle = document.createElement('h4'); 
    subscribeTitle.textContent = 'Subscribe';
    subscribeTitle.classList.add('font-bold', 'text-white', 'mb-1', 'md:mt-8');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('relative', 'flex', 'items-center', 'space-x-2');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.classList.add('bg-gray-700', 'text-white', 'py-2', 'px-3', 'rounded', 'focus:outline-none', 'focus:ring', 'focus:border-blue-300');

    const sendIcon = document.createElement('i');
    sendIcon.classList.add('absolute', 'right-0', 'mr-2', 'bx', 'bxs-send', 'text-blue-400', 'cursor-pointer'); // Absolute positioning for the icon

    inputContainer.appendChild(emailInput);
    inputContainer.appendChild(sendIcon);

    subscribeContainer.appendChild(subscribeTitle); 
    subscribeContainer.appendChild(inputContainer);

    leftContent.appendChild(subscribeContainer);

    // Right Content (Links and Socials)
    const rightContent = document.createElement('div');
    rightContent.classList.add('flex', 'flex-col', 'md:flex-row', 'space-y-4', 'md:space-y-0', 'md:space-x-4');

    const supportLinks = createFooterLinks('Support', ['Help Center', 'FAQ', 'Terms of Service ']);
    const accountLinks = createFooterLinks('Account', ['Profile ', 'Settings ', 'Billing ']);
    const aboutLinks = createFooterLinks('About UniDorm', ['Our Team', 'Mission', 'Privacy Policy ']);
    rightContent.appendChild(supportLinks);
    rightContent.appendChild(aboutLinks);
    rightContent.appendChild(accountLinks);

    const socialLinks = document.createElement('div');
    socialLinks.classList.add('block', 'space-x-4');

    const facebookLink = createSocialLink('bx bxl-facebook');
    const twitterLink = createSocialLink('bx bxl-twitter');
    const instagramLink = createSocialLink('bx bxl-instagram');
    const linkedinLink = createSocialLink('bx bxl-linkedin');

    socialLinks.appendChild(facebookLink);
    socialLinks.appendChild(twitterLink);
    socialLinks.appendChild(instagramLink);
    socialLinks.appendChild(linkedinLink);

    rightContent.appendChild(socialLinks);

    container.appendChild(leftContent);
    container.appendChild(rightContent);
    footer.appendChild(container);

    return footer;
  }
}

function createFooterLinks(title, links) {
  const linkContainer = document.createElement('div');
  linkContainer.classList.add('mb-4');

  const titleElement = document.createElement('h4');
  titleElement.classList.add('font-bold');
  titleElement.textContent = title;

  linkContainer.appendChild(titleElement);

  links.forEach(linkText => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = linkText;
    linkContainer.appendChild(link);
  });

  return linkContainer;
}

function createSocialLink(iconClass) {
  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('text-white');

  const icon = document.createElement('i');
  // Split the icon class name and remove any spaces
  const classes = iconClass.split(' ').filter(className => className.trim() !== '');
  icon.classList.add(...classes);

  link.appendChild(icon);

  return link;
}
