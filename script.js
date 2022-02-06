const subjects = document.querySelector("[data-subject]");
const object = document.querySelector("[data-object]");
const predicate = document.querySelector("[data-predicate]");
const separate = document.querySelector("[data-separate]");
const flashcardcont = document.querySelector(".flashcard-cont");
const submit = document.querySelector(".submit");
const deletesubj = document.querySelector("[data-delete-subj]");
const deleteflash = document.querySelector("[data-delete-flash]");

submit.addEventListener("click", function(){
    let addCards = subjects.value.split(separate.value);
    addCards.forEach(add =>{
        let para = document.createElement("p");
        para.className = "card"
        para.textContent = object.value + separate.value + add + " " + predicate.value;
        flashcardcont.appendChild(para);
    })
})





