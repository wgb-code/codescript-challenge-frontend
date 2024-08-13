import { navTemplate, openNavbar } from '../pages/nav/nav.js';

function expandedLabProjects() {

    let btnExpand = document.getElementById('labProjectsItemsExpand');
    let projectItems = document.getElementById('labProjectsItems');

    if (projectItems.classList.contains('expanded')) {
        projectItems.classList.remove('expanded');
        btnExpand.textContent = 'Expandir Projetos';

    } else {
        projectItems.classList.add('expanded');
        btnExpand.textContent = 'Recolher Projetos';
    }
}

navTemplate();

window.openNavbar = openNavbar;
window.expandedLabProjects = expandedLabProjects;