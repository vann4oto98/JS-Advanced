function jsonToHtml(input) {
    let objArray = JSON.parse(input);
    let html = `<table>\n`;
    html += `   <tr>`;

    Object.keys(objArray[0]).forEach(k => html += `<th>${k}</th>`);
    html += `</tr>\n`;

    for (let obj of objArray) {
        html += `    <tr>`;
        Object.keys(obj).forEach(k => html += `<td>${htmlEscape(String(obj[k]))}</td>`);
        html += `</tr>\n`
    }

    html += `</table>`;

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"\&\<\>]/g, ch => map[ch]);
    }

}

jsonToHtml(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])