export const banksReserved = [
  {
    id: 1,
    name: "بنك الخرطوم",
    value: 90,
    lastUpdated: "21-12-2021",
    variant: "gradient-primary",
  },
  {
    id: 2,
    name: "بنك النيلين",
    value: 12,
    lastUpdated: "21-12-2021",
    variant: "gradient-info",
  },
  {
    id: 3,
    name: "بنك فيصل",
    value: 46,
    lastUpdated: "21-12-2021",
    variant: "gradient-danger",
  },
  {
    id: 4,
    name: "بنك الادخار",
    value: 20,
    lastUpdated: "21-12-2021",
    variant: "gradient-success",
  },
];

export const mostUsedBank = [
  {
    values: [50, 30, 40],
    names: ["الخرطوم", "النيلين", "فيصل"],
    colors: ["success", "info", "danger"],
  },
];

export const currencies = [
  {
    name: "دولار امريكي",
    sale_price: 65,
    buy_price: 54,
    current: 55643,
  },
  {
    name: "يوان",
    sale_price: 23,
    buy_price: 45,
    current: 6532,
  },
  {
    name: "ريال سعودي",
    sale_price: 56,
    buy_price: 54,
    current: 43453,
  },
  {
    name: "درهم بحريني",
    sale_price: 54,
    buy_price: 34,
    current: 3445,
  },
  {
    name: "يورو",
    sale_price: 23,
    buy_price: 32,
    current: 345,
  },
  {
    name: "جنيه استرليني",
    sale_price: 32,
    buy_price: 45,
    current: 2333,
  },
  {
    name: "ريال قطري",
    sale_price: 23,
    buy_price: 23,
    current: 333223,
  },
  {
    name: "دولار كندي",
    sale_price: 221,
    buy_price: 223,
    current: 23224,
  },
];

export const centralTransactions = [
  {
    bank: "الخرطوم",
    icon: require("./assets/images/fainance/md7xvn8rkmrbz2ot9eak.png"),
    currencyType: "دولار",
    price: 20000,
    status: "done",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23133",
  },
  {
    bank: "فيصل",
    icon: require("./assets/images/fainance/faisal_bank.jpeg"),
    currencyType: "دولار",
    price: 20000,
    status: "pending",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23132",
  },
  {
    bank: "النيلين",
    icon: require("./assets/images/fainance/CBOS.jpg"),
    currencyType: "دولار",
    price: 20000,
    status: "rejected",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23134",
  },
  {
    bank: "الادخار",
    icon: require("./assets/images/fainance/faisal_bank.jpeg"),
    currencyType: "دولار",
    price: 20000,
    status: "done",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23131",
  },
];

export const banks = [
  {
    id: 1,
    name: "الخرطوم",
    logo: require("./assets/images/fainance/unnamed.jpg"),
    email: "example@email.com",
    address: "المحطة الوطى بحري",
  },
  {
    id: 2,
    name: "النيلين",
    logo: require("./assets/images/fainance/unnamed.jpg"),
    email: "example@email.com",
    address: "المحطة الوطى بحري",
  },
  {
    id: 3,
    name: "فيصل",
    logo: require("./assets/images/fainance/unnamed.jpg"),
    email: "example@email.com",
    address: "المحطة الوطى بحري",
  },
  {
    id: 4,
    name: "المشرق",
    logo: require("./assets/images/fainance/unnamed.jpg"),
    email: "example@email.com",
    address: "المحطة الوطى بحري",
  },
];
