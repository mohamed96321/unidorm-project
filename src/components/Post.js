export class Post {
  constructor() {
    this.posts = [
      { 
        username: 'John Doe',
        avatar: 'https://c4.wallpaperflare.com/wallpaper/535/901/196/the-avengers-avengers-endgame-avengers-endgame-iron-man-marvel-comics-hd-wallpaper-thumb.jpg',
        text: 'Just anothersssssssss sssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss day at the beach! from my vacation!',
        image: 'https://c4.wallpaperflare.com/wallpaper/840/954/346/dark-night-rain-car-wallpaper-thumb.jpg',
        link: 'https://www.instagram.com/bmw/?hl=en',
        linkText: 'View on Instagram',
      },
      { 
        username: 'Kati Smith',
        avatar: 'https://c4.wallpaperflare.com/wallpaper/100/30/528/anime-naruto-itachi-uchiha-wallpaper-thumb.jpg',
        text: 'Just anothersssssssss sssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss day at the beach! from my vacation!',
        image: 'https://c4.wallpaperflare.com/wallpaper/16/671/726/lionel-messi-football-barcelona-hd-wallpaper-thumb.jpg',
        link: 'https://www.instagram.com/bmw/?hl=en',
        linkText: 'View on Instagram',
      },
      { 
        username: 'Will Smith',
        avatar: 'https://c4.wallpaperflare.com/wallpaper/695/974/527/anime-attack-on-titan-attack-on-titan-levi-ackerman-shingeki-no-kyojin-hd-wallpaper-thumb.jpg',
        text: 'Just anothersssssssss sssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss day at the beach! from my vacation!',
        image: 'https://c4.wallpaperflare.com/wallpaper/416/608/950/anime-anime-girls-original-characters-kyrie-meii-wallpaper-thumb.jpg',
        link: 'https://www.instagram.com/bmw/?hl=en',
        linkText: 'View on Instagram',
      }
    ];
  }

  createPostElement(postData) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white', 'rounded-xl', 'overflow-hidden', 'shadow-md', 'mb-8', 'transform', 'transition', 'duration-500', 'hover:scale-105', 'flex', 'flex-col', 'py-4');

    const postImage = document.createElement('img');
    postImage.classList.add('w-full', 'h-56', 'object-cover');
    postImage.src = postData.image;
    postImage.alt = 'Post Image';

    const postContentDiv = document.createElement('div');
    postContentDiv.classList.add('flex-grow', 'flex', 'flex-col', 'justify-center', 'px-6', 'py-4', 'text-center');

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('w-10', 'h-10', 'rounded-full', 'mx-auto');
    avatarImg.src = postData.avatar;
    avatarImg.alt = 'Avatar Image';

    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('dark:text-gray-100', 'text-gray-800', 'font-semibold', 'text-xl', 'block', 'mt-2');
    usernameSpan.textContent = postData.username;

    const textParagraph = document.createElement('p');
    textParagraph.classList.add('dark:text-gray-300','text-gray-700', 'text-base', 'mt-2');
    textParagraph.textContent = postData.text;

    postContentDiv.appendChild(avatarImg);
    postContentDiv.appendChild(usernameSpan);
    postContentDiv.appendChild(textParagraph);

    if (postData.link && postData.linkText) {
      const link = document.createElement('a');
      link.href = postData.link;
      link.textContent = postData.linkText;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.classList.add('text-blue-500', 'hover:underline', 'mt-2', 'block');
      postContentDiv.appendChild(link);
    }  

    postDiv.appendChild(postImage);
    postDiv.appendChild(postContentDiv);

    return postDiv;
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'py-8');
    title.textContent = 'Recent Hot Posts';
    container.appendChild(title);

    const postsContainer = document.createElement('div');

    postsContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8');

    this.posts.forEach(postData => {
      const postElement = this.createPostElement(postData);
      postsContainer.appendChild(postElement);
    });

    container.appendChild(postsContainer);

    return container;
  }
}
