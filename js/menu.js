function closeOpenBar(){
    var closeOpen = document.getElementById('closeOpen');
    var sideBar = document.getElementById('sideBar');
    var dashBoard = document.getElementById('main-Dashboard');
    if(closeOpen.innerHTML == 'x'){
        sideBar.style.width = '40px';
        dashBoard.style.marginLeft = '40px';
        closeOpen.innerHTML = '☰';
    }else if(closeOpen.innerHTML == '☰'){
        sideBar.style.width = '200px';
        dashBoard.style.marginLeft = '200px';
        closeOpen.innerHTML = 'x';
    }
}
console.log(closeOpen.value);