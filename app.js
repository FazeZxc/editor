
document.addEventListener('DOMContentLoaded', function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    
    editor.getSession().setMode("ace/mode/javascript");
    
    var defaultCode = "console.log('Hello World');\n";
        editor.setValue(defaultCode, 1);

        editor.setOptions({
            showPrintMargin: false,
            highlightActiveLine: true,
            autoScrollEditorIntoView: true
        });
});


let files = document.querySelectorAll(".file_name");


function saveFile(){
    let content = ace.createEditSession("some");
}

setInterval(saveFile,1000);

function removeActive(){
    files.forEach((elem)=>{
        elem.classList.remove("active");
    })
}


files.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        removeActive();
        elem.classList.add("active");
        showContent();
    })
})

function showContent(){
    files.forEach((elem)=>{
        editor.setSession(content);
    })
}

