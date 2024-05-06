export class BlogSection {
  constructor() {}

  render() {
    const blogSection = document.createElement('section');
    blogSection.classList.add('bg-white', 'dark:bg-gray-800', 'text-black','dark:text-white', 'py-8', 'px-12');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto');

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8');
    title.textContent = 'Latest Hot Blogs';

    const blogPostsContainer = document.createElement('div');
    blogPostsContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8');

    // Simulated blog posts (replace with actual data)
    const blogPosts = [
      { title: '10 Tips for Finding the Perfect Rental', image: 'https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-thumb.jpg', link: 'https://www.reddit.com/r/Funnymemes/' },
      { title: 'How to Decorate Your Dorm Room on a Budget', image: 'https://c4.wallpaperflare.com/wallpaper/570/702/346/joaquin-phoenix-joker-batman-joker-2019-movie-dark-hd-wallpaper-thumb.jpg', link: 'https://www.reddit.com/r/Funnymemes/' },
      { title: 'Top 5 Student-Friendly Cities for Renters', image: 'https://c4.wallpaperflare.com/wallpaper/846/662/475/nature-forest-trees-fall-wallpaper-thumb.jpg', link: 'https://www.reddit.com/r/Funnymemes/' },
      { title: 'Top 5 Student-Friendly Cities for Renters', image: 'https://c4.wallpaperflare.com/wallpaper/846/662/475/nature-forest-trees-fall-wallpaper-thumb.jpg', link: 'https://www.reddit.com/r/Funnymemes/' },
      { title: 'How to Decorate Your Dorm Room on a Budget', image: 'https://c4.wallpaperflare.com/wallpaper/428/434/322/art-computer-digital-art-concept-art-wallpaper-thumb.jpg', link: 'https://www.reddit.com/r/Funnymemes/' },
      { title: '10 Tips for Finding the Perfect Rental', image: 'https://c4.wallpaperflare.com/wallpaper/600/360/964/digital-art-landscape-forest-mountains-wallpaper-thumb.jpg', link: 'https://www.reddit.com/r/Funnymemes/' },
    ];

    blogPosts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.classList.add('bg-white', 'dark:bg-gray-800', 'p-2', 'rounded', 'overflow-hidden', 'shadow-md', 'transform', 'transition', 'duration-500', 'hover:scale-105', 'flex', 'flex-col', 'flex-grow');

      const postImage = document.createElement('img');
      postImage.src = post.image;
      postImage.alt = post.title;
      postImage.classList.add('w-full', 'object-cover', 'rounded-t-md', 'mb-4');

      const postTitle = document.createElement('h3');
      postTitle.classList.add('text-xl', 'font-semibold', 'mb-2');
      postTitle.textContent = post.title;

      const postLink = document.createElement('a');
      postLink.href = post.link;
      postLink.classList.add('text-blue-500', 'hover:underline', 'font-medium', 'mt-auto');
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
