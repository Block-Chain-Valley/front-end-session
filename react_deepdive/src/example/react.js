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
export function renderRealDOM(VirtualDOM) {
  // 가장 끝 하위요소 예외처리
  if (typeof VirtualDOM === 'string') {
    return document.createTextNode(VirtualDOM);
  }

  //tag 생성
  const $Element = document.createElement(VirtualDOM.tagName);

  // click eventListener 등록
  if (VirtualDOM.props !== null) {
    if (VirtualDOM.props.hasOwnProperty('id')) {
      $Element.id = VirtualDOM.props.id;
    }

    if (VirtualDOM.props.hasOwnProperty('onClick')) {
      $Element.addEventListener('click', VirtualDOM.props.onClick);
    }
  }

  // 재귀 호출
  VirtualDOM.children
    .map(renderRealDOM)
    .forEach(node => $Element.appendChild(node));

  return $Element;
}

/* 2번 실습 Diffing update 적용하기 */
export function diffingUpdate(parent, nextNode, previousNode, parentIndex = 0) {
  // Node가 string일 때만 변경
  if (typeof nextNode === 'string' && typeof previousNode === 'string') {
    // 바꿀 필요 없다면 return
    if (nextNode === previousNode) return;
    return parent.replaceChild(
      renderRealDOM(nextNode),
      parent.childNodes[parentIndex]
    );
  }

  //Array.prototype.entries() => [index, element]
  for (const [index] of nextNode.children.entries()) {
    diffingUpdate(
      parent.childNodes[parentIndex],
      nextNode.children[index],
      previousNode.children[index],
      index
    );
  }
}
