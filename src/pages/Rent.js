import { Header } from '../components/Header.js';

export class Rent {
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
    title.textContent = 'Explore Available Rentals';

    const rentListContainer = document.createElement('div');
    rentListContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8');

    container.appendChild(title);
    container.appendChild(rentListContainer);
    section.appendChild(container);

    // Sample rental data
    const rentals = [
      { type: 'Apartment', location: 'Los Angeles', description: 'Spacious apartment with stunning views of the city skyline.', imageUrl: 'https://via.placeholder.com/300' },
      { type: 'House', location: 'Miami', description: 'Cozy house with a beautiful garden and pool.', imageUrl: 'https://via.placeholder.com/300' },
      { type: 'Condo', location: 'Seattle', description: 'Modern condominium with access to amenities.', imageUrl: 'https://via.placeholder.com/300' },
      { type: 'Townhouse', location: 'New York', description: 'Luxurious townhouse in a prime location.', imageUrl: 'https://via.placeholder.com/300' },
      { type: 'Studio', location: 'San Francisco', description: 'Charming studio apartment with bay views.', imageUrl: 'https://via.placeholder.com/300' },
      { type: 'Duplex', location: 'Denver', description: 'Spacious duplex with mountain views.', imageUrl: 'https://via.placeholder.com/300' },
    ];

    // Create list items for each rental
    rentals.forEach(rental => {
      const listItem = document.createElement('div');
      listItem.classList.add('bg-white', 'dark:bg-gray-800', 'p-2', 'rounded', 'overflow-hidden', 'shadow-md', 'transform', 'transition', 'duration-500', 'hover:scale-105');

      const image = document.createElement('img');
      image.src = rental.imageUrl;
      image.alt = rental.type;
      image.classList.add('w-full', 'object-cover', 'rounded-t-md', 'mb-4');

      const type = document.createElement('h3');
      type.textContent = rental.type;
      type.classList.add('text-xl', 'font-semibold', 'mb-2');

      const location = document.createElement('p');
      location.textContent = `Location: ${rental.location}`;
      location.classList.add('text-gray-600', 'mb-2');

      const description = document.createElement('p');
      description.textContent = rental.description;
      description.classList.add('text-gray-600');

      listItem.appendChild(image);
      listItem.appendChild(type);
      listItem.appendChild(location);
      listItem.appendChild(description);

      rentListContainer.appendChild(listItem);
    });

    return section;
  }
}
