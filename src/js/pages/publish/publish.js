// eslint-disable-next-line import/no-unresolved

import { headerFeed } from '../../components/headerFeed';
import { footer } from '../../components/footer.js';
import {
  deletePost,
  likePost,
  deslikePost,
  updatePost,
  readAllPosts,
  newPost,
  readOnePost,
  auth,
} from '../../../firebase/auth.js';

const timelinePosts = (post) => {
  let buttons = '';
  if (auth.currentUser.uid === post.userId) {
    buttons = `
  <div class='buttons'>
    <button class="btn-delete" id="btn-delete" data-id="${post.userId}">
    <img src="./img/trash.svg" alt="deletar"/>
    </button>
    <button class="btn-edit" id="btn-edit" data-id="${post.userId}">
    <img src="./img/pencil-line.svg" alt="editar"/>
    </button>
  </div>
    `;
  }
  const container = document.createElement('div');

  const templatePost = `  
  <section class='container-posts-feed' >
  <div class='container-post-data'>
  <div class='name'>
    <p class='user-name' id='user-name'><img src="./img/user-circle.svg" alt="">${post.userName}</p>
    <p class='user-data' id='user-name'>${post.publishDate}</p>
    </div>
    <div class='message'>
      <textarea class='post-published' id='post-published' style='resize:none' disabled>${post.message}</textarea>
      </div>
      </div>
   
      <div class='button-like'>
        <button class='btn-like like-count' id='btn-like' value=><img class='btn-like-icon' src='./img/heart.svg' alt='like'>
        <p class='number-likes'>${post.likes.length}</p></button>
      </div>
      ${buttons}  

    <div class='modal-delete' id='modal-delete'>
      <div class='modal-delete-content'>
        <p class='modal-delete-text'>Tem certeza que deseja excluir?</p>
        <div class='modal-delete-btns'>
          <button class='btn-modal-delete' id='btn-modal-delete'>Excluir</button>
          <button class='btn-modal-cancel' id='btn-modal-cancel'>Cancelar</button>
        </div>
      </div>
    </div>
</section>

`;
  container.innerHTML = templatePost;

  const btnDelete = container.querySelector('#btn-delete');
  // para abrir o modal
  const modalDelete = container.querySelector('#modal-delete');
  if (btnDelete) {
    btnDelete.addEventListener('click', () => {
      modalDelete.style.display = 'flex';
    });
  }

  // para fechar o modal
  const btnModalCancel = container.querySelector('#btn-modal-cancel');
  if (btnModalCancel) {
    btnModalCancel.addEventListener('click', () => {
      modalDelete.style.display = 'none';
    });
  }
  // para deletar o post
  const btnModalDelete = container.querySelector('#btn-modal-delete');
  if (btnModalDelete) {
    btnModalDelete.addEventListener('click', () => {
      deletePost(post.id);
      modalDelete.style.display = 'none';
      container.remove();
    });
  }

  const btnEdit = container.querySelector('#btn-edit');
  if (btnEdit) {
    btnEdit.addEventListener('click', (e) => {
      const textarea = container.querySelector('#post-published');
      textarea.removeAttribute('disabled');
      btnEdit.removeEventListener('click', e);
      btnEdit.addEventListener('click', () => {
        textarea.setAttribute('disabled', 'true');
        updatePost(post.id, textarea.value);
      });
    });
  }

  const btnLike = container.querySelector('#btn-like');
  btnLike.addEventListener('click', () => {
    const user = auth.currentUser;
    if (post.likes.includes(user.uid)) {
      deslikePost(post.id, user.uid);
      post.likes.splice(post.likes.indexOf(user.uid));
      btnLike.innerHTML = `<img class='btn-like-icon' src='./img/heart.svg' alt='like'><p class='number-likes'>${post.likes.length}</p>`;
    } else {
      likePost(post.id, user.uid);
      post.likes.push(user.uid);
      btnLike.innerHTML = `<img class='btn-like-icon' src='./img/heart.svg' alt='liked'><p class='number-likes'>${post.likes.length}</p>`;
    }
    btnLike.querySelector('p').innerText = post.likes.length;
  });

  return container;
};

export default () => {
  const containerPublish = document.createElement('div');
  containerPublish.classList.add('container-publish');
  const showPosts = readAllPosts();
  const templatePublish = `
  <div class='publish'>
    <section class='card-publish'>
   <textarea class='post-publish' id='post-publish' cols='60' rows='10' style='resize:none'></textarea>
  <button class='publish-btn' id='publish-btn'>Publicar</button>
</section>
  <div class='container-main'>
    <div class='allposts' id='publishingPost'></div>
    <div class='allPosts' id='allPosts'></div>
  </div>
</div>`;

  containerPublish.append(headerFeed());
  containerPublish.innerHTML += templatePublish;
  containerPublish.append(footer());

  const btnPublish = containerPublish.querySelector('#publish-btn');
  const postPublish = containerPublish.querySelector('#post-publish');
  const allPosts = containerPublish.querySelector('#allPosts');

  btnPublish.addEventListener('click', async () => {
    const postsContainer = containerPublish.querySelector('#publishingPost');
    const postContent = postPublish.value;
    if (postContent.length > 0) {
      let postRef = await newPost(postContent);
      postRef = await readOnePost(postRef.id);
      postsContainer.appendChild(timelinePosts(postRef));
    } else {
      alert('Ops, parece que seu post está vazio');
    }

    postPublish.value = '';
  });

  showPosts.then((post) => {
    // eslint-disable-next-line no-shadow
    post.forEach((post) => {
      allPosts.appendChild(timelinePosts(post));
    });
  });
  return containerPublish;
};
