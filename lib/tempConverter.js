let res;
module.exports = {
    convert: (input,measure_unit,target_measure_unit) => {
        input= parseFloat(input,10);
        switch (measure_unit) {
            case "celsius":
            switch (target_measure_unit) {
              case "celsius":
                res = input;
                break;
              case "kelvin":
                  res = input+273.15;
                  break;
                case "fahrenheit":
                   res = (input*9/5)+32;
                  break;
                case "rankine":
                  res = (input+273.15)*9/5;
                  break;
              }
              break;
            case "kelvin":
            switch (target_measure_unit) {
                case "celsius":
                  res = input-273.15;
                  break;
                case "kelvin":
                  res = input;
                  break;
                case "fahrenheit":
                   res = (input- 273.15)* 9/5+32;
                  break;
                case "rankine":
                  res = input*9/5;
                  break;
              }
              break;
            case "fahrenheit":
            switch (target_measure_unit) {
                case "celsius":
                  res = (input- 32) * 5/9 ;
                  break;
                case "kelvin":
                  res = (input-32) * 5/9 + 273.15;
                  break;
                case "fahrenheit":
                  res=input;
                  break;  
                case "rankine":
                  res = input+459.67;
                  break;
              }
            break;
            case "rankine":
            switch (target_measure_unit) {
                case "celsius":
                  res = (input- 491.67) * 5/9 ;
                  break;
                case "kelvin":
                  res = input * 5/9;
                  break;
                case "fahrenheit":
                   res = input- 459.67;
                  break;
                case "rankine":
                  res=input;
                  break;  
                }
              break;
          }
    return res;      
    }
  };