$(function(){
    const inputs = document.querySelectorAll('.input')
    
    function focusFunc() {
        $(this).parent().parent().addClass('focus');
    }
    
    function blurFunc() {
        if (this.value == "") {
            $(this).parent().parent().removeClass('focus');
        }
    }
    inputs.forEach(i => {
        i.addEventListener('focus', focusFunc)
        i.addEventListener('blur', blurFunc)
    })
    
    $(".btn").on('click', function() {
        window.location.href = "https://www.baidu.com";
        window.location.replace("index.html")
        console.log(3);
    });
});