const button = document.querySelectorAll(".si");
let selectedtxt = "" ;
button.forEach(btn => {
    btn.addEventListener("click" ,  () => {
        button.forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected") ;
        selectedtxt = btn.innerText ;
    });
});

const submit = document.getElementById("sub") ;
submit.addEventListener("click" , () => {
    if(selectedtxt === ""){
        alert("select feddback first");
        return
    }
    document.querySelector(".box").innerHTML =`
    <h2 style="color: #FFEB00;
    -webkit-text-stroke: 0.9px white;
    font-size: 35px;
    padding: 5px;">thankyou for feedback</h2>
    <p style="color:white; margin-top: 10px; font-size:25px; ">Feddback : ${selectedtxt}</p>
    <p style="color:white; margin-top: 30px; font-size:25px;" >we will use your feedback to improve</p>
    `
})
