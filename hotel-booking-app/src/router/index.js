import LayoutDefault from '../layoutDefault/layoutDefault';
// import BookRoom from "../pages/BookRoom";
import CreateRoom from '../pages/CreateRoom';
import Dashboard from "../pages/Dashboard"; // Đã sửa lỗi chính tả
import Home from '../pages/Home';
import ListRoom from '../pages/ListRoom';

export const router = [
    {
        path: "/",
        element: <Home />,
        children: [
            // {
            //     path: "book-room", // Đường dẫn con không có dấu '/'
            //     element: <BookRoom />
            // }
        ]
    },
    {
        path: "/admin",
        element: <LayoutDefault />,
        children: [
            {
                path: "", // Đã sửa lỗi chính tả
                element: <Dashboard />
            },
            {
                path: "create-room",
                element: <CreateRoom />
            },
            {
                path: "list-room",
                element: <ListRoom />
            }
        ]
    }
];
