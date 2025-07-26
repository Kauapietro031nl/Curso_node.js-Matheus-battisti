const chalk = require('chalk')

const nota = 5

console.log(chalk.green('parabéns você está aprovado'))

if (nota >= 6) {
    console.log(chalk.green('parabéns você está aprovado'))

} else {
    console.log(chalk.red('você está reprovado'))
}

