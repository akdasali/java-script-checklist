
function paperRequirements(firstBCopy,secBCopy,thirdBCopy){
       let firstBookPage=100*firstBCopy;
       let secondBookPage=200*secBCopy;
       let thirdBookPage=300*thirdBCopy;
       let totalPaper=firstBookPage+secondBookPage+thirdBookPage;
       return totalPaper;
}
let totalPaperNeed=paperRequirements(2,2,2);
console.log(totalPaperNeed);