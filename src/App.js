import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import CreateForm from "pages/CreateForm";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="create" element={<CreateForm />} />
            </Route>
        </Routes>
    );
}

export default App;
