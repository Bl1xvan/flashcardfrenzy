const subjects = document.querySelector("[data-subject]");
const object = document.querySelector("[data-object]");
const predicate = document.querySelector("[data-predicate]");
const separate = document.querySelector("[data-separate]");
const flashcardcont = document.querySelector(".flashcard-cont");
const submit = document.querySelector(".submit");
const deletesubj = document.querySelector("[data-delete-subj]");
const deleteflash = document.querySelector("[data-delete-flash]");
const copyflash = document.querySelector("[data-copy-flash]");
const copyalert = document.querySelector(".copyalert");
const deck = [];

submit.addEventListener("click", function(){
    let addCards = subjects.value.split(separate.value);
    addCards.forEach(add =>{
        deck.push(object.value +"    "+ add + " " + predicate.value);   
    })
    flashcardcont.textContent = deck.join('\r\n');
})

///Needs to be a text area so I can copy. But how do I break them apart?

deletesubj.addEventListener("click", function(){
    subjects.value = " ";
})

deleteflash.addEventListener("click", function(){
    const cards = document.querySelectorAll(".card");
    cards.forEach(card =>{
        card.remove();
    }) 
})

copyflash.addEventListener("click", function(){
    flashcardcont.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(flashcardcont.value);
    copyalert.textContent = "cards copied!";
})


