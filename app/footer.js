export class Footer {
  constructor() {}

  render() {
    // Footer Container
    const footer = document.createElement('footer');
    footer.classList.add('bg-gray-800', 'text-white', 'py-8', 'px-4');

    // Container for all content
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-start');


    // Logo Container
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('flex', 'items-center', 'mb-4');

    const logoImg = document.createElement('img');
    logoImg.src = './assets/img/logo.png';
    logoImg.alt = 'UniDorm Logo';
    logoImg.classList.add('h-8');

    const logoText = document.createElement('h4');
    logoText.classList.add('font-bold', 'text-blue-700');
    logoText.innerHTML = `Uni<span class="text-orange-400">Dorm</span>`;

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(logoText);

    // Subscribe Container
    const subscribeContainer = document.createElement('div');
    subscribeContainer.classList.add('flex', 'flex-col', 'items-start', 'mb-4', 'text-start');

    const subscribeTitle = document.createElement('h4');
    subscribeTitle.textContent = 'Subscribe';
    subscribeTitle.classList.add('font-bold', 'text-white', 'mb-1', 'md:mt-10');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('relative', 'flex', 'items-center', 'space-x-2');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.classList.add('bg-gray-700', 'text-white', 'py-2', 'px-3', 'rounded', 'focus:outline-none', 'focus:ring', 'focus:border-blue-300');

    const sendIcon = document.createElement('i');
    sendIcon.classList.add('absolute', 'right-0', 'mr-2', 'bx', 'bxs-send', 'text-blue-400', 'cursor-pointer');

    inputContainer.appendChild(emailInput);
    inputContainer.appendChild(sendIcon);

    subscribeContainer.appendChild(subscribeTitle);
    subscribeContainer.appendChild(inputContainer);

    // Links Container
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('flex', 'flex-col', 'md:flex-row', 'space-y-4', 'md:space-y-0', 'md:space-x-6');

    const supportLinks = createFooterLinks('Support', ['Help Center', 'FAQ', 'Terms of Service ']);
    const accountLinks = createFooterLinks('Account', ['Profile ', 'Settings ', 'Billing ']);
    const aboutLinks = createFooterLinks('About UniDorm', ['Our Team', 'Mission', 'Privacy Policy ']);

    linksContainer.appendChild(supportLinks);
    linksContainer.appendChild(aboutLinks);
    linksContainer.appendChild(accountLinks);

    // Social Links Container
    const socialLinksContainer = document.createElement('div');
    socialLinksContainer.classList.add('flex', 'items-center', 'space-x-4', 'md:flex-col');

    // Social Links
    const facebookLink = createSocialLink('bx bxl-facebook');
    const twitterLink = createSocialLink('bx bxl-twitter');
    const instagramLink = createSocialLink('bx bxl-instagram');
    const linkedinLink = createSocialLink('bx bxl-linkedin');

    socialLinksContainer.appendChild(facebookLink);
    socialLinksContainer.appendChild(twitterLink);
    socialLinksContainer.appendChild(instagramLink);
    socialLinksContainer.appendChild(linkedinLink);

    // Append elements to container
    container.appendChild(logoContainer);
    container.appendChild(subscribeContainer);
    container.appendChild(linksContainer);
    container.appendChild(socialLinksContainer);

    // Append container to footer
    footer.appendChild(container);

    return footer;
  }
}

function createFooterLinks(title, links) {
  const linkContainer = document.createElement('div');
  linkContainer.classList.add('mb-4');

  const titleElement = document.createElement('h4');
  titleElement.classList.add('font-bold', 'text-white', 'mb-2');
  titleElement.textContent = title;

  linkContainer.appendChild(titleElement);

  links.forEach(linkText => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = linkText;
    link.classList.add('text-blue-400', 'hover:text-blue-200', 'transition', 'duration-300');
    linkContainer.appendChild(link);
  });

  return linkContainer;
}

function createSocialLink(iconClass) {
  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('text-white');

  const icon = document.createElement('i');
  const classes = iconClass.split(' ').filter(className => className.trim() !== '');
  icon.classList.add(...classes);

  link.appendChild(icon);

  return link;
}
