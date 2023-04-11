// Write your solution here!
const cats = ['Milo','Otis','Garfield'];
// functions to manipulate the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const newCats = [...cats , name];
    return newCats;
}
function prependCat(name){
    const newCats = [name, ...cats];
    return newCats;
}
function removeLastCat(){
    const fewerCats = cats.slice(0 , -1);
    return fewerCats;
}
function removeFirstCat(){
    const fewerCats = cats.slice(1 , cats.length);
    return fewerCats;
}
