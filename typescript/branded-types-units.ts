type Mile = number & { readonly Mile: unique symbol };
type Kilometer = number & { readonly Kilometer: unique symbol };

const convertToKilometers = (miles: Mile): Kilometer => {
  return (miles * 1.60934) as Kilometer;
};

const convertToMiles = (kilometers: Kilometer): Mile => {
  return (kilometers / 1.60934) as Mile;
};

// USAGE
const distanceInMiles: Mile = 5 as Mile;
const distanceInKilometers: Kilometer = convertToKilometers(distanceInMiles);
