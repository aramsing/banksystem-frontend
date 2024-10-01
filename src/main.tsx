//import ReactDOM from 'react-dom';
import './index.css'

export default function App() {
  return (
    <div>
      {/* header content */}
      <header className="text-center">
        <h1>Welcome to BankSystem</h1>
      </header>

      {/* main file content */}
      <main>
        <div>
          <p className="text-center">Please choose from the options below</p>
          <span className="inline-flex -space-x-px bg-white shadow-sm">
            <button className="px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">Log In</button>
          </span>
        </div>
      </main>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);