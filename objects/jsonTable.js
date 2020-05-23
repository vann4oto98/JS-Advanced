function jsonToHtml(data){
    let parsedData = data.map(x => JSON.parse(x));

    let createTable = content => `<table>${content}\n</table>`;
    let createRow = content => `\n  <tr>\n${content} </tr>`;
    let createData = content => `       <td>${content}</td>\n`;

    let result = parsedData.reduce((accRows, row) => {

        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
             return tdAcc + createData(td)
         }, '');

         return accRows + createRow(tdForPerson);

    } , '')

    return createTable(result);
}

console.log(jsonToHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
));