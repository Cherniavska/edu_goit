"use strict";
// ================================================================

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100
// };

// // Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
// // Первый элемент это ключ свойства, второй это значение.
// const entries = Object.entries(hotel);
// //[Array(2), Array(2), Array(2)]
// console.log(entries);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

// console.log(`${key}: ${value}`);
// }
// ====================================================================
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7
// };

// const values = Object.values(goods); // [6, 3, 4, 7]
// console.log(values);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// ====================================================================
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 111,
//   lorence: 99
// };

// const findBestWorker = function(stats) {
//   const keys = Object.keys(stats);
//   console.log(keys);
//   let max = 0;
//   let bestWorker;
//   for (const key of keys) {
//     console.log(key);
//     console.log(stats[key]);
//     if (max < tasksCompleted[key]) {
//       max = stats[key];
//       bestWorker = key;
//     }
//   }
//   return bestWorker;
// };
// console.log(findBestWorker(tasksCompleted));

// =============================================================================================================
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 111,
//   lorence: 99
// };

// const findBestWorker = function(stats) {
//   const results = Object.entries(stats);
//   console.table(results);
//   let max = 0;
//   let bestWorker;

//   for (const result of results) {
//     // console.table(result);
//     if (max < result[1]) {
//       max = result[1];
//       bestWorker = result[0];
//     }
//   }

//   return bestWorker;
// };
// console.log(findBestWorker(tasksCompleted));

// =====================================================================================
/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.entries и for...of
// */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// user.mood = "happy";
// console.log(user);

// user.hobby = "javascript";
// console.log(user);

// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(key, ":", user[key]);
// }

// const entries = Object.entries(user);
// for (const entry of entries) {
//   console.log(entry);
// }

// =============================================================================

/*  
//   Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// const countProps = function(obj) {
//   const properties = Object.keys(obj);
//   console.log(properties);
//   let numberOfProperties = properties.length;
//   return numberOfProperties;
// };

// // Вызовы функции для проверки
// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 3, c: "hello" })); // 3
//

// ==============================================================================
/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
// */

// const isObjectEmpty = function(obj) {
//   const arFromObj = Object.keys(obj);
//   if (arFromObj.length === 0) {
//     return true;
//   }
//   return false;
// };

// // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// ==============================================================================================

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// const countTotalSalary = function(obj) {
//   const salaries = Object.values(obj);

//   let totalSalary = 0;
//   for (const salary of salaries) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// };

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// ================================================================================

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" }
// ];

// const getAllPropValues = function(arr, prop) {
//   const values = [];

//   for (const ar of arr) {
//     console.log(ar[prop]);

//     if (prop in ar) {
//       values.push(ar[prop]);
//     }
//   }

//   return values;
// };

// // Вызовы функции для проверки
// console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']

// console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']

// console.log(getAllPropValues(users, "active")); // []

// ===================================================================================================

/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */
// -----------------------------------------------------------------------

// const names = [
//   "Радар",
//   "Сканер",
//   "Дроид",
//   "Захват",
//   "Двигатель",
//   "Топливный бак"
// ];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function(names, price) {
//   const combine = [];
//   for (let i = 0; i < names.length; i += 1) {
//     const obj = {
//       name: names[i],
//       price: prices[i]
//     };
//     combine.push(obj);
//   }

//   return combine;
// };

// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price

// ---------------------------------------------------------------------------

// const names = [
//   "Радар",
//   "Сканер",
//   "Дроид",
//   "Захват",
//   "Двигатель",
//   "Топливный бак"
// ];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function(names, prices) {
//   const combine = {};
//   for (let i = 0; i < names.length; i += 1) {
//     const key = names[i];
//     combine[key] = prices[i];
//   }
//   return combine;
// };

// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price

// ==================================================================================================
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};
const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];
      if (note.id === id) {
        return this.notes[i];
      }
    }
  },
  saveNote(note) {
    this.notes.push(note);
  },
  deleteNote(id) {
    const note = this.findNoteById(id);
    let i = this.notes.indexOf(note);

    this.notes.splice(i, 1);
  },
  updateNoteContent(id, updatedContent) {
    let note = this.findNoteById(id);
    if (note.id === id) {
      let i = this.notes.indexOf(note);
      this.notes.splice(i, 1);
      note = { ...note, ...updatedContent };
    }
    this.saveNote(note);
  },
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (note.id === id) {
      note.priority = priority;
      return;
    }
  },
  filterNotesByQuery(query) {
    const NotesByQuery = [];
    for (let note of this.notes) {
      let noteTitle = note.title.toLowerCase();

      let noteBody = note.body.toLowerCase();
      let keyWord = query.toLowerCase();

      if (
        noteTitle.includes(keyWord) === true ||
        noteBody.includes(keyWord) === true
      ) {
        NotesByQuery.push(note);
      }

      return NotesByQuery;
    }
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
  },
  filterNotesByPriority(priority) {
    const filteredNotes = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];
      if (note.priority === priority) {
        filteredNotes.push(note);
      }
    }
    return filteredNotes;
  }
};
// =====================================================================================================================================================
// Далее идет код для проверки работоспособности объекта, вставь его в конец скрипта. Твоя реализация методов объекта notepad должна проходить этот тест.

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: "id-1",
  title: "JavaScript essentials",
  body:
    "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
  priority: Priority.HIGH
});

notepad.saveNote({
  id: "id-2",
  title: "Refresh HTML and CSS",
  body:
    "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW
});

console.log("Все текущие заметки: ", notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority("id-4", Priority.NORMAL);

console.log(
  "Заметки после обновления приоритета для id-4: ",
  notepad.getNotes()
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority("id-3", Priority.LOW);

console.log(
  "Заметки после обновления приоритета для id-3: ",
  notepad.getNotes()
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery("html")
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery("javascript")
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  "Отфильтровали заметки по нормальному приоритету: ",
  notepad.filterNotesByPriority(Priority.NORMAL)
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent("id-3", {
  title: "Get comfy with React.js or Vue.js"
});

console.log(
  "Заметки после обновления контента заметки с id-3: ",
  notepad.getNotes()
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
// notepad.deleteNote("id-2");
// console.log("Заметки после удаления с id -2: ", notepad.getNotes());
