//@flow
type ZoneType = {
  min: number,
  max: number
};

type CalculatorResultType = {
  mhr: number,
  rrh: number,
  zones: Array<ZoneType>
};

const MAX_HEART_RATE = 220;
const ZONE_PERCENTS = [
  {min: 0.5, max: 0.6},
  {min: 0.61, max: 0.7},
  {min: 0.71, max: 0.8},
  {min: 0.81, max: 0.93},
  {min: 0.94, max: 1}
];

export default function CulculatorLogic(age: number = 0, rhr: number = 0): CalculatorResultType {
  let maximumHeartRate = MAX_HEART_RATE - age;
  let reservedHeartRate = maximumHeartRate - rhr;
  let zonesHeartRate = ZONE_PERCENTS.map(percent => {
    return {
      min: parseInt(reservedHeartRate * percent.min, 10) + rhr,
      max: parseInt(reservedHeartRate * percent.max, 10) + rhr
    }
  });
  return {
    mhr: maximumHeartRate,
    rrh: reservedHeartRate,
    zones: zonesHeartRate
  }
};
