import * as fs from 'fs';
import * as path from 'path'
import { exec } from 'child_process';
import { stdout } from 'process';

const help = () => {
    console.log('hello! welcome to luna')
}
const initExpress = (projectName: string) => {
    if (projectName != '.') {
        fs.mkdir(projectName, (err) => {
            if (err) {
                console.error(err);
                return;
            }

            fs.mkdir(path.join(projectName, 'src'), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                fs.writeFile(path.join(projectName, 'src', 'index.ts'), '// this is the entry point of your project', 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            })
            fs.mkdir(path.join(projectName, 'lib'), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                fs.writeFile(path.join(projectName, 'lib', 'lib.ts'), '// add controllers here', 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            })


        });
    }
    else{
       

            fs.mkdir('src', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                fs.writeFile(path.join('src', 'index.ts'), '// this is the entry point of your project', 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            })
            fs.mkdir(path.join('lib'), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                fs.writeFile(path.join('lib', 'lib.ts'), '// add controllers here', 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            })




    }

}

const initNext15 = (projectName : string) => {
    exec(`npx create-next-app@latest ${projectName}`, (error: Error | null, stdout: string, stderr: string) => console.log(stdout))
}

function main() {

    const args = process.argv[2]

    if (args == 'init')
        if (process.argv[3] == 'express') initExpress(process.argv[4]);
        if(process.argv[3] == 'next') initNext15(process.argv[4]);    
    
    
    // if (!args) { help(); return }

// exec('ls', (error: Error | null, stdout: string, stderr: string) => {
//   if (error) {
//     console.error(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(stdout);   
//   

// });
}


main()