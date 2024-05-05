import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { FeaturedProperties } from '../components/Properties.js';
import { BlogSection } from '../components/Blog.js';
import { ContactSection } from '../components/Contact.js';

export class HomeSection {
  constructor() {}

  render() {
    const homeSection = document.createElement('section');
    homeSection.classList.add('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto');

    const headerInstance = new Header();
    container.appendChild(headerInstance.render());

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-6', 'mt-4');
    title.textContent = 'Welcome to UniDorm';

    const description = document.createElement('p');
    description.classList.add('text-lg', 'text-center', 'mb-4');
    description.textContent = 'Discover the perfect place to call home, whether you\'re renting or buying.';

    container.appendChild(title);
    container.appendChild(description);

    // Features section
    const featuresTitle = document.createElement('h3');
    featuresTitle.classList.add('text-2xl', 'font-bold', 'mb-4', 'text-center');
    featuresTitle.textContent = 'Our Features';

    container.appendChild(featuresTitle);

    const featuresSection = document.createElement('div');
    featuresSection.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-4', 'gap-4', 'mb-8', 'pt-4', 'px-12');
  
    // Defining features with their titles and descriptions
    const features = [
      { title: 'Advanced Search', description: 'Find your ideal property with our advanced search options.' },
      { title: 'Interactive Maps', description: 'Explore properties visually with interactive maps, pinpointing locations.' },
      { title: 'Virtual Tours', description: 'Take virtual tours of properties from the comfort of your home.' },
      { title: 'Secure Transactions', description: 'Ensure secure transactions and payments through our trusted platform.' },
      { title: 'Community Reviews', description: 'Read reviews from our community to help you make informed decisions.' },
      { title: 'Property Comparisons', description: 'Compare multiple properties side by side to make informed choices.' },
      { title: 'Local Area Insights', description: 'Gain insights into local neighborhoods, amenities, and schools.' },
      { title: 'Flexible Financing Options', description: 'Explore flexible financing options tailored to your needs.' },
    ];

    features.forEach(feature => {
      const featureCard = document.createElement('div');
      featureCard.classList.add('p-4', 'rounded-lg', 'overflow-hidden', 'shadow-md', 'transform', 'transition', 'duration-500', 'hover:scale-105');

      const featureTitle = document.createElement('h3');
      featureTitle.classList.add('text-xl', 'font-semibold', 'mb-2', 'text-center');
      featureTitle.textContent = feature.title;

      const featureDescription = document.createElement('p');
      featureDescription.classList.add('text-center', 'dark:text-gray-300');
      featureDescription.textContent = feature.description;

      featureCard.appendChild(featureTitle);
      featureCard.appendChild(featureDescription);

      featuresSection.appendChild(featureCard);
    });

    container.appendChild(featuresSection);
    // End of features section

    // Sponsors section
    const sponsorsTitle = document.createElement('h3');
    sponsorsTitle.classList.add('text-2xl', 'font-bold', 'mb-8', 'text-center');
    sponsorsTitle.textContent = 'Sponsored by';

    container.appendChild(sponsorsTitle);

    const sponsorsSection = document.createElement('div');
    sponsorsSection.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-4', 'mb-2', 'px-12');

    // Array of sponsors (replace with actual sponsor data)
    const sponsors = [
      { logo: 'https://c4.wallpaperflare.com/wallpaper/517/761/179/dell-company-computer-logo-wallpaper-preview.jpg', name: 'DELL' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/717/252/841/gold-splats-gucci-logo-wallpaper-preview.jpg', name: 'GUCCI' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/941/161/145/brands-companies-intel-logos-wallpaper-preview.jpg', name: 'INTEL' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/574/29/105/5bd20d1c56ee7-wallpaper-preview.jpg', name: 'AMAZON' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/293/434/426/subaru-car-company-logo-wallpaper-preview.jpg', name: 'SUBARU' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/1020/573/160/alienware-logo-company-video-games-dell-hd-wallpaper-preview.jpg', name: 'ALIENWARE' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/815/790/520/sony-company-logo-black-wallpaper-preview.jpg', name: 'SONY' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/263/275/669/black-company-lee-jeans-logo-entertainment-other-hd-art-wallpaper-preview.jpg', name: 'LEE' },
      { logo: 'https://c1.wallpaperflare.com/preview/799/375/781/mustang-logo-horse-running.jpg', name: 'FORD' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/326/380/62/apple-logo-in-middle-of-building-under-the-rain-apple-company-building-wallpaper-preview.jpg', name: 'APPLE' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/511/86/469/brands-companies-ibm-logos-wallpaper-preview.jpg', name: 'IBM' },
      { logo: 'https://c4.wallpaperflare.com/wallpaper/40/786/349/logo-john-deere-mechanical-engineering-john-deere-deere-and-company-hd-wallpaper-preview.jpg', name: 'JOHN DEERE' },
    ];

    sponsors.forEach(sponsor => {
      const sponsorCard = document.createElement('div');
      sponsorCard.classList.add('flex', 'flex-col', 'items-center');

      const sponsorLogo = document.createElement('img');
      sponsorLogo.src = sponsor.logo;
      sponsorLogo.alt = `${sponsor.name} Logo`;
      sponsorLogo.classList.add('h-16', 'w-24');

      const sponsorName = document.createElement('p');
      sponsorName.textContent = sponsor.name;
      sponsorName.classList.add('text-sm', 'text-center', 'mt-2', 'mb-4');

      sponsorCard.appendChild(sponsorLogo);
      sponsorCard.appendChild(sponsorName);

      sponsorsSection.appendChild(sponsorCard);
    });

    container.appendChild(sponsorsSection);
    // End of sponsors section

    const featuredProperties = new FeaturedProperties();
    container.appendChild(featuredProperties.render());

    const blogInstance = new BlogSection();
    container.appendChild(blogInstance.render());

    const contactInstance = new ContactSection();
    container.appendChild(contactInstance.render());

    const footerInstance = new Footer();
    container.appendChild(footerInstance.render());

    homeSection.appendChild(container);

    return homeSection;
  }
}
