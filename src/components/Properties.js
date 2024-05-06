export class FeaturedProperties {
  constructor() {}

  render() {
    const propertiesSection = document.createElement('section');
    propertiesSection.classList.add('bg-white', 'dark:bg-gray-800', 'text-black','dark:text-white','py-4');

    
    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8', 'mt-4', 'px-8');
    title.textContent = 'Book Your Property';

    propertiesSection.appendChild(title);

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'justify-center', 'px-8'); 

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'gap-4');

    // Featured properties cards
    const featuredProperties = [
      {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/576/77/128/house-modern-architecture-mansions-swimming-pool-hd-wallpaper-preview.jpg',
        title: 'Luxury Villa with Ocean View',
        description: 'Stunning villa with breathtaking ocean views. This property features spacious rooms, modern amenities, and a private pool.',
        price: '$2,500,000',
        address: 'Malibu, California, USA',
        link: 'https://tatweermisr.com/bloomfields'
      },
      {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/575/667/599/trees-design-house-lawn-wallpaper-preview.jpg',
        title: 'Cozy Family Home',
        description: 'Lovely family home in a quiet neighborhood. Features a large backyard, perfect for kids and pets.',
        price: '$600,000',
        address: 'Brooklyn, New York, USA',
        link: 'https://tatweermisr.com/bloomfields'
      },
      {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/414/147/603/house-modern-architecture-mansions-luxury-hd-wallpaper-preview.jpg',
        title: 'Modern Downtown Loft',
        description: 'Chic loft apartment in the heart of the city. Walking distance to shops, restaurants, and entertainment.',
        price: '$900,000',
        address: 'Downtown Los Angeles, California, USA',
        link: 'https://tatweermisr.com/bloomfields'
      },
      {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/414/147/603/house-modern-architecture-mansions-luxury-hd-wallpaper-preview.jpg',
        title: 'Spacious Country Estate',
        description: 'Beautiful country estate with acres of land. Ideal for horse lovers or those seeking peace and tranquility.',
        price: '$1,200,000',
        address: 'Lexington, Kentucky, USA',
        link: 'https://tatweermisr.com/bloomfields'
      },
      {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/971/1012/9/architecture-house-modern-wallpaper-preview.jpg',
        title: 'Contemporary City Apartment',
        description: 'Sleek and stylish apartment in a modern high-rise. Enjoy panoramic city views and luxurious amenities.',
        price: '$800,000',
        address: 'Midtown Manhattan, New York, USA',
        link: 'https://tatweermisr.com/bloomfields'
      },
      {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/575/667/599/trees-design-house-lawn-wallpaper-preview.jpg',
        title: 'Waterfront Retreat',
        description: 'Tranquil waterfront retreat with stunning views. Perfect for relaxation and outdoor activities.',
        price: '$1,500,000',
        address: 'Lake Tahoe, California, USA',
        link: 'https://tatweermisr.com/bloomfields',
      },
    ];

    featuredProperties.forEach(property => {
      const card = this.createPropertyCard(property);
      innerContainer.appendChild(card);
    });

    container.appendChild(innerContainer);
    propertiesSection.appendChild(container);

    return propertiesSection;
  }

  createPropertyCard(property) {
    const card = document.createElement('div');
    card.classList.add('dark:bg-gray-800', 'rounded', 'overflow-hidden', 'shadow-md', 'm-4', 'transform', 'transition', 'duration-500', 'hover:scale-105', 'bg-white', 'flex', 'flex-col');
  
    const image = document.createElement('img');
    image.classList.add('w-full', 'h-64', 'object-cover');
    image.src = property.imageUrl;
    image.alt = property.title;
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('flex', 'flex-col', 'p-4', 'text-center', 'flex-grow');
  
    const title = document.createElement('div');
    title.classList.add('font-bold', 'text-xl', 'mb-2');
    title.textContent = property.title;
  
    const description = document.createElement('p');
    description.classList.add('dark:text-gray-200', 'text-gray-700', 'text-base', 'mb-2');
    description.textContent = property.description;
  
    const price = document.createElement('p');
    price.classList.add('dark:text-white', 'text-gray-900', 'font-bold', 'text-xl', 'mb-2');
    price.textContent = property.price;
  
    const address = document.createElement('p');
    address.classList.add('dark:text-white', 'text-gray-700', 'text-base', 'mb-2');
    address.textContent = property.address;
  
    const link = document.createElement('a');
    link.href = property.link;
    link.classList.add('text-blue-500', 'text-sm', 'font-medium', 'hover:underline', 'mt-auto');
    link.textContent = 'View Property';
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex', 'justify-between', 'mt-2');
  
    const buyButton = document.createElement('button');
    buyButton.classList.add('bg-blue-600', 'hover:bg-blue-500', 'text-white', 'font-semibold', 'py-2', 'rounded-md', 'w-1/2');
    buyButton.textContent = 'Buy Now';
  
    const addToListButton = document.createElement('button');
    addToListButton.classList.add('bg-yellow-500', 'text-white', 'font-semibold', 'py-2', 'rounded-md', 'w-1/2', 'ml-2', 'hover:bg-yellow-400');
    addToListButton.textContent = 'Add to List';
  
    // Append all elements to the card
    buttonContainer.appendChild(buyButton);
    buttonContainer.appendChild(addToListButton);
  
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(address);
    cardBody.appendChild(link);
    cardBody.appendChild(buttonContainer);
  
    card.appendChild(image);
    card.appendChild(cardBody);
  
    return card;
  }
}  
