import { BlogSection } from '../components/Blog.js';
import { Post } from '../components/Post.js';
import { FeaturedProperties } from '../components/Properties.js';

export class Profile {
  constructor() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.element = document.createElement('div');
    this.element.classList.add('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white');

    const { 'signup-firstname': firstName, 'signup-lastname': lastName, 'signup-email': email } = this.userData;
    const fullName = `${firstName} ${lastName}`;
    const atIndex = email.indexOf('@');
    const username = atIndex !== -1 ? email.substring(0, atIndex) : email;

    this.blogInstance = new BlogSection();
    this.postInstance = new Post();
    this.propertiesInstance = new FeaturedProperties();

    this.renderProfile(fullName, username);

    // Get all tab buttons and panels
    this.tabButtons = this.element.querySelectorAll('.tab-btn');
    this.tabPanels = this.element.querySelectorAll('.tab-panel');

    // Add click event listener to each tab button
    this.tabButtons.forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        // Remove 'active' class from all tab buttons
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked tab button
        tabBtn.classList.add('active');

        // Change background color of all tab buttons
        this.tabButtons.forEach(btn => {
          if (btn.classList.contains('active')) {
            btn.style.backgroundColor = '#3182ce'; // Set the background color for the active tab
            btn.style.color = 'white';
          } else {
            btn.style.backgroundColor = '#cbd5e0'; // Reset the background color for inactive tabs
            btn.style.color = 'black';
          }
        });

        // Hide all tab panels
        this.tabPanels.forEach(panel => panel.classList.add('hidden'));
        // Show the corresponding tab panel
        const tabName = tabBtn.dataset.tab;
        const tabPanel = this.element.querySelector(`.tab-panel.${tabName}-tab-content`);
        tabPanel.classList.remove('hidden');
      });
    });
  }

  renderProfile(fullName, username) {
    const blogContainer = this.blogInstance.render();
    const postContainer = this.postInstance.render();
    const propertiesContainer = this.propertiesInstance.render();
    this.element.innerHTML = `
      <div class="p-8 flex flex-col items-center justify-center space-y-6">
        <div class="relative w-full mb-4">
          <img src="https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg" alt="Cover Image" class="object-cover w-full h-64 rounded-lg">
          <div class="absolute bottom-0 left-0 p-4 text-white">
            <div class="flex items-center mb-2">
              <div class="w-12 h-12 mr-4">
                <img src="https://c4.wallpaperflare.com/wallpaper/529/555/624/mask-neon-person-photography-wallpaper-thumb.jpg" alt="Profile Image" class="object-cover w-full h-full rounded-full">
              </div>
              <p class="text-blue-400">${fullName}<span> (${username})</span></p>
            </div>
            <div class="flex space-x-4">
              <a href="#" class="text-blue-400"><i class="bx bxl-twitter"></i> Twitter</a>
              <a href="#" class="text-blue-400"><i class="bx bxl-facebook"></i> Facebook</a>
              <a href="#" class="text-blue-400"><i class="bx bxl-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div class="px-8 space-y-2">
        <div class="tabs grid grid-cols-3 md:flex md:justify-center md:space-x-4">
          <button class="tab-btn active md:w-auto w-full md:mr-0 mb-2 md:mb-0 px-4 py-2 rounded-md bg-blue-500 text-white" data-tab="blogs">Blogs</button>
          <button class="tab-btn md:w-auto w-full md:mr-0 mb-2 md:mb-0 px-4 py-2 rounded-md bg-gray-300 text-gray-700 ml-2" data-tab="posts">Posts</button>
          <button class="tab-btn md:w-auto w-full md:mr-0 mb-2 md:mb-0 px-4 py-2 rounded-md bg-gray-300 text-gray-700 ml-4" data-tab="properties">Properties</button>
          <div class="flex justify-center md:hidden col-span-3 gap-2 ml-4">
            <button class="tab-btn md:w-auto w-full px-4 py-2 rounded-md bg-gray-300 text-gray-700" data-tab="discovery">Discovery</button>
            <button class="tab-btn md:w-auto w-full px-4 py-2 rounded-md bg-gray-300 text-gray-700" data-tab="mentions">Mentions</button>
          </div>
          <div class="hidden md:flex md:justify-center">
            <button class="tab-btn md:w-auto w-full px-4 py-2 rounded-md bg-gray-300 text-gray-700 mr-4" data-tab="discovery">Discovery</button>
            <button class="tab-btn md:w-auto w-full px-4 py-2 rounded-md bg-gray-300 text-gray-700" data-tab="mentions">Mentions</button>
          </div>
        </div>
        <div class="tab-content w-full">
          <div class="tab-panel blogs-tab-content mt-4">
            ${blogContainer.outerHTML}
          </div>
          <div class="tab-panel posts-tab-content mt-4 hidden">
            ${postContainer.outerHTML}
          </div>
          <div class="tab-panel properties-tab-content mt-4 hidden">
            ${propertiesContainer.outerHTML}
          </div>
          <div class="tab-panel mentions-tab-content mt-4 hidden">
            ${blogContainer.outerHTML}
          </div>
          <div class="tab-panel discovery-tab-content mt-4 hidden">
            ${blogContainer.outerHTML}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return this.element;
  }
}
