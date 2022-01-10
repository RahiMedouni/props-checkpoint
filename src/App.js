import ReactHeader from "./Profile/Components/ReactHeader";
import ProfileComponents from "./Profile/ProfileComponents";

function App() {
  const handleClick = () => {
    alert("RAHIM RG");
  };
  return (
    <div className="App">
      <ProfileComponents
        FullName="Rahim RG"
        Bio="My bio as a web devoloper and experieces through the years..."
        Profession="Web Devoloper"
        children={<img src={"/imagevictor.jpg"} alt="inPublic" />}
        handleName={<button onClick={handleClick}>Click me</button>}
      />
      <ReactHeader />
    </div>
  );
}

export default App;
