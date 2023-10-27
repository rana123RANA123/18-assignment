
function showOutput(seconddiv){
    document.getElementById("seconddiv").innerHTML = seconddiv
}



function clearOutput(){
    document.getElementById("seconddiv").innerHTML = ""
}



const whereWe = () => {
    seconddiv.innerHTML = "Show in Console"
    console.log(window)
}



const goGoogle = () => {
    window.location.href = "https://www.google.com/"
    seconddiv.innerHTML = "Navigate any link with Javascript"
}



const replaceURL = () => {
    window.location.replace("https://www.google.com/")

}



var popupWindow;

const openPopup = () => {
    popupWindow = window.open("" , "myWindow" , "height=500px,width=500,left=400,top=50")
}





const fillContent = () => {
    popupWindow.document.write("<h1>Hello World</h1>")
}




const assignURL = () => {
    popupWindow.location.assign("https://www.google.com/")
}




const closePopup = () => {
    popupWindow.close()
}




const findProblemInAlert = () => {
    alert("Find The Problem In Any Code Function")
}




    // this code use for find any problem in code  
    // try{

    // }
    // catch(error){
    //     console.log(error
    // }
