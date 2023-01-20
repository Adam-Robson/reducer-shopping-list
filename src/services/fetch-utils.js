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

export async function getItem(ItemId) {
  const res = await client
    .from('reducer')
    .select(`
      *
`)
    .match({ id: ItemId })
    .single()
  ;
  return checkError(res);
}

export async function createItem(description, qty) {
  const res = await client
    .from('reducer')
    .insert({
      description,
      qty
    })
  ;
  return checkError(res);
}

export async function updateItem(itemId, item) {
  const res = await client
    .from('reducer')
    .update({
      ...item,
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
