import { client, checkError } from './client.js';

export async function getItems() {
  const res = await client
    .from('reducer')
    .select(`
      *
`)
    .order('created_at', { ascending: false })
  ;
  return checkError(res);
}

export async function getItem(itemId) {
  const res = await client
    .from('reducer')
    .select(`
      *
`)
    .match({ id: itemId })
    .single()
  ;
  return checkError(res);
}

export async function createItem(user, newText) {
  const res = await client
    .from('reducer')
    .insert({
      newText, 
      user_id: '0000'
    });
  return checkError(res);
}

export async function updateItem(itemId, body) {
  const res = await client
    .from('reducer')
    .update({
      ...body,
    })
    .eq('id', itemId)
  ;
  return checkError(res);
}

export async function deleteItem(itemId) {
  const res = await client
    .from('reducer')
    .delete()
    .eq('id', itemId)
  ;
  return checkError(res);
}
