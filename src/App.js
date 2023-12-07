import { Routes, Route, Link } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import CreateForm from "pages/CreateForm";
import EditTodo from "pages/EditTodo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="create" element={<CreateForm />} />
                <Route path="edit/:id" element={<EditTodo />} />
                <Route
                    path="*"
                    element={
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
