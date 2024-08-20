import fs from 'fs';
const dir = "./folder1"


function printer(file_path: string){
    let list = fs.readdirSync(file_path);
    console.log(list);
}

printer(dir)