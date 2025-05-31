import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('No contacts exist');
    return;
  }
  contacts.pop();
  await writeContacts(JSON.stringify(contacts, null, 2));
  console.log('Last contact delete SUCCESSFUL');
};

removeLastContact();
