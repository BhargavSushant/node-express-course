const manager = "Hussain";
const programmer = "sushant";
const project = "shopping cart";
const project_cost = "$1 million";

const printStakeHolders = (names) => {
  console.log(
    `Project ${names.project} is being managed by ${names.manager} & being made by ${names.programmer}`
  );
};

module.exports = { manager, project, programmer };
console.log(module.exports);
