function ocupation(){
    var ocupation = document.getElementById('ocupation');
    for(var i = 0; i <= 80;i++){
        var sortCar = parseInt(Math.random() *2) + 1;
        var color = sortCar == 1 ? 'green' : 'red';
        ocupation.innerHTML += `
        <div>
            <i class="fas fa-car" style="color:${color}"></i>
            <label>${i}<label>
        </div>
        `
    }

}

window.addEventListener('load' , () =>{
    ocupation();
})