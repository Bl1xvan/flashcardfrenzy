class Cardobject {
    constructor(objitem, additem, subjitem, preditem) {
        this.objectItem = objitem;
        this.addItem = additem;
        this.subjectItem = subjitem;
        this.predicateItem = preditem;
        this.textItem = function(){
            return this.objectItem + this.addItem + this.subjectItem +" "+ this.predicateItem;
        }
    }
}

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
let text = [];

flashcardcont.addEventListener("keyup", function(){
    text = flashcardcont.value;
})

const cardItem1 = Cardobject.textItem("Ed Edd n Eddy", "    ", "Ed", "is a character from" );
const cardItem2 = Cardobject.textItem("Ed Edd n Eddy", "    ", "Edd", "is a character from" );
const cardItem3 = Cardobject.textItem("Ed Edd n Eddy", "    ", "Eddy", "is a character from");

text.push(cardItem1);
text.push(cardItem2);
text.push(cardItem3);

console.log(text);
///s ubmit.addE ventListener("click", function(){

//} )

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


