import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../Components/Counter";
import { increase, decrease, setDiff } from "../Modules/Counter";

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.

  /*
  NOTE:
  이렇게 사용하면 phone상태 변경시에도 불필요하게 counter까지 리렌더링된다.
  Phone은 상태에서 받은 객체 그대로 다시 반환하여 사용하는 반면, 
  Counter는 객체를 재구성 한 다음 반환 받아 사용하기 때문이다.
  
  const { number, diff } = useSelector((state) => ({
    number: state.Counter.number,
    diff: state.Counter.diff,
  }));

  그래서 아래와 같이 사용할 수 있다.
  const { number, diff } = useSelector((state) => state.Counter);
  하지만 아래와 같이 shallowEqual를 useSelector에 넘겨주면서
  사용할 수 있음.
  */

  const { number, diff } = useSelector(
    (state) => ({
      number: state.Counter.number,
      diff: state.Counter.diff,
    }),
    shallowEqual
  );

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

/**
 * Container에선 관리 할 상태와, 디스패치를 준비하고
 * Presenter에선 컨테이너로부터 받은 props이용해 View만 관장합니다.
 */
