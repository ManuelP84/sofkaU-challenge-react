import "./App.css";
import CategoryNote from "./components/CategoryNote";
import FormCategory from "./components/FormCategory";
import StoreProvider from "./state/StoreProvider"

function App() {

  return (
    <StoreProvider>
      <FormCategory/>      
      <CategoryNote>      
      </CategoryNote>
    </StoreProvider>
  );
}

export default App;
