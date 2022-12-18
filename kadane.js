let {log} = console

let kadane = seq => {
  let sum = 0,max = 0
  seq.forEach(x=>{
    sum=Math.max(0,sum+x)
    max=Math.max(sum,max)
  })
  return max
}

log(kadane([-2, 1, -3, 4, -1, 2, 1 , -5, 4]))
