import { footer } from '../../components/footer.js';
import { header } from '../../components/header.js';

export default () => {
  const containerFeed = document.createElement('div');

  const templateFeed = `
  <div class="container-feed">
  <div class="search">
    <input type="text" name="" class="search-input" placeholder="Pesquisar" />
  </div>
  <div class="feed-box">
    <div class="post">
      <div class='post-text'>
        <label for="post-area">Nome do Usuário</label>
        <textarea readonly name="post-area" class="post-input-feed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </textarea>
      </div>
      <P class='number-likes'>Numero de curtidas</p>
      <hr size=4>
      <div class="like-box">
        <button><img src="./img/heart.png" alt="Like" />Curtir</button>
      </div>
    </div>
    <div class="post">
      <div class='post-text'>
        <label for="post-area">Nome do Usuário</label>
        <textarea readonly name="post-area" class="post-input-feed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </textarea>
      </div>
      <P class='number-likes'>Numero de curtidas</p>
      <hr size=4>
      <div class="like-box">
        <button><img src="./img/heart.png" alt="Like" />Curtir</button>
      </div>
    </div>
    <div class="post">
      <div class='post-text'>
        <label for="post-area">Nome do Usuário</label>
        <textarea readonly name="post-area" class="post-input-feed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </textarea>
      </div>
      <P class='number-likes'>Numero de curtidas</p>
      <hr size=4>
      <div class="like-box">
        <button><img src="./img/heart.png" alt="Like" />Curtir</button>
      </div>
    </div>
    <div class="post">
      <div class='post-text'>
        <label for="post-area">Nome do Usuário</label>
        <textarea readonly name="post-area" class="post-input-feed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </textarea>
      </div>
      <P class='number-likes'>Numero de curtidas</p>
      <hr size=4>
      <div class="like-box">
        <button><img src="./img/heart.png" alt="Like" />Curtir</button>
      </div>
    </div>
    <div class="post">
      <div class='post-text'>
        <label for="post-area">Nome do Usuário</label>
        <textarea readonly name="post-area" class="post-input-feed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       </textarea>
      </div>
      <P class='number-likes'>Numero de curtidas</p>
      <hr size=4>
      <div class="like-box">
        <button><img src="./img/heart.png" alt="Like" />Curtir</button>
      </div>
    </div>
  </div>
</div>
`;
  containerFeed.append(header());

  containerFeed.innerHTML += templateFeed;

  containerFeed.append(footer());

  return containerFeed;
};
