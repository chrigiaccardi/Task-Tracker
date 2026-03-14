import { Routes } from '@angular/router';
import { TasksList } from './components/tasks-list/tasks-list';
import { About } from './components/about/about';


export const routes: Routes = [
    {path: '', component: TasksList},
    {path: 'about', component: About}
];
