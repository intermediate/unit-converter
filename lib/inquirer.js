const inquirer = require('inquirer');
let number_pattern = /^[+-]?\d+(\.\d+)?$/;
module.exports = {
  askInput: () => {
    const questions = [
      {
        name: 'input_num',
        type: 'input',
        message: 'Enter Numerical Value:',
        validate: function( value ) {
          if (value.length && number_pattern.test(value)) {
            return true;
          } else {
            return 'Please enter numerical value only.';
          }
        }
      },
      {
        name: 'measure_unit',
        type: 'input',
        message: 'Enter your input Measure Unit:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your input measure unit';
          }
        }
      },
      {
        name: 'target_measure_unit',
        type: 'input',
        message: 'Enter your Target Measure Unit:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your target measure unit';
          }
        }
      },
      {
        name: 'student_response',
        type: 'input',
        message: 'Enter Student Response :',
        validate: function( value ) {
          if (value.length && number_pattern.test(value)) {
            return true;
          } else {
            return 'Please enter numerical value for student response.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
