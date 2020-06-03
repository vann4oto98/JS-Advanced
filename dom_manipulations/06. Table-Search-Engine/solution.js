function solve() {
   let button = document.getElementById("searchBtn");
   button.addEventListener("click", search);

   function search(e){
      let input = document.getElementById("searchField").value;
      let allStudents = document.getElementsByTagName("tbody")[0].children;
      Array.from(allStudents).forEach(function(student){
         student.classList.remove("select");
         let studentName = student.children[0].textContent;
         let studentEmail = student.children[1].textContent;
         let studentCourse = student.children[2].textContent;
         
         if (studentName.indexOf(input) != -1 || studentEmail.indexOf(input) != -1|| studentCourse.indexOf(input) != -1){
           student.className = "select"; 
         }
      
      })

      document.getElementById("searchField").value = "";
   }
}