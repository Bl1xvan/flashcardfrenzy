const subjects = document.querySelector("[data-subject]");
const object = document.querySelector("[data-object]");
const predicate = document.querySelector("[data-predicate]");
const separate = document.querySelector("[data-separate]");
const flashcardcont = document.querySelector(".flashcard-cont");
const submit = document.querySelector("[data-submit-subj]");
const deletesubj = document.querySelector("[data-delete-subj]");
const deleteflash = document.querySelector("[data-delete-flash]");
const copyflash = document.querySelector("[data-copy-flash]");
const copyalert = document.querySelector(".copyalert");
let text = "";

flashcardcont.addEventListener("keyup", function(){
    text = flashcardcont.value;
})

/////New intentions in notes already


submit.addEventListener("click", function(){
    let addCards = subjects.value.split(separate.value);
    addCards.forEach(add =>{
        text += object.value +"    "+ add + " " + predicate.value + '\r\n';
    })
    flashcardcont.value = text;
})

deletesubj.addEventListener("click", function(){
    subjects.value = " ";
})

deleteflash.addEventListener("click", function(){
    flashcardcont.value = "";
    text = "";
})

copyflash.addEventListener("click", function(){
    flashcardcont.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(flashcardcont.value);
    copyalert.textContent = "cards copied!";
})


