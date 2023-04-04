import { headerFeed } from '../../components/headerFeed.js';
import { footer } from '../../components/footer.js';
import { publish } from '../publish/publish.js';
import imgPublish from '../../../../public/img/publish.svg';

export default () => {
  const containerFeed = document.createElement('section');
  const sectionMainFeed = document.createElement('section');
  sectionMainFeed.classList.add('section-main-feed');
  const templateFeed = ` 
  <img class='img-feed'src="${imgPublish}">
  <section class='display section-timelineFeed' id='timeline-post-feed'></section>
  `;
  containerFeed.append(headerFeed());
  sectionMainFeed.innerHTML += templateFeed;
  containerFeed.append(sectionMainFeed);
  const timelinePost = containerFeed.querySelector('#timeline-post-feed');
  publish(timelinePost);
  containerFeed.append(footer());

  return containerFeed;
};
