const hexPEG = process.argv[2];

const hexArr = hexPEG.match(/.{1,2}/g, 8);

// hexArr.forEach(hexie => console.log(parseInt(`0x${hexie}`)));

const decArr = hexArr.map(hexie => parseInt(`0x${hexie}`));

console.log(decArr);
