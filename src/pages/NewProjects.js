import { Header } from '../components/Header.js';

export class NewProjects {
  render() {
    const section = document.createElement('section');
    section.classList.add('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white');

    // Instantiate and append the Header component
    const headerInstance = new Header();
    section.appendChild(headerInstance.render());  
  
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'py-4', 'px-12');

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8');
    title.textContent = 'Explore New Real Estate Projects';

    const projectListContainer = document.createElement('div');
    projectListContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8');

    container.appendChild(title);
    container.appendChild(projectListContainer);
    section.appendChild(container);

    // Sample project data
    const projects = [
      { name: 'Sunset Gardens', location: 'Los Angeles', description: 'Luxury condominiums with stunning views of the city skyline.', imageUrl: 'https://via.placeholder.com/300' },
      { name: 'Riverside Residences', location: 'Miami', description: 'Waterfront apartments offering resort-style amenities and services.', imageUrl: 'https://via.placeholder.com/300' },
      { name: 'Forest Ridge Estates', location: 'Seattle', description: 'Exclusive gated community nestled in a lush forest setting.', imageUrl: 'https://via.placeholder.com/300' },
      { name: 'Azure Heights', location: 'New York', description: 'Modern high-rise towers offering panoramic views of Central Park.', imageUrl: 'https://via.placeholder.com/300' },
      { name: 'Harbor View Villas', location: 'San Francisco', description: 'Luxurious townhomes overlooking the bay with private docks.', imageUrl: 'https://via.placeholder.com/300' },
      { name: 'Mountain Crest Estates', location: 'Denver', description: 'Ski-in/ski-out chalets located in the heart of the Rocky Mountains.', imageUrl: 'https://via.placeholder.com/300' },
    ];

    // Create list items for each project
    projects.forEach(project => {
      const listItem = document.createElement('div');
      listItem.classList.add('bg-white', 'dark:bg-gray-800', 'p-2', 'rounded', 'overflow-hidden', 'shadow-md', 'transform', 'transition', 'duration-500', 'hover:scale-105');

      const image = document.createElement('img');
      image.src = project.imageUrl;
      image.alt = project.name;
      image.classList.add('w-full', 'object-cover', 'rounded-t-md', 'mb-4');

      const name = document.createElement('h3');
      name.textContent = project.name;
      name.classList.add('text-xl', 'font-semibold', 'mb-2');

      const location = document.createElement('p');
      location.textContent = `Location: ${project.location}`;
      location.classList.add('text-gray-600', 'mb-2');

      const description = document.createElement('p');
      description.textContent = project.description;
      description.classList.add('text-gray-600');

      listItem.appendChild(image);
      listItem.appendChild(name);
      listItem.appendChild(location);
      listItem.appendChild(description);

      projectListContainer.appendChild(listItem);
    });

    return section;
  }
}
