import { createRoot } from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import "./index.css";
import {SearchProvider} from "./context/searchContext.jsx";

createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
    </NextUIProvider>
);
