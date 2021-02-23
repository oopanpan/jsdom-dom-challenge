let counter = document.getElementById('counter');

document.addEventListener('DOMContentLoaded', function(){
    setInterval(function(){
        counter.innerText = (second++).toString()
    }, 1000);
    let second = 0;
})

