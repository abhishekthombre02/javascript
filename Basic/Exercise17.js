//Write a JavaScript program to remove a character at the specified position in a 
//given string and return the modified string.

let surname="Thombare";
let position=5;

const updateName=(surname,position)=>{

    part1=surname.substring(0,position);
    part2=surname.substring(position+1)
    return part1+part2;
}

console.log(updateName(surname,position));