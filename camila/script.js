document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'feed.html';
});
// Exemplo de saudação personalizada
document.addEventListener('DOMContentLoaded', function() {
    // Vamos supor que o nome do usuário esteja armazenado localmente.
    // Em uma aplicação real, isso viria de um banco de dados ou API.

    document.getElementById('idUser').textContent = userName;
});
// Manipulação de curtidas e comentários na página de feed (feed.html)
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        let likeCountElement = this.nextElementSibling;
        let count = parseInt(likeCountElement.textContent.split(' ')[0]);
        likeCountElement.textContent = `${++count} curtidas`;
    });
});
document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', function() {
        let commentBox = this.previousElementSibling;
        let commentList = this.nextElementSibling;
        if (commentBox.value.trim()) {
            let newComment = document.createElement('li');
            newComment.textContent = commentBox.value;
            commentList.appendChild(newComment);
            commentBox.value = '';
        }
    });
});
