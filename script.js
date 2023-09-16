const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(function(person) {
      return person.profession === "developer";
    });
    console.log("Developers:");
    developers.forEach(function(developer) {
      console.log(developer.name);
    });
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter a name:");
    const age = parseInt(prompt("Enter an age:"));
    const profession = prompt("Enter a profession:");
    data.push({ name: name, age: age, profession: profession });
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const admins = data.filter(function(person) {
      return person.profession === "admin";
    });
    admins.forEach(function(admin) {
      const index = data.indexOf(admin);
      data.splice(index, 1);
    });
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "Raghu", age: 26, profession: "Engineer" },
      { name: "Amoghavarsha", age: 26, profession: "Trader" },
    ];
  
    const combinedArray = data.concat(dummyArray);
    console.log("Combined Array:");
    console.log(combinedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce(function(sum, person) {
      return sum + person.age;
    }, 0);
    const avgAge = totalAge / data.length;
    console.log("Average Age:", avgAge.toFixed(2));
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some(function(person) {
      return person.age > 25;
    });
    console.log("Is there anyone above 25 years old?", above25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = Array.from(new Set(data.map(function(person) {
      return person.profession;
    })));
    console.log("Unique Professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort(function(a, b) {
      return a.age - b.age;
    });
    console.log("Sorted by Age:");
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(function(person) {
      return person.name === "john";
    });
    if (john) {
      john.profession = "manager";
      console.log("John's profession updated to 'manager'");
    } else {
      console.log("John not found in the data.");
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(function(person) {
      return person.profession === "developer";
    }).length;
    const adminCount = data.filter(function(person) {
      return person.profession === "admin";
    }).length;
    console.log("Total Developers:", developerCount);
    console.log("Total Admins:", adminCount);
  }
  