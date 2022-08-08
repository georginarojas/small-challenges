function solutionTeste(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const b_temp = [];
  let isSimilar = false;
  let hasChanged = false;

    for (let i = 0; i < a.length; i++) {
    console.log(`Iterating: ${i}, A = ${a[i]}, B = ${b[i]}`);
    if(a[i] === b[i]) {
      b_temp.push(b[i]);
      // b.splice(i, 1);
      console.log("1 ---- ", b_temp, b)
    } else {
      if(hasChanged) {
        console.log("%%%%%%%")
        // return isSimilar
        break;
      }

      b.map((value, index) => {
        // console.log("AA ---- ", value, index, a[i])
        if(a[i] === value) {
          b_temp.push(value);
          b[index] = b[i];
          // console.log("2 ---- ", b_temp, b)
          hasChanged = true
          return;
        } 
      });
    }
  }
  
  
  if(a.length === b_temp.length) {
    isSimilar = a.every((value, index) => {
      return value === b_temp[index]
    })
    console.log("Compare is ", isSimilar)
  }
  console.log(a, b_temp);
  console.log("IS SIMILAR ", isSimilar)

  return isSimilar;
}

// const a = [4, 6, 3];
// const b = [3, 4, 6];

// const a = [1, 3, 2]
// const b = [1, 3, 2]

const a = [1, 3, 2]
const b = [1, 2, 3]
solution(a, b);

function solution(a, b) {
  const ad = a.filter((v,i)=>v!=b[i])
  const bd = b.filter((v,i)=>v!=a[i])
  console.log("ad.join('')", ad.join(''))
  return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
