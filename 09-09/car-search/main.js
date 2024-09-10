const cars = [
    {
      model: "Toyota Corolla",
      year: 2022,
      color: "White",
    },
    {
      model: "Honda Civic",
      year: 2021,
      color: "Black",
    },
    {
      model: "Ford Mustang",
      year: 2023,
      color: "Red",
    },
    {
      model: "Chevrolet Camaro",
      year: 2020,
      color: "Blue",
    },
    {
      model: "Tesla Model 3",
      year: 2024,
      color: "Silver",
    },
    {
      model: "BMW 3 Series",
      year: 2022,
      color: "Gray",
    },
    {
      model: "Audi A4",
      year: 2021,
      color: "Black",
    },
    {
      model: "Mercedes-Benz C-Class",
      year: 2023,
      color: "White",
    },
    {
      model: "Mazda 6",
      year: 2020,
      color: "Blue",
    },
    {
      model: "Volkswagen Passat",
      year: 2022,
      color: "Red",
    },
    {
      model: "Subaru Impreza",
      year: 2021,
      color: "Green",
    },
    {
      model: "Hyundai Elantra",
      year: 2020,
      color: "Silver",
    },
    {
      model: "Kia Optima",
      year: 2023,
      color: "Black",
    },
    {
      model: "Nissan Altima",
      year: 2022,
      color: "White",
    },
    {
      model: "Dodge Charger",
      year: 2021,
      color: "Yellow",
    },
  ];
  
  const input = document.querySelector("input");
  const carsContainer = document.querySelector(".cars-search-container");
  let currentCarList = [...cars];
  
  const filterCarsByInput = (e) => {
    const currentText = e.target.value.toLowerCase();
  
    currentCarList = cars.filter((car) => {
      return car.model.toLowerCase().includes(currentText);
    });
  
    renderList(currentCarList);
  };
  
  const setButtonEventListener = (btn, idx) => {
    btn.addEventListener("click", (e) => {
      alert(
        currentCarList[idx].color +
          " " +
          currentCarList[idx].model +
          " " +
          currentCarList[idx].year
      );
    });
  };
  
  const renderList = (cars) => {
    carsContainer.innerHTML = "";
  
    cars.forEach((car, idx) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");
      carsContainer.appendChild(itemContainer);
  
      const para = document.createElement("p");
      para.textContent = car.model;
  
      const btn = document.createElement("button");
      btn.textContent = "Info";
  
      itemContainer.appendChild(para);
      itemContainer.appendChild(btn);
  
      setButtonEventListener(btn, idx);
    });
  };
  
  input.addEventListener("input", filterCarsByInput);
  
  renderList(currentCarList);
  