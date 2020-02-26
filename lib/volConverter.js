let res;
module.exports = {
    convert: (input,measure_unit,target_measure_unit) => {
        input= parseFloat(input,10);
        switch (measure_unit) {
            case "liters":
            switch (target_measure_unit) {
              case "liters":
                res = input;
                break;
              case "tablespoons":
                res = input*67.6280454;
                break;
              case "cubic-inches":
                  res = input*61.02374409;
                  break;
                case "cups":
                   res = input*4.226752838;
                  break;
                case "cubic-feet":
                  res = input*0.03531466672;
                  break;
                case "gallons":
                  res = input*0.2641720524;
                  break;  
              }
              break;
            case "tablespoons":
            switch (target_measure_unit) {
              case "liters":
                res = input/67.6280454;
                break;
              case "tablespoons":
                res = input;
                break;
              case "cubic-inches":
                  res = input/1.1082;
                  break;
                case "cups":
                   res = input/16;
                  break;
                case "cubic-feet":
                  res = input/1915.013;
                  break;
                case "gallons":
                  res = input/256;
                  break;  
              }
              break;
              case "cubic-inches":
              switch (target_measure_unit) {
                case "liters":
                  res = input/61.02374409;
                  break;
                case "tablespoons":
                  res = input*1.108225108;
                  break;
                case "cubic-inches":
                    res = input;
                    break;
                  case "cups":
                     res = input/15.2559;
                    break;
                  case "cubic-feet":
                    res = input/1728;
                    break;
                  case "gallons":
                    res = input/231;
                    break;  
                }
                break;
            case "cups":
            switch (target_measure_unit) {
              case "liters":
                res = input/4.22675284;
                break;
              case "tablespoons":
                res = input*16;
                break;
              case "cubic-inches":
                  res = input*14.4375;
                  break;
                case "cups":
                   res = input;
                  break;
                case "cubic-feet":
                  res = input/119.6883;
                  break;
                case "gallons":
                  res = input*0.0625;
                  break;  
              }
                break;
              case "cubic-feet":
                switch (target_measure_unit) {
                  case "liters":
                    res = input*28.31684659;
                    break;
                  case "tablespoons":
                    res = input*1915.012987;
                    break;
                  case "cubic-inches":
                      res = input*1728;
                      break;
                    case "cups":
                       res = input*119.6883117;
                      break;
                    case "cubic-feet":
                      res = input;
                      break;
                    case "gallons":
                      res = input*7.480519481;
                      break;  
                  }
                    break;
                    case "gallons":
                    switch (target_measure_unit) {
                      case "liters":
                        res = input*3.78541178;
                        break;
                      case "tablespoons":
                        res = input*256;
                        break;
                      case "cubic-inches":
                          res = input*231;
                          break;
                        case "cups":
                           res = input*16;
                          break;
                        case "cubic-feet":
                          res = input/7.4805;
                          break;
                        case "gallons":
                          res = input;
                          break;  
                      }
                        break;  
          }
    return res;      
    }
  };