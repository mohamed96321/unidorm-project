import { HomeSection } from '../src/pages/Home.js';

export class App {
  render () {
    const app = document.createElement('div');

    const homeSectionInstance = new HomeSection(); // Create an instance of HomeSection
    app.appendChild(homeSectionInstance.render()); // Call render on the instance

    return app;
  }
}
