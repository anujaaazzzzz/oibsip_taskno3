function convert() {
    // Get input value and selected unit
    const temp = parseFloat(document.getElementById("temp").value);
    const unit = document.getElementById("unit").value;

    // Convert to other units
    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case "celsius":
            celsius = temp;
            fahrenheit = (celsius * 1.8) + 32;
            kelvin = celsius + 273.15;
            break;
        case "fahrenheit":
            fahrenheit = temp;
            celsius = (fahrenheit - 32) / 1.8;
            kelvin = celsius + 273.15;
            break;
        case "kelvin":
            kelvin = temp;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 1.8) + 32;
            break;
    }

    // Display the converted values
    document.getElementById("output").innerHTML = `Celsius: ${celsius.toFixed(2)}°C<br>
                                                   Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>
                                                   Kelvin: ${kelvin.toFixed(2)}K`;
}

function clearFields() {
    document.getElementById("temp").value = "";
    document.getElementById("output").innerHTML = "";
  }
  
  