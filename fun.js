 let items = ["posho","beans","rice","sugar"]
 let quantities = [50,90,150,40]

function itemsAdd(item,quantity){
     items.push(item);
     quantities.push(quantity);
   
 }
 console.log(items);
 console.log(quantities);
 itemsAdd("soap",20);
 console.log(items);
 console.log(quantities);


function updateQuantity(){
    quantities[4] = 70
    console.log(`update ${quantities}`)
}
updateQuantity()
console.log(quantities);

function totalNumbers(){
    let total = 0;
    for(i = 0; i < quantities.length; i++){
        total += quantities[i]
    }
    return total;
}
totalNumbers();
console.log(totalNumbers());

updateQuantity();
console.log(totalNumbers());

function lowestItem(){
    let lowestIndex = 0;
    for(i=0; i < quantities.length; i++){
        if(quantities[i] < quantities[lowestIndex]){
            lowestIndex=i;
        }
    }
    return items[lowestIndex];
}
console.log(lowestItem());

