import { combineReducers } from "redux";
import counter from "./Counter";
import phone from "./Phone";

const rootReducer = combineReducers({
  Counter: counter,
  Phone: phone,
  // 여기서 정의한 이름이 console에 찍힘
});

export default rootReducer;
//리덕스의 combineReducers라는 함수로 만든 모듈들을 하나로 합칩니다.
