const cp = require('child_process')
var inquirer = require('inquirer');
function displayList(){
    inquirer
    .prompt([
        {    
            type : 'list',
            name : 'selection', 
            choices : ['About','Academics','Skills','Projects']
        }
    ])
    .then(function (ans) {
        if (ans.selection == 'About'){
           console.log(`
           STUDENT DEVELOPER
           I am meticulous and ready to learn from new experiences. 
           A team person who can lead when needed. 
           I have good interpersonal skills. 
           An ardent nature and sports lover, I always try to improve at whatever I do.
           `)
           displayNext()

        }
        else if (ans.selection == 'Academics'){
            console.log(`
            Indira Gandhi Delhi Technical University for Women (Expected 2025)
            Bachelor of Technology in Computer science and Artificial Intelligence

            Apeejay School, Pitampura (Graduated 2021)
            class X - 96% class XII - 96.6%
            `)
            cp.execSync('open https://drive.google.com/file/d/1Ri0tCF5nBazmA6ZPY9sS8Jon7Sn4_76q/view?usp=sharing')
            displayNext()
        }
        else if (ans.selection == 'Skills'){
            console.log(`
            Python, Java, HTML, CSS, JavaScript, nodeJS, MySQL
            `)
            displayNext()
        }
        else{
            console.log(`
            Airline Management System using Python and MySQL
            File System Organisation using fs module in nodeJS
            Automation Project using puppeteer module in nodeJS
            Tribute Page, SurverForm and Product Landing pages using HTML and CSS
            `)
            cp.execSync('open https://github.com/Radhika403') //in winodws write ('start chrome http...')
            displayNext()

        }
    })
}

displayList()

function displayNext(){
    inquirer
        .prompt([
            {   
                type : 'list',
                name : 'selection', 
                choices : ['Go Back','Exit']
            }
        ])
        .then(function (ans) {
        if (ans.selection == 'Go Back'){
            displayList()
        }
        else{
            console.log('Resume Closed')
        }
    });
}