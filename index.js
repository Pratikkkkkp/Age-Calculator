const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const { years, months } = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${years} ${
      years > 1 ? "years" : "year"
    } and ${months} ${months > 1 ? "months" : "month"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();

  // Adjust for days of the month
  if (currentDate.getDate() < birthdayDate.getDate()) {
    months--;
  }

  // Handle negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

btnEl.addEventListener("click", calculateAge);
