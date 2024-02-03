/* 
======LE COURS==========
Il existe deux grandes manières de gérer les formulaires : la manière contrôlée et la manière non contrôlée. 
J'aborderai assez rapidement la manière non contrôlée, parce qu'elle nécessite moins d'implication de React, 
et que React encourage l'utilisation des formulaires contrôlés.


Je vous fais une petite démo d'un formulaire non contrôlé. Sur notre app, directement dans  App.js,
je mets un composant  QuestionForm   que je vais déclarer dans un fichier à part.
Nous allons ajouter un champ pour une question.
Donc pour ça je crée un form, qui englobe mon input :

<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Tapez votre texte' />
    <button type='submit'>Entrer</button>
</form>

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}
*/

/*
J'ai compris qu'elle voulait que je crée un form mais les placé au bon endroit je sais pas
*/ 
