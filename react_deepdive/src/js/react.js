export function createElement(tagName, props, ...children) {
  return { tagName, props, children: children.flat() };
}

/* JSX */
// const jsxDOM = (
//   <div id='container'>
//     <p>VirtualDOM</p>
//   </div>
// );

/* JSX 추상화 예시 */
const VirtualDOM = {
  tag: 'div',
  props: {
    id: 'container',
  },
  children: [
    {
      tag: 'p',
      props: {},
      children: ['VirtualDOM'],
    },
  ],
};

/* 1번 실습 Virtual DOM을 RealDOM으로 렌더링하기 */

/* 2번 실습 Diffing update 적용하기 */
