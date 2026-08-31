interface ICourse {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

// @ts-ignore
let coursesArray:ICourse[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (let item of coursesArray) {
    let blockDiv:HTMLDivElement = document.createElement('div');
    blockDiv.classList.add('block');

    let titleDiv:HTMLDivElement = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = item.title;

    let durationWrap:HTMLDivElement = document.createElement('div');
    durationWrap.classList.add('duration-container');

    let monthDurationDiv:HTMLDivElement = document.createElement('div');
    monthDurationDiv.classList.add('monthDuration');
    monthDurationDiv.innerText = item.monthDuration + ' місяців';

    let hourDurationDiv:HTMLDivElement = document.createElement('div');
    hourDurationDiv.classList.add('hourDurationDiv');
    hourDurationDiv.innerText = item.hourDuration + ' годин';

    durationWrap.append(monthDurationDiv, hourDurationDiv);

    let modulesDiv:HTMLDivElement = document.createElement('div');
    modulesDiv.classList.add('modules');
    let ul:HTMLUListElement = document.createElement('ul');
    for (let itemM of item.modules) {
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = itemM;
        ul.appendChild(li);
    }
    modulesDiv.appendChild(ul);

    blockDiv.append(titleDiv, durationWrap, modulesDiv)
    document.body.appendChild(blockDiv);
}