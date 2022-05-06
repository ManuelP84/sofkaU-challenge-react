import "./App.css";
import CategoryNote from "./components/CategoryNote";
import FormCategory from "./components/FormCategory";
import FormNote from "./components/FormNote";
import StoreProvider from "./state/StoreProvider"

function App() {

  return (
    <StoreProvider>
      <FormCategory/>
      <FormNote/>
      <CategoryNote />
    </StoreProvider>
  );
}

export default App;
