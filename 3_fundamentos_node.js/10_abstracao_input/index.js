const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'nota1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'nota2',
        message: 'Qual a segunda nota?',
    }
]).then((answers) => {
    console.log(answers);
    const media = (parseFloat(answers.nota1) + parseFloat(answers.nota2)) / 2;
    console.log('Média:', media);
}).catch(err => console.log(err));
