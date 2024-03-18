import chalk from 'chalk'

const colleagues = ['sam', 'marla', 'wara', 'alex',];

const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow];

console.log("Colleagues:");

colleagues.forEach(colleague => {
  console.log(chalk.keyword('orange')(colleague));
});