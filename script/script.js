function ViewPass(){
    let view = document.getElementById("pass")
    let viewpassword = document.querySelector('.icon-eye')

    if(view.type === "password"){
        view.type = "text"
        viewpassword.style.backgroundColor ='#ffc632';

    }else{
        view.type = "password"
        viewpassword.style.backgroundColor= '#24221f';
    }
}