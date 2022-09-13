import React, {useState} from 'react'
import data from './data'
import List from './list';
const Listele = () => {
    const [people,setPeople]=useState(data);
    const [resetAll,setResetAll] = useState(false);

    const clearAll = () => { 
      setPeople([]);
      setResetAll(true);
     }

    function refreshPage() {
      setPeople(data);
      setResetAll(false);
    }


  return (
    <main>
        <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people}/>
            {
              !resetAll ? (<button onClick={clearAll}>Clear All</button>) : <button onClick={refreshPage}>Refresh Page</button>
            }
            
            
        </section>
    </main>
  )
}
 
export default Listele