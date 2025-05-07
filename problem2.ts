function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4.0)
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.0 },
  { title: "Book E", rating: 4.1 },
  { title: "Book F", rating: 4.4 },
  { title: "Book G", rating: 4.3 },
  { title: "Book H", rating: 4.2 },
];

const goodBookList = filterByRating(books);
console.log(goodBookList)