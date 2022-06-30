import './App.css';
import useFetch from './hook/useFetch';

function App() {
  const{data,loading,error}= useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div className="App">
   <h2>Custom HOOK</h2>
   {
    data?.map((item,id)=>{
      return(
      <div key={id}>
      <p>{item.title}</p>
      </div>
    )})
   }
   {loading && <p>Loading..</p> }
   {error &&  <h1>{error}</h1> }
    </div>
  );
}

export default App;
