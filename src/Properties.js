export class FeaturedProperties {
  constructor() {}

  render() {
    const propertiesSection = document.createElement('section');
    propertiesSection.classList.add('bg-white', 'dark:bg-gray-800', 'text-black','dark:text-white','py-4');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto', 'flex', 'justify-center'); 

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'gap-8');

    // Featured properties cards
    const featuredProperties = [
      {
        imageUrl: './assets/img/table1.jpg',
        title: 'Property 1',
        description: 'Description of Property 1',
        price: '$500,000',
        link: '#'
      },
      {
        imageUrl: './assets/img/table2.jpg',
        title: 'Property 2',
        description: 'Description of Property 2',
        price: '$600,000',
        link: '#'
      },
      {
        imageUrl: './assets/img/table3.jpeg',
        title: 'Property 3',
        description: 'Description of Property 3',
        price: '$700,000',
        link: '#'
      },
      {
        imageUrl: './assets/img/table1.jpg',
        title: 'Property 4',
        description: 'Description of Property 4',
        price: '$800,000',
        link: '#'
      },
      {
        imageUrl: './assets/img/table2.jpg',
        title: 'Property 2',
        description: 'Description of Property 2',
        price: '$600,000',
        link: '#'
      },
      {
        imageUrl: './assets/img/table4.jpeg',
        title: 'Property 3',
        description: 'Description of Property 3',
        price: '$700,000',
        link: '#'
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
    card.classList.add('dark:bg-gray-800', 'max-w-xs', 'rounded', 'overflow-hidden', 'shadow-lg', 'm-4', 'transition', 'hover:scale-105', 'bg-white', 'flex', 'flex-col', 'items-center');

    const image = document.createElement('img');
    image.classList.add('w-full', 'h-64', 'object-cover');
    image.src = property.imageUrl;
    image.alt = property.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('flex', 'flex-col', 'p-4', 'text-center');

    const title = document.createElement('div');
    title.classList.add('font-bold', 'text-xl', 'mb-2');
    title.textContent = property.title;

    const description = document.createElement('p');
    description.classList.add('dark:text-gray-200', 'text-gray-700', 'text-base', 'mb-2');
    description.textContent = property.description;

    const price = document.createElement('p');
    price.classList.add('dark:text-white', 'text-gray-900', 'font-bold', 'text-xl', 'mb-2');
    price.textContent = property.price;

    const link = document.createElement('a');
    link.href = property.link;
    link.classList.add('text-blue-500', 'text-sm', 'font-medium', 'hover:underline', 'mt-auto');
    link.textContent = 'View Property';

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    return card;
  }
}
