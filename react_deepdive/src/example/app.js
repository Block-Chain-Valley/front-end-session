/* @jsx createElement */
/* react.js에서 작성한 함수 import 하기 */
import { createElement, renderRealDOM, diffingUpdate } from './react';

/* 실습 diffingUpdate, useState 활용하기 */
let previousNode;
let currentIndex = 0;
const hookState = [];

function useState(initialState) {
  const index = currentIndex;

  if (hookState.length === index) {
    hookState.push(initialState);
  }

  const setState = callback => {
    hookState[index] = callback(hookState[index]);
    render();
  };

  currentIndex++;
  return [hookState[index], setState];
}

function App() {
  const [totalPrice, setTotalPrice] = useState(2000);

  return (
    <div>
      <button id='btnAdd' onClick={() => setTotalPrice(prev => prev + 2000)}>
        아메리카노 추가
      </button>
      <strong id='price'>{`금액: ${totalPrice}`}</strong>
    </div>
  );
}

const render = () => {
  const $root = document.querySelector('#root');

  if ($root.firstChild) {
    const nextNode = App();
    diffingUpdate($root, nextNode, previousNode);
    previousNode = nextNode;
  } else {
    previousNode = App();
    $root.appendChild(renderRealDOM(previousNode));
  }
  currentIndex = 0;
};

render();
