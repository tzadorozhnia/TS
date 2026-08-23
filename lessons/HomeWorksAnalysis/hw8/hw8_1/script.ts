// #iz6emEsP2BA
//
// – є масив
//
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

interface Course12 {
    id?: number;
    title: string;
    monthDuration: number
}

// @ts-ignore
let coursesAndDurationArray:Cours[] = [
    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
];

// let newArr = coursesAndDurationArray.map((value, index) =>
//     ({id:index + 1, title: value.title, monthDuration: value.monthDuration}));

let newArr:Course12[] = coursesAndDurationArray.map<Course12>((course: Course12, index: number) => ({...course, id: index + 1}));

console.log(newArr);