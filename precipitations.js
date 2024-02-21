const precip = json.data.map((e) => e.precip);
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const result = {};

for (let i = 0; i <= days.length - 1; i++) {
  const day = days[i];
  result[day] = precip.reduce((sum, value, index) => {
    return sum + (index % 7 === i ? value : 0);
  }, 0);
}

console.log(result);
