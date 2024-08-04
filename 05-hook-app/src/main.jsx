import ReactDOM from 'react-dom/client';
import './index.css';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { App } from './App';
// import './08-useReducer/';

// import { CounterCustomHook } from './01-useState/CounterCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';

import { RouterProvider } from 'react-router-dom';
import { getRoutes } from './routes';

const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //{/* <CounterApp /> */}
  //{/* <CounterCustomHook /> */}
  // <SimpleForm />
  // <FormWithCustomHook />
  // <MultipleCustomHook />
  // <FocusScreen />
  // <Layout />
  // <Memorize />
  // <MemoHook />
  // <CallbackHook />
  // <Padre />
  // <TodoApp />
  <RouterProvider router={router} />
  // </React.StrictMode>
);
