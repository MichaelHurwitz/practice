function triangle(base) {
    if (base % 2 === 0) {
      console.log("The base must be an odd number.");
      return;
    }
    
    const middle = Math.floor(base / 2);
  
    for (let i = 0; i <= middle; i++) {
      const spaces = ' '.repeat(middle - i);
      const stars = '*'.repeat(2 * i + 1);
      console.log(spaces + stars + spaces);
    }
  }
  
  triangle(5);
  