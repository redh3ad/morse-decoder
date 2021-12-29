const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let wArr = expr.split('**********');

  let lArr = []

  for (let item of wArr) {
    let letters = item.match(/\d{10}/g);
    lArr.push(letters);
  }

  let result = '';

  for (let item of lArr) {
    item = item.map(str => {
      str = str.replace(/10/g, '.')
               .replace(/11/g, '-')
               .replace(/0/g, '');
      return str.replace(str, MORSE_TABLE[str]);
    });

    result += item.join('') + ' ';
  }

  return result.trim()
}

module.exports = {
    decode
}