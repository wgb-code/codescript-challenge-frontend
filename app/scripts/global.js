import { navTemplate, openNavbar } from '../pages/nav/nav.js';
import { footerTemplate } from '../pages/footer/footer.js';

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
footerTemplate();

window.openNavbar = openNavbar;
window.expandedLabProjects = expandedLabProjects;