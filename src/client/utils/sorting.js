

export const sortByName = (list, order) => {
  if (order === "descending") {
    return [...list].sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  if (order === "ascending") {
    return [...list].sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return list;
};

