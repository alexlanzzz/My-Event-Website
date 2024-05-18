<<<<<<< Updated upstream
// community.js

// Discussion area logic
document.getElementById('discussionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const topic = document.getElementById('discussionTopic').value;
    const content = document.getElementById('discussionContent').value;
    const imageInput = document.getElementById('discussionImage');
    const imageFile = imageInput.files[0];
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error messages
    if (errorMessage) {
        errorMessage.remove();
    }

    if (topic === '' || content === '') {
        const error = document.createElement('div');
        error.id = 'errorMessage';
        error.classList.add('error-message');
        error.innerText = 'All fields are required.';
        document.getElementById('discussionForm').appendChild(error);
        return;
    }

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${topic}</h3>
        <p>${content}</p>
    `;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = topic;
            img.classList.add('discussion-post-image');
            post.appendChild(img);
        };
        reader.readAsDataURL(imageFile);
    }

    post.innerHTML += `
        <button class="show-comments">Show Comments</button>
        <div class="comments-container" style="display: none;">
            <form class="commentForm">
                <label for="commentContent">Comment:</label>
                <textarea name="commentContent" required></textarea>
                <button type="submit">Add Comment</button>
            </form>
            <div class="comments-list"></div>
        </div>
    `;

    document.getElementById('postsContainer').appendChild(post);

    // Add event listener to show comments
    post.querySelector('.show-comments').addEventListener('click', function() {
        const commentsContainer = post.querySelector('.comments-container');
        commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Add event listener to add comment
    post.querySelector('.commentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const commentContent = event.target.querySelector('textarea[name="commentContent"]').value;
        if (commentContent === '') {
            alert('Comment cannot be empty.');
            return;
        }
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerText = commentContent;
        post.querySelector('.comments-list').appendChild(comment);
        event.target.reset();
    });

    // Clear form
    document.getElementById('discussionForm').reset();
});
=======
// community.js

// Discussion area logic
document.getElementById('discussionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const topic = document.getElementById('discussionTopic').value;
    const content = document.getElementById('discussionContent').value;
    const imageInput = document.getElementById('discussionImage');
    const imageFile = imageInput.files[0];
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error messages
    if (errorMessage) {
        errorMessage.remove();
    }

    if (topic === '' || content === '') {
        const error = document.createElement('div');
        error.id = 'errorMessage';
        error.classList.add('error-message');
        error.innerText = 'All fields are required.';
        document.getElementById('discussionForm').appendChild(error);
        return;
    }

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${topic}</h3>
        <p>${content}</p>
    `;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = topic;
            img.classList.add('discussion-post-image');
            post.appendChild(img);
        };
        reader.readAsDataURL(imageFile);
    }

    post.innerHTML += `
        <button class="show-comments">Show Comments</button>
        <div class="comments-container" style="display: none;">
            <form class="commentForm">
                <label for="commentContent">Comment:</label>
                <textarea name="commentContent" required></textarea>
                <button type="submit">Add Comment</button>
            </form>
            <div class="comments-list"></div>
        </div>
    `;

    document.getElementById('postsContainer').appendChild(post);

    // Add event listener to show comments
    post.querySelector('.show-comments').addEventListener('click', function() {
        const commentsContainer = post.querySelector('.comments-container');
        commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Add event listener to add comment
    post.querySelector('.commentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const commentContent = event.target.querySelector('textarea[name="commentContent"]').value;
        if (commentContent === '') {
            alert('Comment cannot be empty.');
            return;
        }
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerText = commentContent;
        post.querySelector('.comments-list').appendChild(comment);
        event.target.reset();
    });

    // Clear form
    document.getElementById('discussionForm').reset();
});
>>>>>>> Stashed changes
