function temperature(){
    let inputvalue = document.querySelector("#inputvalue").value;
    let type = document.querySelector("#temptype");
    let result = document.querySelector("#result");
    if(inputvalue == ""){
        alert("please Enter any number...")
        location.reload()
    }
    else if(type.value =="Fehrenheit"){
    let Fehrenheit = Number.parseInt(inputvalue) *(9 / 5) +32
    result.innerHTML = Fehrenheit.toFixed(3)+"F";
    }
    else if(temptype.value== "celcius"){
    let celcius = Number.parseInt(inputvalue) *1
    result.innerHTML = celcius.toFixed(3)+"&deg;c";
    }
    else if(temptype.value== "Kelvin"){
    let Kelvin = Number.parseInt(inputvalue)+ 273.15
    result.innerHTML = Kelvin.toFixed(3)+"K";
    }
    else if(temptype.value== "Rankine"){
    let Rankine = Number.parseInt(inputvalue) * (9 /5)+491.67
    result.innerHTML = Rankine.toFixed(3)+ "3" 
    }
}