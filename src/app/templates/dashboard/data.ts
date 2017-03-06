
var convertSeconds = function(seconds) {
  const hrDividend = 60;
  const minDividend = 60;

  return (seconds/minDividend)/hrDividend;
};

export let steps: any = [
  {
    'name': 'Sunday',
    'value': 323,
  },
  {
    'name': 'Monday',
    'value': 5573,
  },
  {
    'name': 'Tuesday',
    'value': 628,
  },
  {
    'name': 'Wednesday',
    'value': 145,
  },
  {
    'name': 'Thursday',
    'value': 80,
  },
  {
    'name': 'Friday',
    'value': 173,
  },
  {
    'name': 'Saturday',
    'value': 7155,
  },
];

export let sleep: any = [
    {
      'name': 'Saturday, 2/23',
      'value': convertSeconds(0)
    },
    {
      'name': 'Friday, 2/24',
      'value': convertSeconds(16080)
    },
    {
      'name': 'Thursday, 2/25',
      'value': convertSeconds(30240)
    },
    {
      'name': 'Wednesday, 2/26',
      'value': convertSeconds(22800)
    },
    {
      'name': 'Tuesday, 2/27',
      'value': convertSeconds(16560)
    },
    {
      'name': 'Monday, 2/28',
      'value': convertSeconds(0)
    },
    {
      'name': 'Sunday, 3/1',
      'value': convertSeconds(0)
    },
];
