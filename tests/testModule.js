var assert = require('chai').assert;
let tempConverter = require('../lib/tempConverter');
let volConverter = require('../lib/volConverter');

describe('Unit Conversion Testing', function() {
describe('Celsius to Fahrenheit Conversion Testing', function() {
  it('should return 32 Fahrenheit for 0 Celsius', function() {
    let res= tempConverter.convert(0,'celsius','fahrenheit'); 
    assert.equal(res, 32);
  });
});
describe('Celsius to Kelvin Conversion Testing', function() {
  it('should return 273.15 Fahrenheit for 0 Celsius', function() {
    let res= tempConverter.convert(0,'celsius','kelvin'); 
    assert.equal(res, 273.15);
  });
});
describe('Celsius to Rankine Conversion Testing', function() {
  it('should return 491.66999999999996 rankine for 0 Celsius', function() {
    let res= tempConverter.convert(0,'celsius','rankine'); 
    assert.equal(res, 491.66999999999996);
  });
});
describe('Fahrenheit to Celsius Conversion Testing', function() {
  it('should return 0 Celsius for 32 Fahrenheit', function() {
    let res= tempConverter.convert(32,'fahrenheit','celsius'); 
    assert.equal(res, 0);
  });
});
describe('Fahrenheit to Kelvin Conversion Testing', function() {
  it('should return 273.15 Kelvin for 32 Fahrenheit', function() {
    let res= tempConverter.convert(32,'fahrenheit','kelvin'); 
    assert.equal(res, 273.15);
  });
});
describe('Fahrenheit to Rakine Conversion Testing', function() {
  it('should return 491.67 Rakine for 32 Fahrenheit', function() {
    let res= tempConverter.convert(32,'fahrenheit','rankine'); 
    assert.equal(res, 491.67);
  });
});
describe('Kelvin to Celsius Conversion Testing', function() {
  it('should return 0 Celsius for 273.15 Kelvin', function() {
    let res= tempConverter.convert(273.15,'kelvin','celsius'); 
    assert.equal(res, 0);
  });
});
describe('Kelvin to rankine Conversion Testing', function() {
  it('should return 1.8 rankine for 1 kelvin', function() {
    let res= tempConverter.convert(1,'kelvin','rankine'); 
    assert.equal(res, 1.8);
  });
});
describe('Kelvin to Fahrenheit Conversion Testing', function() {
  it('should return 1.8 Kelvin for -459.67 Fahrenheit', function() {
    let res= tempConverter.convert(-459.67,'kelvin','Fahrenheit'); 
    assert.equal(res, 1.8);
  });
});
describe('Rankine To Celsius Conversion Testing', function() {
  it('should return 0 Celsius for 491.67 rankine', function() {
    let res= tempConverter.convert(491.67,'rankine','celsius'); 
    assert.equal(res, 0);
  });
});
describe('Rankine To Fahrenheit Conversion Testing', function() {
  it('should return 0 Fahrenheit for 491.67 rankine', function() {
    let res= tempConverter.convert(491.67,'rankine','Fahrenheit'); 
    assert.equal(res, 0);
  });
});
describe('Rankine To Kelvin Conversion Testing', function() {
  it('should return 0 Kelvin for 491.67 rankine', function() {
    let result= tempConverter.convert(9,'rankine','Kelvin'); 
    assert.equal(result, 0);
  });
});
describe('Gallons to Tablespoons Conversion Testing', function() {
    it('should return 256 Tablespoons for 1 Gallons', function() {
      let res= volConverter.convert(1,'gallons','tablespoons'); 
      assert.equal(res, 256);
    });
  });

  describe('Gallons to Litre Conversion Testing', function() {
    it('should return 3.78541 Litre for 1 Gallons', function() {
      let res= volConverter.convert(1,'gallons','liters'); 
      assert.equal(res, 3.78541178);
    });
  });
  describe('Gallons to cubic-inches Conversion Testing', function() {
    it('should return 231 cubic-inches for 1 Gallons', function() {
      let res= volConverter.convert(1,'gallons','cubic-inches'); 
      assert.equal(res, 231);
    });
  });

  describe('Gallons to cups Conversion Testing', function() {
    it('should return 16 cups for 1 Gallons', function() {
      let res= volConverter.convert(1,'gallons','cups'); 
      assert.equal(res, 16);
    });
  });

  describe('Gallons to cubic-feet Conversion Testing', function() {
    it('should return 0.13368090368290889 cubic-feet for 1 Gallons', function() {
      let res= volConverter.convert(1,'gallons','cubic-feet'); 
      assert.equal(res, 0.13368090368290889);
    });});
    describe('liters to Tablespoons Conversion Testing', function() {
      it('should return 67.6280454 Tablespoons for 1 liters', function() {
        let res= volConverter.convert(1,'liters','tablespoons'); 
        assert.equal(res, 67.6280454);
      });
    });
  
    describe('liters to Gallons Conversion Testing', function() {
      it('should return 0.2641720524 gallons for 1 liters', function() {
        let res= volConverter.convert(1,'liters','gallons'); 
        assert.equal(res, 0.2641720524);
      });
    });
    describe('liters to cubic-inches Conversion Testing', function() {
      it('should return 61.02374409 cubic-inches for 1 liters', function() {
        let res= volConverter.convert(1,'liters','cubic-inches'); 
        assert.equal(res, 61.02374409);
      });
    });
  
    describe('liters to cups Conversion Testing', function() {
      it('should return 4.226752838 cups for 1 liters', function() {
        let res= volConverter.convert(1,'liters','cups'); 
        assert.equal(res, 4.226752838);
      });
    });
  
    describe('liters to cubic-feet Conversion Testing', function() {
      it('should return 0.03531466672 cubic-feet for 1 liters', function() {
        let res= volConverter.convert(1,'liters','cubic-feet'); 
        assert.equal(res, 0.03531466672);
      });});

      describe('tablespoons to liters Conversion Testing', function() {
        it('should return 0.014786764782055936 liters for 1 tablespoons', function() {
          let res= volConverter.convert(1,'tablespoons','liters'); 
          assert.equal(res, 0.014786764782055936);
        });
      });
    
      describe('tablespoons to Gallons Conversion Testing', function() {
        it('should return 0.00390625 gallons for 1 tablespoons', function() {
          let res= volConverter.convert(1,'tablespoons','gallons'); 
          assert.equal(res, 0.00390625);
        });
      });
      describe('tablespoons to cubic-inches Conversion Testing', function() {
        it('should return 0.9023641941887746 cubic-inches for 1 tablespoons', function() {
          let res= volConverter.convert(1,'tablespoons','cubic-inches'); 
          assert.equal(res, 0.9023641941887746);
        });
      });
    
      describe('tablespoons to cups Conversion Testing', function() {
        it('should return 0.0625 cups for 1 tablespoons', function() {
          let res= volConverter.convert(1,'tablespoons','cups'); 
          assert.equal(res, 0.0625);
        });
      });
    
      describe('tablespoons to cubic-feet Conversion Testing', function() {
        it('should return 0.0005221896665975635 cubic-feet for 1 tablespoons', function() {
          let res= volConverter.convert(1,'tablespoons','cubic-feet'); 
          assert.equal(res, 0.0005221896665975635);
        });});
        
        describe('cups to liters Conversion Testing', function() {
          it('should return 0.23658823637296003 liters for 1 cups', function() {
            let res= volConverter.convert(1,'cups','liters'); 
            assert.equal(res, 0.23658823637296003);
          });
        });
      
        describe('cups to Gallons Conversion Testing', function() {
          it('should return 0.0625 gallons for 1 cups', function() {
            let res= volConverter.convert(1,'cups','gallons'); 
            assert.equal(res, 0.0625);
          });
        });
        describe('cups to cubic-inches Conversion Testing', function() {
          it('should return 14.4375 cubic-inches for 1 cups', function() {
            let res= volConverter.convert(1,'cups','cubic-inches'); 
            assert.equal(res, 14.4375);
          });
        });
      
        describe('cups to tablespoons Conversion Testing', function() {
          it('should return 16 tablespoons for 1 cups', function() {
            let res= volConverter.convert(1,'cups','tablespoons'); 
            assert.equal(res, 16);
          });
        });
      
        describe('cups to cubic-feet Conversion Testing', function() {
          it('should return 0.008355035538143662 cubic-feet for 1 cups', function() {
            let res= volConverter.convert(1,'cups','cubic-feet'); 
            assert.equal(res, 0.008355035538143662);
          });});  
});