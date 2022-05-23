export const getDays = (startDay, endDate) => {
  const day = [];
  // 5
  // 30

  for (let i = 0; i < startDay; i++) {
    day.push(" ");
  }
  //["","","","","",1,2,.......]
  for (let i = 1; i <= endDate; i++) {
    day.push(i);
  }
  return day;
};
