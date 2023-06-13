const todoList = document.getElementById("todo-list");
const newItemInput = document.getElementById("new-item-input");
const addItemButton = document.getElementById("add-item-button");

// Ajoute un événement "click" sur le bouton d'ajout
addItemButton.addEventListener("click", addItem);

// Ajoute un événement "keypress" sur l'input de nouvelle tâche
newItemInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addItem();
  }
});

// Ajoute une tâche à la liste
function addItem() {
  const newItemText = newItemInput.value;

  if (newItemText === "") {
    return;
  }

  // Crée un nouvel élément <li> avec la tâche et les boutons
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <span>${newItemText}</span>
    <div class="buttons-wrapper">
      <button class="complete-button">Compléter</button>
      <button class="delete-button">Supprimer</button>
    </div>
  `;

  // Ajoute un événement "click" sur le bouton de complétion
  const completeButton = newItem.querySelector(".complete-button");
  completeButton.addEventListener("click", function() {
    newItem.classList.toggle("completed");
  });

  // Ajoute un événement "click" sur le bouton de suppression
  const deleteButton = newItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", function() {
    newItem.remove();
  });

  // Ajoute le nouvel élément à la liste
  todoList.appendChild(newItem);

  // Vide l'input de nouvelle tâche
  newItemInput.value = "";
}
