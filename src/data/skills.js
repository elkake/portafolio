import img1 from '../img/html.png';
import img2 from '../img/css.png';
import img3 from '../img/js.png';
import img4 from '../img/react.png';
import img5 from '../img/terminal.png';
import img6 from '../img/npm.png';
import img7 from '../img/github.png';
import img8 from '../img/node.png';

const data = [
  {
    id: '1',
    nombre: 'HTML',
    color: 'naranja',
    img: img1,
    descripcion: ['Conceptos básicos', 'Buenas prácticas', 'Metodología BEM'],
  },
  {
    id: '2',
    nombre: 'CSS',
    color: 'celeste',
    img: img2,
    descripcion: [
      'Conceptos básicos',
      'Display',
      'Grid',
      'Flex',
      'Responsive design',
    ],
  },
  {
    id: '3',
    nombre: 'JS',
    color: 'amarillo',
    img: img3,
    descripcion: [
      'Conceptos básicos',
      'Manipulación del DOM',
      'Asincronismo',
      'Fetch',
      'indexedDB',
    ],
  },
  {
    id: '4',
    nombre: 'React',
    color: 'azul',
    img: img4,
    descripcion: ['Funcional Components', 'hooks', 'ReactRouterDom', 'Vite'],
  },

  {
    id: '5',
    nombre: 'terminal',
    color: 'gris',
    img: img5,
    descripcion: ['Ubicarse', 'Crear archivos', 'Remover', 'Configurar alias'],
  },
  {
    id: '6',
    nombre: 'NPM',
    color: 'rojo',
    img: img6,
    descripcion: ['Manejo de Dependencias', 'Configuracion de Paquetes', 'git'],
  },
  {
    id: '7',
    nombre: 'GitHub',
    color: 'sangre',
    img: img7,
    descripcion: ['Crear Repositorios', 'Fork', 'Gh-pages', 'Push & Pull'],
  },
  {
    id: '8',
    nombre: 'NodeJS',
    color: 'verde',
    img: img8,
    descripcion: ['Paquetes de consola', 'Llamadas http con Express','CRUD + mySQL'],
  },
];

export default data;
