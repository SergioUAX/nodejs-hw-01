import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      //console.log('File reading SUCCESFUL');
      return JSON.parse(data);
  } catch (err) {
      console.error('File read ERROR:', err);
      return [];
  }
};

