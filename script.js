const convertTemp = () =>{
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_type');
    const valueTemp = temp_type.options[tempSelected.selectedIndex].value;

    //Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
        return fahrenheit;
    }

    //Celsius to Kelvin
    const celToKel = (cel) => {
        let kelvin = (parseFloat(cel) + 273.15).toFixed(2);
        return kelvin;
    }

    //Fahrenheit to Celcius
    const fahToCel = (fah) =>{
        let celsius = ((fah - 32) * 5 / 9).toFixed(2);
        return celsius;
    }

    //Fahrenheit to Kelvin
    const  fahToKel = (fah) =>{
        let kelvin = ((fah - 32) * 5 / 9 + 273.15).toFixed(2);
        return kelvin;
    }

    //Kelvin to Celsius
    const kelToCel = (kel) => {
        let celsius = (kel - 273.15).toFixed(1);
        let fahrenheit = ((kel - 273.15)* 9 / 5 + 32).toFixed(2);
        return celsius;
    }

    //Kelvin to Fahrenheit
    const kelToFah = (kel) => {
        let fahrenheit = ((kel - 273.15)* 9 / 5 + 32).toFixed(2);
        return fahrenheit;
    }

    if(valueTemp == 'cel') {
        document.getElementById("result1").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("result2").innerHTML = celToKel(inputTemp) + " Kelvin";
    }
    else if(valueTemp == 'fah'){
        document.getElementById("result1").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = fahToKel(inputTemp) + " Kelvin";
    }
    else{
        document.getElementById("result1").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = kelToFah(inputTemp) + "&#176; Fahrenheit";
    }
}