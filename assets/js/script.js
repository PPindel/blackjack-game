let hitButton = document.getElementById("hit");
hitButton.addEventListener("click", function() {

    let userTable = document.getElementById("user").innerHTML;
    userTable += `
    <div class="cards"><p>?</p></div>`
    document.getElementById("user").innerHTML = userTable;

    let cpuTable = document.getElementById("cpu").innerHTML;
    cpuTable += `
    <div class="cards"><p>?</p></div>`
    document.getElementById("cpu").innerHTML = userTable;

});