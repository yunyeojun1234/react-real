/* import React, {useState} from 'react';
import axios from 'axios'

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async ()=>{
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=28d572e6fbb3482da71ff93e5487e9d8',
      );
      setData(response.data);
    } catch(e){
      console.log(e);
    }
  };
    

  return (
  <div>
    <div>
      <button onClick={onClick}>불러오기</button>
    </div>
    {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  </div>

);
  };


//News apikey
  //28d572e6fbb3482da71ff93e5487e9d8   


  

export default App; */

import React, {useState, useCallback} from  'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';



const App = ()=>{
  const [category, setCategory] =useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  
  return ( 
  <>
  <Categories  category={category} onSelect={onSelect} />
  <NewsList category={category} />;
  </>
  );
};

export default App;