function saturdayFun(funActivity = "roller-skate") {
  return `This Saturday, I want to ${funActivity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (task = "go to the office") {
  return `This Monday, I will ${task}.`;
};
mondayWork();

function wrapAdjective(emphasis = "*") {
  return function (part1 = "special") {
    return `You are ${emphasis}${part1}${emphasis}!`;
  };
}
wrapAdjective()("a hard worker");
wrapAdjective("||")("a dedicated programmer");
