import ParentComponent from "./ParentComponent";
import FoodCard from "./FoodCard";
import foodMenu from "./FoodMenu";

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <ParentComponent />

      <h1>Food Menu</h1>
      <FoodCard foodData={foodMenu}/>
    </div>
  );
};

export default App; 