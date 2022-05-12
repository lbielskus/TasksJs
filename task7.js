const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
  };

  function showObjectKeys(car) {
      return Object.keys(car);
  }

  console.log(showObjectKeys(audi));