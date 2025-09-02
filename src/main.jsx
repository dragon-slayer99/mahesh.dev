import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/Loading/Loading";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </StrictMode>
);
