// @ts-ignore
let coursesArray = [
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
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('block');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = item.title;
    let durationWrap = document.createElement('div');
    durationWrap.classList.add('duration-container');
    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.classList.add('monthDuration');
    monthDurationDiv.innerText = item.monthDuration + ' місяців';
    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.classList.add('hourDurationDiv');
    hourDurationDiv.innerText = item.hourDuration + ' годин';
    durationWrap.append(monthDurationDiv, hourDurationDiv);
    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules');
    let ul = document.createElement('ul');
    for (let itemM of item.modules) {
        let li = document.createElement('li');
        li.innerText = itemM;
        ul.appendChild(li);
    }
    modulesDiv.appendChild(ul);
    blockDiv.append(titleDiv, durationWrap, modulesDiv);
    document.body.appendChild(blockDiv);
}
export {};
//# sourceMappingURL=script.js.map