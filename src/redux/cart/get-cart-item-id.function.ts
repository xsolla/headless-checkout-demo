export const getCartItemIdByTitle = (title: string): string =>
  String(title).trim().toLowerCase().split(' ').join('_');
