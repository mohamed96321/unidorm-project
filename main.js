import { Footer } from './src/Footer.js';
import { Header } from './src/Header.js';
import { Footer } from './src/Footer.js';
import { HomeSection } from './src/Home.js';
import { FeaturedProperties } from './src/Properties.js';
import { BlogSection } from './src/Blog.js';
import { ContactSection } from './src/Contact.js';

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
