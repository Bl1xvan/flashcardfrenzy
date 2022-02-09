class Cardobject {
    constructor(objitem, additem, subjitem, preditem) {
        this.objectItem = objitem;
        this.addItem = additem;
        this.subjectItem = subjitem;
        this.predicateItem = preditem;
    }
}
////add parameters in the constructor?
//// before the main text array is converted to a string, it must check for matches

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
let arrayb4Chng = [];
let text = [];


flashcardcont.addEventListener("keyup", function(){
    text = flashcardcont.value;
})

Cardobject.prototype.txttoChng = function(){
    arrayb4Chng.push({item1: this.objectItem, item2: this.addItem, item3: this.subjectItem, item4: this.predicateItem});
}

/////need to compare item3's within the array

const cardItem1 = new Cardobject("Ed Edd n Eddy", "    ", "Ed", "is a character from" );
const cardItem2 = new Cardobject("Ed Edd n Eddy", "    ", "Edd", "is a character from" );
const cardItem3 = new Cardobject("Ed Edd n Eddy", "    ", "Eddy", "is a character from");
const cardItem4 = new Cardobject("Ed Edd n Eddy", "    ", "Eddy", "is a character from");

text.push(cardItem1.txttoChng());
text.push(cardItem2.txttoChng());
text.push(cardItem3.txttoChng());
text.push(cardItem4.txttoChng())



console.log(arrayb4Chng);
for(let x in arrayb4Chng){
    let mxObj = [];
    console.log(arrayb4Chng[x].item1 + " " + arrayb4Chng[x].item3);
}



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


