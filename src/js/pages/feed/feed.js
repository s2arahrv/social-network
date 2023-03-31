import { headerFeed } from '../../components/headerFeed.js';
import { footer } from '../../components/footer.js';
import { publish } from '../publish/publish.js';

export default () => {
  const containerFeed = document.createElement('div');

  containerFeed.append(headerFeed());

  const sectionMainFeed = document.createElement('section');
  sectionMainFeed.classList.add('section-main-feed');

  const templateFeed = ` 
  <img class='img-feed'src="img/publish.svg">
  <section class='display section-timelineFeed' id='timeline-post-feed' >
    
  </section>
  `;

  sectionMainFeed.innerHTML += templateFeed;
  containerFeed.append(sectionMainFeed);
  containerFeed.append(footer());
  const timelinePost = containerFeed.querySelector('#timeline-post-feed');
  publish(timelinePost);

  return containerFeed;
};
