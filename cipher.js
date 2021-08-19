const message = 'I love cryptography'
const messageArr = message.toLowerCase().split('')

const cypher = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
          arr[i] = 'g';
        } else if (arr[i] === 'b') {
          arr[i] = 'h';
        } else if (arr[i] === 'c') {
          arr[i] = 'i';
        } else if (arr[i] === 'd') {
          arr[i] = 'j';
        } else if (arr[i] === 'e') {
          arr[i] = 'k';
        } else if (arr[i] === 'f') {
          arr[i] = 'l';
        } else if (arr[i] === 'g') {
          arr[i] = 'm';
        } else if (arr[i] === 'h') {
          arr[i] = 'n';
        } else if (arr[i] === 'i') {
          arr[i] = 'o';
        } else if (arr[i] === 'j') {
          arr[i] = 'p';
        } else if (arr[i] === 'k') {
          arr[i] = 'q';
        } else if (arr[i] === 'l') {
          arr[i] = 'r';
        } else if (arr[i] === 'm') {
          arr[i] = 's';
        } else if (arr[i] === 'n') {
          arr[i] = 't';
        } else if (arr[i] === 'o') {
          arr[i] = 'u';
        } else if (arr[i] === 'p') {
          arr[i] = 'v';
        } else if (arr[i] === 'q') {
          arr[i] = 'w';
        } else if (arr[i] === 'r') {
          arr[i] = 'x';
        } else if (arr[i] === 's') {
          arr[i] = 'y';
        } else if (arr[i] === 't') {
          arr[i] = 'z';
        } else if (arr[i] === 'u') {
          arr[i] = 'a';
        } else if (arr[i] === 'v') {
          arr[i] = 'b';
        } else if (arr[i] === 'w') {
          arr[i] = 'c';
        } else if (arr[i] === 'x') {
          arr[i] = 'd';
        } else if (arr[i] === 'y') {
          arr[i] = 'e';
        } else if (arr[i] === 'z') {
          arr[i] = 'f';
        } else {
            arr[i] = arr[i]
        }
    }
    return arr
}

console.log(cypher(messageArr))