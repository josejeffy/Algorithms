// quicksort using lodash

let {log} = console

let quicksort = sequence => {
  if(sequence.length<=1) return sequence
  
  let pivot = _.last(sequence)
  let partitions = _.chain(sequence)
  .dropRight()
  .partition(x=>x<pivot)
  .map(quicksort)
  .value()
  return _.concat(partitions[0],pivot,partitions[1])
}

log(quicksort([10,2,3,2,11,9,5,7]))
