interface Book {
    title: string;
    author: string;
    genre: string;
  }
  
  function filterObjects<T>(objects: T[], filterCriteria: Partial<T>): T[] {
    return objects.filter((obj) => {
      for (const key in filterCriteria) {
        if (filterCriteria[key] !== obj[key]) {
          return false;
        }
      }
      return true;
    });
  }
  
  const books: Book[] = [
    { title: "Book 1", author: "Author A", genre: "Mystery" },
    { title: "Book 2", author: "Author B", genre: "Science Fiction" },
    { title: "Book 3", author: "Author A", genre: "Fantasy" },
    { title: "Book 4", author: "Author C", genre: "Mystery" },
  ];
  
  const filterCriteria: Partial<Book> = {
    genre: "Mystery",
    author: "Author A",
  };
  
  const filteredBooks = filterObjects(books, filterCriteria);
  
  console.log(filteredBooks);
  