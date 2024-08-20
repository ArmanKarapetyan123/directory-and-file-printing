import fs from 'fs';
const dir = "./folder1"

function printer(file_path: string, space = 0){
    let list = fs.readdirSync(file_path);
    
    // console.log(list);
    list.forEach((file: string) => {
        let filePath = file_path + '/' + file;
        const stat = fs.statSync(filePath);
        if(stat && stat.isDirectory()){
            console.log(" ".repeat(space) + file);
            printer(filePath, space + 5);
        }else{
            console.log(" ".repeat(space) + file);
        }
    })
    
}

printer(dir)