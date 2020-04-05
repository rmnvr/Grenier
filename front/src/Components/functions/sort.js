export default function sort( objectToSort ) {
  function compare( a, b ) {
    const mainA = a.main;
    const mainB = b.main;

    let comparison = 0;
    if (mainA > mainB) {
      comparison = 1
    } else if (mainA < mainB) {
      comparison = -1 
    }
    return comparison
  }

  return objectToSort.sort(compare);
}