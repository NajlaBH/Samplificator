// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  DefaultPage,
  CrudCollaborator,
  Collabolist,
  CollabEdit,
} from './';

export default {
  path: '/api/',
  name: 'Collaborator',
  childRoutes: [
    { path: 'collaborator', name: 'Collaborators display', component: DefaultPage, isIndex: true },
    { path: 'crudcollaborator', name: 'CRUD for collaborator', component: CrudCollaborator },
    { path: 'collabolist', name: 'Best CRUD for collaborator', component: Collabolist },
    { path: '/api/v1/staffusers/:id', name: 'Edit collaborator', component: CollabEdit },
  ],
};
