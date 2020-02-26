const inquirer  = require('./lib/inquirer');
const chalk = require('chalk');
let tempArrConfig=["celsius","kelvin","fahrenheit","rankine"];
let volArrConfig=["liters","tablespoons","cubic-inches","cups","cubic-feet","gallons"];
let tempConverter = require('./lib/tempConverter');
let volConverter = require('./lib/volConverter');
let res;
const run = async () => {
  const input = await inquirer.askInput();
  //console.log(input.measure_unit);
  if(tempArrConfig.indexOf(input.measure_unit.toLowerCase())!=-1 && tempArrConfig.indexOf(input.target_measure_unit.toLowerCase())!=-1)
{
 res = await tempConverter.convert(input.input_num,input.measure_unit.toLowerCase(),input.target_measure_unit.toLowerCase());
  
}else if(volArrConfig.indexOf(input.measure_unit.toLowerCase())!=-1 && volArrConfig.indexOf(input.target_measure_unit.toLowerCase())!=-1){
    res = await volConverter.convert(input.input_num,input.measure_unit.toLowerCase(),input.target_measure_unit.toLowerCase());
 
}else{
    console.log(chalk.yellow('invalid'))
    return;  
  }
  if(res.toFixed(10)== parseFloat(input.student_response).toFixed(10)){
    console.log(chalk.green('correct'))
  }else{
    console.log(chalk.red('incorrect'))
  }      
};

run();
