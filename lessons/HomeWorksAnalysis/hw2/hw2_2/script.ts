// #awLXL6TBzg
//
// взяти масив coursesAndDurationArray. За допомогою if перевірити кожен його елемент на тривалість навчання.
//     У випадку, якщо тривалість довша за 5 місяців, вивести в консоль "Супер".
type Courses = {
    title: string;
    monthDuration: number;}

let coursesAndDurationArray: Courses[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(`Супер (${course.title})`);
    }
}