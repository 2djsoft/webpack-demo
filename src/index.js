//commonJS 스펙 **중요
// 가져오기 require , 배포하기 export
let _ = require('lodash');
import './style.css';
import './hello.scss';
import treeImage from '../assets/img_tree.gif';
import smImage from '../assets/paper.gif';

import {area, circumference} from './js/circle.js';
import cube from './js/cube.js';

const component = () => {

  console.log(area(15));
  console.log(circumference(20));

  console.log(cube);
  console.log(cube.calulate(5));

  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' 12 ');

  const img = document.createElement('img');
  img.src = treeImage;
  element.appendChild(img);

  const img2 = document.createElement('img');
  img2.src = smImage;
  element.prepend(img2);

  return element;
}

document.body.appendChild(component());