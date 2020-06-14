function sort(array, string){
   if (string === "asc"){
       return array.sort((a,b) => a-b);
   } else{
       return array.sort((a, b) => b-a);
   }
}

console.log(sort([14, 7, 17, 6, 8], 'desc'));