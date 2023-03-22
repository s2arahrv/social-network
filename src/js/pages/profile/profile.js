import { footer } from '../../components/footer.js';
import { header } from '../../components/header.js';

export default () => {
  const containerProfile = document.createElement('div');

  const templateProfile = `
  <div class="container-profile">
  <div class="title-profile">
    <p>Suas Publicações</p>
  </div>
 
</div>
`;
  containerProfile.append(header());

  containerProfile.innerHTML += templateProfile;

  containerProfile.append(footer());

  return containerProfile;
};
