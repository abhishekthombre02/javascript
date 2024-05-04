// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

// Define a function called `csv_to_array` that converts CSV data to an array.
const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
    // Split the CSV data by newline characters, map each row to an array of values split by the delimiter.
    data.split('\n').map(v=>v.split(delimiter));
  
  // Test cases
  console.log(csv_to_array('a,b\nc,d')); // [['a', 'b'], ['c', 'd']]
  console.log(csv_to_array('a;b\nc;d', ';')); // [['a', 'b'], ['c', 'd']]
  console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true)); // [['a', 'b'], ['c', 'd']]
  