import * as fs from 'fs';
import * as path from 'path'

const help = () => {
    console.log('hello! welcome to luna')
}
const init = (project: string) => {
    const indexJS = path.join(project,'index.ts')
    fs.mkdir(project, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            return;
        }
        fs.writeFile(indexJS, '', 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
        });
    });

}
function main() {

    const args = process.argv[2]
    if (args == 'init') init('myProject1');
    if (!args) { console.log('bolnaaa maahi bolnaaaa'); return }
    console.log(args)
}


main()