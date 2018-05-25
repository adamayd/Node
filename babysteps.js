const sumNum = process.argv
                      .filter(arg => (parseInt(arg) == arg))
                      .reduce((acc, cur) => (acc += parseInt(cur)),0)
console.log(sumNum)
