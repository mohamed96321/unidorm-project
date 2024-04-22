export class BlogSection {
  constructor() {}

  render() {
    const blogSection = document.createElement('section');
    blogSection.classList.add('bg-white', 'dark:bg-gray-800', 'text-black','dark:text-white', 'py-8', 'px-12');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto');

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8');
    title.textContent = 'Latest Blog Posts';

    const blogPostsContainer = document.createElement('div');
    blogPostsContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8');

    // Simulated blog posts (replace with actual data)
    const blogPosts = [
      { title: '10 Tips for Finding the Perfect Rental', image: './assets/img/table1.jpg', link: '#' },
      { title: 'How to Decorate Your Dorm Room on a Budget', image: './assets/img/table2.jpg', link: '#' },
      { title: 'Top 5 Student-Friendly Cities for Renters', image: './assets/img/table3.jpeg', link: '#' },
      { title: 'Top 5 Student-Friendly Cities for Renters', image: './assets/img/table4.jpeg', link: '#' },
      { title: 'How to Decorate Your Dorm Room on a Budget', image: './assets/img/table2.jpg', link: '#' },
      { title: '10 Tips for Finding the Perfect Rental', image: './assets/img/table1.jpg', link: '#' },
    ];

    blogPosts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.classList.add('bg-white', 'dark:bg-gray-800', 'p-6', 'rounded', 'shadow-md', 'transition', 'hover:shadow-lg', 'hover:scale-105');

      const postImage = document.createElement('img');
      postImage.src = post.image;
      postImage.alt = post.title;
      postImage.classList.add('w-full', 'h-40', 'object-cover', 'rounded-md', 'mb-4');

      const postTitle = document.createElement('h3');
      postTitle.classList.add('text-xl', 'font-semibold', 'mb-2');
      postTitle.textContent = post.title;

      const postLink = document.createElement('a');
      postLink.href = post.link;
      postLink.classList.add('text-blue-500', 'hover:underline', 'font-medium');
      postLink.textContent = 'Read more';

      postCard.appendChild(postImage);
      postCard.appendChild(postTitle);
      postCard.appendChild(postLink);

      blogPostsContainer.appendChild(postCard);
    });

    container.appendChild(title);
    container.appendChild(blogPostsContainer);
    blogSection.appendChild(container);

    return blogSection;
  }
}
