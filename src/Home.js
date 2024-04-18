export class HomeSection {
  constructor() {}

  render() {
    const homeSection = document.createElement('section');
    homeSection.classList.add('py-10', 'px-8');

    const container = document.createElement('div');
    container.classList.add('container', 'mx-auto');

    const title = document.createElement('h2');
    title.classList.add('text-3xl', 'font-bold', 'text-center', 'mb-8');
    title.textContent = 'Welcome to UniDorm';

    const description = document.createElement('p');
    description.classList.add('text-lg', 'text-center');
    description.textContent = 'Discover the perfect place to call home, whether you\'re renting or buying.';

    container.appendChild(title);
    container.appendChild(description);
    homeSection.appendChild(container);

    return homeSection;
  }
}
