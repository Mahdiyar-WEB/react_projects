import Home from "./pages/Home";
import ExpenseTrackerApp from "./pages/ExpenseTrackerApp/ExpenseTrackerApp";
import TodoApp from "./pages/TodoApp/TodoApp";
import ContactApp from "./pages/ContactApp/ContactApp";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/expense-tracker", element: <ExpenseTrackerApp /> },
  { path: "/todo-app", element: <TodoApp /> },
  { path: "/contact-app/*", element: <ContactApp /> },
  // { path: "/contact-app/*", element: <ContactApp /> },
  // { path: "/contact-app/contacts", element: <ContactList /> },
  // { path: "/contact-app/:id", element: <FullContact /> },
  // { path: "/contact-app/edit/:id", element: <EditContact /> },
  // { path: "/contact-app/add-contact", element: <ContactForm /> },
];

export default routes;
