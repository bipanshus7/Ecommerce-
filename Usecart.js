import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        if (existing.quantity >= existing.stock) return state;
        return {
          ...state,
          items: state.items.map(i =>
            i.id === existing.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };

    case "UPDATE":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.qty }
            : i
        )
      };

    default:
      return state;
  }
};

export const useCart = () => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalItems = state.items.reduce((a, b) => a + b.quantity, 0);
  const totalPrice = state.items.reduce((a, b) => a + b.price * b.quantity, 0);

  return { state, dispatch, totalItems, totalPrice };
};
