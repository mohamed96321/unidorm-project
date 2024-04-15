import { Header } from './header.js';
import { HomeSection } from './home.js';
import { FeaturedProperties } from './properties.js';
import { BlogSection } from './blog.js';
import { ContactSection } from './contact.js';
import { Footer } from './footer.js';

const app = document.getElementById('app');

// Initialize components
const header = new Header();
const heroSection = new HomeSection();
const featuredProperties = new FeaturedProperties();
const blogSection = new BlogSection();
const contactSection = new ContactSection();
const footer = new Footer();

// Render components
app.appendChild(header.render());
app.appendChild(heroSection.render());
app.appendChild(featuredProperties.render());
app.appendChild(blogSection.render());
app.appendChild(contactSection.render());
app.appendChild(footer.render());
