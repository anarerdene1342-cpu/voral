function login(){

    let code = document.getElementById("code").value;


    if(code == "TEST123"){

        localStorage.setItem("voralLogin","true");

        window.location.href="dashboard.html";

    }

    else{

        alert("Wrong code");

    }

}