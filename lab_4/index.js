var printArr = (arr, text) => {
  console.log(text);
  arr.forEach((el) => console.log(el));
};

function task1() {
  console.log("-----------------------Завдання 1");
  let fruits = ["яблуко", "апельсин", "слива", "груша", "персик"];
  console.log("початковий масив: " + fruits);
  fruits.pop();
  console.log("без останнього елемента:" + fruits);
  fruits.unshift("ананас");
  console.log("додати новий фрукт на початок:" + fruits);
  fruits.sort((a, b) => a.localeCompare(b)).reverse();
  console.log("відсортовані фрукти: " + fruits);
  console.log("індекс яблука:" + fruits.indexOf("яблуко"));
}
function task2() {
  console.log("-----------------------Завдання 2");
  let colours = [
    "синій чорний",
    "зелений блакитний",
    "червоний помаранчевий",
    "жовтий коричневий",
    "білий сірий",
  ];

  let lengths = colours.map((item) => item.length);
  lengths.sort((a, b) => a - b);

  let sElement = "";
  let bElement = "";

  colours.forEach(function (element) {
    if (element.length === lengths.at(-1)) {
      bElement = element;
    }
    if (element.length === lengths[0]) {
      sElement = element;
    }
  });

  console.log(
    "найдовший елемент: " +
      bElement +
      " " +
      lengths[lengths.length - 1] +
      "\n" +
      "найкоротший елемент: " +
      sElement +
      " " +
      lengths[0]
  );
  let str = colours.join(",");
  console.log(str);
  colours = colours.filter((item) => item.includes("синій"));
  printArr(colours, "Видалені крім там де є синій:");
}

function task3() {
  console.log("-----------------------Завдання 3");
  let people = [
    { name: "vika", age: 19, position: "junior frontend" },
    { name: "mika", age: 24, position: "oracle apex dev" },
    { name: "dian", age: 19, position: "middle js dev" },
  ];
  printArr(people, "Початковий масив обєктів");

  people.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  printArr(people, "Відсортовано по іменам");

  let flrName = people.filter((obj) => {
    let regex = new RegExp("dev", "i");
    return regex.test(obj.position);
  });
  printArr(flrName, "Відфільтровано по слову dev");

  let flrAge = people.filter((obj) => obj.age > 19);
  printArr(flrAge, "Відфільтровано > 19");

  var newMan = { name: "Pes Patron", age: 3, position: "anti-miner" };
  people.push(newMan);

  printArr(people, "Додали пса");
}
function task4() {
  console.log("-----------------------Завдання 4");

  let students = [
    { name: "Олексій", age: 22, course: 4 },
    { name: "Анна", age: 20, course: 2 },
    { name: "Іван", age: 21, course: 3 },
    { name: "Марія", age: 19, course: 1 },
  ];

  students = students.filter((student) => student.name !== "Олексій");

  printArr(students, "Видалено Олексія");

  let newStudent = { name: "Петро", age: 23, course: 2 };
  students.push(newStudent);

  printArr(students, "Додано студента");

  students.sort((a, b) => b.age - a.age);

  printArr(students, "Відсортовано поовіку");

  let course3Student = students.find((student) => student.course === 3);

  console.log("Студент з 3 курсу");
  console.log(course3Student);
}
function task5() {
  console.log("-----------------------Завдання 5");
  let arr = [1, 2, 3].map((item) => item * item);
  printArr(arr, "Числа в квадраті");
  let even_num = arr.filter((item) => item % 2 === 0);
  printArr(even_num, "Парні числа");
  let result = arr.reduce((sum, current) => sum + current, 0);
  console.log("Cума всіх чисел");
  console.log(result);
  let additionalNumbers = [4, 5, 6, 7, 8];
  arr = arr.concat(additionalNumbers);
  printArr(arr, "Додані 5 чисел");
  arr.splice(0, 3);
  printArr(arr, "Видалені 3 перші елементи");
}

function task7() {
  console.log("-----------------------Завдання 7");

  let student = {
    name: "vika",
    age: 19,
    course: "Computer Science",
  };

  student.subjects = ["Math", "Physics", "Programming"];
  delete student.age;
  console.log(student);
}

function libraryManagement() {
  let books = [];

  function Add_book(title, author, genre, pages, isAvailableCheckbox) {
    books.push({
      title: title,
      author: author,
      genre: genre,
      pages: pages,
      isAvailable: isAvailableCheckbox,
    });

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isAvailable").value = "";
    document.getElementById("task6Res").innerText = `New book was added`;
  }

  function removeBook(title) {
    books = books.filter((book) => book.title !== title);

    document.getElementById("title").value = "";
    document.getElementById("task6Res").innerText = `Book was removed`;
  }

  function findBooksByAuthor(author) {
    const filteredBooks = books.filter((book) => book.author === author);
    const booksList = filteredBooks.map(
      (book) => `${book.title} by ${book.author}`
    );

    document.getElementById("author").value = "";
    document.getElementById(
      "task6Res"
    ).innerText = `Found books: ${booksList.join(", ")}`;
  }

  function sortBooksByPages() {
    books.sort((a, b) => a.pages - b.pages);

    let sortedBooksString = "Sorted books:\n";
    books.forEach((book, index) => {
      sortedBooksString += `${index + 1}. Title: ${book.title}, Author: ${
        book.author
      }, Pages: ${book.pages}, Is Available: ${book.isAvailable}\n`;
    });

    const sortedBooksElement = document.getElementById("task6Res");
    sortedBooksElement.innerText = sortedBooksString;
  }

  function toggleBookAvailability(title) {
    
    const returnedCheckbox = document.querySelector(
      "input[type='checkbox'][value='true']"
    );
    
    const isAvailable = returnedCheckbox.checked ? true : false;

    const bookIndex = books.findIndex((book) => book.title === title);

    if (bookIndex !== -1) {
      books[bookIndex].isAvailable = isAvailable;
      console.log(
        `Book "${title}" availability has been updated to ${
          isAvailable ? "true" : "false"
        }.`
      );
      document.getElementById(
        "task6Res"
      ).innerText = `Book "${title}" availability has been updated to ${
        isAvailable ? "true" : "false"
      }.`;
    } else {
      console.log(`Book "${title}" not found in the library.`);
      document.getElementById(
        "task6Res"
      ).innerText = `Book "${title}" not found in the library.`;
    }

    document.getElementById("title").value = "";
  }

  function getBooksStatistics() {
    const totalBooks = books.length;
    const availableBooks = books.filter((book) => book.isAvailable).length;
    const borrowedBooks = totalBooks - availableBooks;

    let totalPages = 0;
    books.forEach((book) => {
      totalPages += book.pages;
    });
    const averagePages = totalBooks > 0 ? totalPages / totalBooks : 0;

    document.getElementById(
      "task6Res"
    ).innerText = `Total books in the library: ${totalBooks}, Available books: ${availableBooks}, Borrowed books: ${borrowedBooks}, Average pages per book: ${averagePages}`;
  }

  return {
    Add_book,
    getBooksStatistics,
    removeBook,
    findBooksByAuthor,
    toggleBookAvailability,
    sortBooksByPages,
  };
}

const library = libraryManagement();
