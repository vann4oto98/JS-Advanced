function lockedProfile() {
    let btns = Array.from(document.getElementsByTagName("button"));
    btns.forEach(button => button.addEventListener("click", show));


    function show(e) {
        let button = e.target;
        let profile = button.parentNode;
        let moreInformation = profile.getElementsByTagName("div")[0];
        let lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === "unlock") {
            if (button.textContent === "Show more") {
                moreInformation.style.display = "inline-block";
                button.textContent = "Hide it";
            } else if(button.textContent === "Hide it"){
                moreInformation.style.display = "none";
                button.textContent === "Show more";
            }
        }
    }


}