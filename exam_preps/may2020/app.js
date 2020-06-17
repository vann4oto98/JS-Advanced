function solve() {
    let addButton = document.getElementById("add");

    addButton.addEventListener("click", addTask);

    function addTask(){
        event.preventDefault();
        let taskName = document.getElementById("task");
        let description = document.getElementById("description");
        let date = document.getElementById("date");

        if (valid(taskName, description, date)) {
            let div = document.querySelectorAll("section")[1].children[1];

            let article = document.createElement("article");
            let h3 = document.createElement("h3");
            h3.textContent = taskName.value;

            let p = document.createElement("p");
            p.textContent = description.value;

            let pDate = document.createElement("p");
            pDate.textContent = date.value;

            let buttonDiv = document.createElement("div");
            buttonDiv.classList.add("flex");

            let startButton = document.createElement("button");
            startButton.classList.add("green");
            startButton.textContent = "Start";
            startButton.addEventListener("click", startTask);
    
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("red");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", deleteTask);

            buttonDiv.appendChild(startButton);
            buttonDiv.appendChild(deleteButton);
            article.appendChild(h3);
            article.appendChild(p);
            article.appendChild(pDate);
            article.appendChild(buttonDiv);

            div.appendChild(article);
        }

        taskName.value = "";
        description.value = "";
        date.value = "";
    }

    function valid(taskName, description, date){
        if (taskName.value.length>0 && description.value.length >0 && date.value.length > 0){
            return true;
        } else{
            return false;
        }
    }

    function startTask(){
        let div = document.querySelectorAll("section")[2].children[1];
        let wholeArticle = event.target.parentNode.parentNode;
        wholeArticle.querySelector("button").remove();
        
        let finishButton = document.createElement("button");
        finishButton.classList.add("orange");
        finishButton.textContent = "Finish";
        finishButton.addEventListener("click", finishTask)
        wholeArticle.querySelector(".flex").appendChild(finishButton);
        div.appendChild(wholeArticle);
    }

    function finishTask(){
        let div = document.querySelectorAll("section")[3].children[1];
        let wholeArticle = event.target.parentNode.parentNode;
        wholeArticle.querySelector("button").remove();
        wholeArticle.querySelector("button").remove();

        div.appendChild(wholeArticle);
    }

    function deleteTask(){
        event.target.parentNode.parentNode.remove();
    }
}