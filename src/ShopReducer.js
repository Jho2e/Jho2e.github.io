import React, { useReducer, createContext, useContext } from "react";

const ListOfCart = {
  products: [
    {
      id: 1,
      productName: "흰 옷", // 상품 이름
      price: 7000, // 원
      productCount: 3, // 몇 개
      check: true,
      deliveryDay: 2,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
    },
  ],
};

function CartReducer(state, action) {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return {
        products: state.products.concat(action.todo),
      };
    case "TOGGLE_PRODUCT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_PRODUCT":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`뭔지 모름: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  // useReducer 함수.
  const [state, dispatch] = useReducer(CartReducer, ListOfCart);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
