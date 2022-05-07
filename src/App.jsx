import "./App.css";
import CategoryNote from "./components/CategoryNote";
import FormCategory from "./components/FormCategory";
import StoreProvider from "./state/StoreProvider"

function App() {

  return (
    <StoreProvider>
      <div className="m-5 ">
        <FormCategory/>   
      </div>
      <CategoryNote>      
      </CategoryNote>
    </StoreProvider>
  );
}

export default App;
