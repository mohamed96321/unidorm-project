import { Header } from '../components/Header.js';

export class FindAgent {
  constructor() {
    // Initialize any properties or state here
  }

  // Method to render the Find Agent section
  render() {
    // Create the main container for the Find Agent section
    const findAgentSection = document.createElement('section');
    findAgentSection.classList.add('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white');

    // Instantiate and append the Header component
    const headerInstance = new Header();
    findAgentSection.appendChild(headerInstance.render());

    // Create a container div
    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'py-4', 'px-12');

    // Create a title for the Find Agent section
    const title = document.createElement('h2');
    title.textContent = 'Find Your Ideal Real Estate Agent';
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8');

    // Create a search form
    const searchForm = document.createElement('form');
    searchForm.innerHTML = `
      <input type="text" placeholder="Enter agent name..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4">
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none">
        Search
      </button>
    `;

    // Create a list to display agents
    const agentList = document.createElement('ul');
    agentList.classList.add('agent-list', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4');

    // Sample agent data
    const agents = [
      { name: 'John Doe', specialty: 'Residential Properties', location: 'New York', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { name: 'Jane Smith', specialty: 'Commercial Properties', location: 'Los Angeles', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { name: 'Michael Johnson', specialty: 'Luxury Homes', location: 'Miami', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { name: 'Emily Williams', specialty: 'Vacation Rentals', location: 'Orlando', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { name: 'David Brown', specialty: 'Investment Properties', location: 'San Francisco', imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { name: 'Jessica Davis', specialty: 'First-Time Buyers', location: 'Chicago', imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
    ];

    // Create list items for each agent
    agents.forEach(agent => {
      const listItem = document.createElement('li');
      listItem.classList.add('agent-item', 'bg-white', 'dark:bg-gray-800', 'p-4', 'rounded-md', 'shadow-md');

      const image = document.createElement('img');
      image.src = agent.imageUrl;
      image.alt = agent.name;
      image.classList.add('w-full', 'h-auto', 'rounded-md', 'mb-4');

      const name = document.createElement('h3');
      name.textContent = agent.name;
      name.classList.add('text-xl', 'font-semibold', 'mb-2');

      const specialty = document.createElement('p');
      specialty.textContent = `Specialty: ${agent.specialty}`;
      specialty.classList.add('text-gray-600', 'mb-2');

      const location = document.createElement('p');
      location.textContent = `Location: ${agent.location}`;
      location.classList.add('text-gray-600');

      listItem.appendChild(image);
      listItem.appendChild(name);
      listItem.appendChild(specialty);
      listItem.appendChild(location);

      agentList.appendChild(listItem);
    });

    // Append elements to the container
    container.appendChild(title);
    container.appendChild(searchForm);
    container.appendChild(agentList);

    // Append the container to the Find Agent section
    findAgentSection.appendChild(container);

    return findAgentSection;
  }
}
