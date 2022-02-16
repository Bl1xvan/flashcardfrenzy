class Cardobject {
    constructor(objitem, additem, subjitem, preditem) {
        this.objectItem = objitem;
        this.addItem = additem;
        this.subjectItem = subjitem;
        this.predicateItem = preditem;
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
let arrayb4Chng = [];

////Look up maps on youtube..
/////need to compare item3's within the array

Cardobject.prototype.cardItem = function() {
    arrayb4Chng.push({item1: this.objectItem, item2: this.addItem, item3: this.subjectItem, item4: this.predicateItem })
}


const cardItem1 = new Cardobject("Ed Edd n Eddy", "    ", "Ed", "is a character from" );
const cardItem2 = new Cardobject("Ed Edd n Eddy", "    ", "Edd", "is a character from" );
const cardItem3 = new Cardobject("Ed Edd n Eddy", "    ", "Eddy", "is a character from");
const cardItem4 = new Cardobject("Samurai Jack", "    ", "Eddy", "is a character from");
const cardItem5 = new Cardobject("Samurai Jack", "    ", "Edd", "is a character from");
const cardItem6 = new Cardobject("Dexter's Lab", "    ", "Edd", "is a character from");
const cardItem7 = new Cardobject("Cow and Chicken", "    ", "Eddy", "is a character from");

cardItem1.cardItem();
cardItem2.cardItem();
cardItem3.cardItem();
cardItem4.cardItem();
cardItem5.cardItem();
cardItem6.cardItem();
cardItem7.cardItem();

console.log(arrayb4Chng);

let reduceSet = new Set();

arrayb4Chng.forEach(obj => {
    reduceSet.add(obj.item3);
})

let mxMap = new Map();

reduceSet.forEach(arr=>{
    let newArr = [];
    arrayb4Chng.forEach(obj => {
        if(obj.item3 === arr){
            newArr.push(obj.item1)
            mxMap.set(obj.item3, newArr)
        }
    })
})

console.log(mxMap);

deletesubj.addEventListener("click", function(){
    subjects.value = " ";
})

deleteflash.addEventListener("click", function(){
    flashcardcont.value = "";
})

copyflash.addEventListener("click", function(){
    flashcardcont.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(flashcardcont.value);
    copyalert.textContent = "cards copied!";
})


