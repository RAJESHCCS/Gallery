var panel1 = document.getElementById("panel-1")
var panel2 = document.getElementById("panel-2")
var panel3 = document.getElementById("panel-3")
var panel4 = document.getElementById("panel-4")
var panel5 = document.getElementById("panel-5")
var panel6 = document.getElementById("panel-6")
var panel7 = document.getElementById("panel-7")


function selectPanel(id_name){
    resetActivePanel()
    document.getElementById(id_name).classList.add('active')
    //panel1.classList.add('active')
    // panel2.classList.add('active')
    // panel3.classList.add('active')
    // panel4.classList.add('active')
    // panel5.classList.add('active')
   
}
// function selectPanel(panelnumber){
//     switch(panelnumber){
//     case 1:{
//     panel1.classList.add('active')
//     }
//     case 2:
//     {
//     panel2.classList.add('active')
//     }
//     // panel3.classList.add('active')
//     // panel4.classList.add('active')
//     // panel5.classList.add('active')
// }
function resetActivePanel(){
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
    panel6.classList.remove('active')
    panel7.classList.remove('active')

  }
// }