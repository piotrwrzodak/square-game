
export default function GridSearch(row, col, array) {
    
    let index = row.concat(col)
    let listOfIndexes = [];
    let nodes = [];
    let newIndex = '';

    nodes.push(index)

    while(nodes.length > 0) {
        let node = nodes[0];
        let row  = node.slice(0,1);
        let col = node.slice(1,2);

        let index = row.concat(col)

        // if index is already in the array it won't be added
        if (!listOfIndexes.includes(index)){
            listOfIndexes.push(index)
        }
        
        //console.log(listOfIndexes);

        // check if block above/below/leftside/rightside is in the array

        if (parseInt(row) - 1 !== -1 ? (array[row][col] === array[parseInt(row) - 1][col] && !listOfIndexes.includes((parseInt(row) - 1).toString().concat(col))) : false) {
            //console.log('up')
            newIndex = ((parseInt(row) - 1).toString()).concat(col)
            nodes.push(newIndex)
            
        }
        if (parseInt(row) + 1 !== 5 ? (array[row][col] === array[parseInt(row) + 1][col] && !listOfIndexes.includes((parseInt(row) + 1).toString().concat(col))) : false) {
            //console.log('down')
            newIndex = ((parseInt(row) + 1).toString()).concat(col)
            nodes.push(newIndex)
            
        }
        if (parseInt(col) - 1 !== -1 ? (array[row][col] === array[row][parseInt(col) - 1] && !listOfIndexes.includes(((row).concat(parseInt(col) - 1)).toString())) : false) {
            //console.log('left')
            newIndex = (row).concat((parseInt(col) - 1).toString())
            nodes.push(newIndex)
            
        }
        if (parseInt(col) + 1 !== 5 ? (array[row][col] === array[row][parseInt(col) + 1] && !listOfIndexes.includes(((row).concat(parseInt(col) + 1)).toString())) : false) {
            //console.log('right')
            newIndex = (row).concat((parseInt(col) + 1).toString())
            nodes.push(newIndex)
            
        }

        nodes.shift();
    }

    return listOfIndexes;
}