import { client, checkError } from './client.js';

export async function getShoppingListItems() {
  const response = await client
    .from('reducer')
    .select(`
      *
`)
    .order('created_at', { ascending: false })
  ;
  return checkError(response);
}

export async function getShoppingListItem(shoppingListItemId) {
  const response = await client
    .from('reducer')
    .select(`
      *
`)
    .match({ id: shoppingListItemId })
    .single()
  ;
  return checkError(response);
}

export async function createShoppingListItem(fields) {
  const response = await client
    .from('reducer')
    .insert({
      ...fields,
    })
  ;
  return checkError(response);
}

export async function updateShoppingItem(shoppingItemId, fields) {
  const response = await client
    .from('reducer')
    .update({
      ...fields,
    })
    .eq('id', shoppingItemId)
  ;
  return checkError(response);
}

export async function deleteShoppingItem(shoppingItemId) {
  const response = await client
    .from('reducer')
    .delete()
    .eq('id', shoppingItemId)
  ;
  return checkError(response);
}
