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
let index;


function removeActive(){
    files.forEach((elem)=>{
        elem.classList.remove("active");
    })
}


files.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        removeActive();
        elem.classList.add("active");
    })
})


