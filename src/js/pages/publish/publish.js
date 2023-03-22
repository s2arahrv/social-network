import { footer } from '../../components/footer.js';
import { header } from '../../components/header.js';

export default () => {
  const containerPublish = document.createElement('div');

  const templatePublish = `
  <div class="container-publish">
    <div class="title">
       <p>Faça sua publicação</p>
    </div>
  <div class="publish-post">
  <textarea readonly name="post-area" class="post-input-publish">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  </textarea>
  </div>
      <div class="btn-box">
        <button class=btn-publish>Publicar</button>
      </div>   
</div>
`;
  containerPublish.append(header());

  containerPublish.innerHTML += templatePublish;

  containerPublish.append(footer());

  return containerPublish;
};
