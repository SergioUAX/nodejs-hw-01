import path from 'node:path';
const dir = 'src/db';
const file = 'db.json';
export const PATH_DB = path.join(process.cwd(), dir, file);
//console.log(PATH_DB);
