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
    sell: 65,
    buy: 54,
    current: 55643,
  },
  {
    name: "يوان",
    sell: 23,
    buy: 45,
    current: 6532,
  },
  {
    name: "ريال سعودي",
    sell: 56,
    buy: 54,
    current: 43453,
  },
  {
    name: "درهم بحريني",
    sell: 54,
    buy: 34,
    current: 3445,
  },
  {
    name: "يورو",
    sell: 23,
    buy: 32,
    current: 345,
  },
  {
    name: "جنيه استرليني",
    sell: 32,
    buy: 45,
    current: 2333,
  },
  {
    name: "ريال قطري",
    sell: 23,
    buy: 23,
    current: 333223,
  },
  {
    name: "دولار كندي",
    sell: 221,
    buy: 223,
    current: 23224,
  },
];

export const centralTransactions = [
  {
    bank: "الخرطوم",
    icon: require("./assets/images/fainance/md7xvn8rkmrbz2ot9eak.png"),
    status: "done",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23134",
  },
  {
    bank: "فيصل",
    icon: require("./assets/images/fainance/faisal_bank.jpeg"),
    status: "pending",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23134",
  },
  {
    bank: "النيلين",
    icon: require("./assets/images/fainance/faisal_bank.jpeg"),
    status: "rejected",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23134",
  },
  {
    bank: "الادخار",
    icon: require("./assets/images/fainance/faisal_bank.jpeg"),
    status: "done",
    comment: "سيتم استلام المبلغ الاسبوع المقبل",
    date: "Jan 4, 2029",
    id: "DP-23134",
  },
];
