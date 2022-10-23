import { SelectBrowser } from './components/SelectBrowser';
import { SelectPath } from './components/SelectPath';

function App() {
  return (
    <div className="mx-auto px-4 container">
      <h2 className="text-2xl font-extrabold my-6">CSS scanner</h2>
      <section className="flex flex-col w-full gap-3">
        <SelectPath />
        <SelectBrowser />
      </section>
    </div>
  );
}

export default App;
