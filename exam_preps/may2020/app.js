function solve(){
    const sections = document.querySelectorAll('section');
    const openDiv = sections.item(1).querySelectorAll('div').item(1);
    const progressDiv = sections.item(2).querySelectorAll('div').item(1);
    const fineshedDiv = sections.item(3).querySelectorAll('div').item(1);

    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    document.querySelector('#add').addEventListener("click", addEl);

    function addEl(e){
        e.preventDefault();
        const taskName = inputTask.value.trim();
        const taskDesc = inputDesc.value.trim();
        const taskDate = inputDate.value.trim();

        if (taskName.length > 0 && taskDesc.length > 0 && taskDate.length > 0) {
           
            const startBtn = el('button', 'Start', {className: 'green'});
            const finishBtn = el('button', 'Finish', {className: 'orange'});
            const deleteBtn = el('button', 'Delete', {className: 'red'});
           
            const btnDiv = el('div', [
                startBtn, 
                deleteBtn
            ], {className: 'flex'});


            const task = el('article', [
                el('h3', taskName),
                el('p', `Description: ${taskDesc}`),
                el('p', `Due Date: ${taskDate}`),
                btnDiv
            ]);

            startBtn.addEventListener("click", () => {
                progressDiv.appendChild(task);
                startBtn.remove();
                btnDiv.appendChild(finishBtn);
            });

            finishBtn.addEventListener("click", () => {
                fineshedDiv.appendChild(task);
                btnDiv.remove();
            });

            deleteBtn.addEventListener("click", () => {
                task.remove();
            })

            openDiv.appendChild(task);
        }



        function el(type, content, attributes){
            const result = document.createElement(type);
            
            if (attributes !== undefined) {
                Object.assign(result, attributes);
            }
        
            if (Array.isArray(content)){
                content.forEach(append);
            } else{
                append(content);
            }
        
            function append(node){
                if (typeof node === 'string'){
                    node = document.createTextNode(node);
                } 
                result.appendChild(node);
            }
            return result;
        }
    }
}