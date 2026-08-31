// #Kx1xgoKy8
//
// – Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.

interface ICourse {
    title: string;
    monthDuration: number;
}

// @ts-ignore
let coursesAndDurationArray:ICourse[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];


for (let item of coursesAndDurationArray) {
    let div:HTMLDivElement = document.createElement('div');
    div.classList.add('item');

    let h1:HTMLHeadingElement = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;

    let p:HTMLParagraphElement = document.createElement('p');
    p.classList.add('description');
    p.innerText = String(item.monthDuration);
    div.append(h1, p);

    document.body.appendChild(div);
}
