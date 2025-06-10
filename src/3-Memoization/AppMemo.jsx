// Memoization is a method of program optimizing
// some times when program need to do big calculation
// page can memorize them to be done faster if same resault be them called later

// to use that we need to import it from react just like useState

import { useMemo } from 'react';

// memo hook recive two arguments first is annymous function which returns resault will be memorize
// second is array of dependencies when one element change function will process again

// at first render function is processed and if elements from list of dependencies
// wont change function will hold resault and when fired function will just return
// previously calculated resault not calculate them again
// when elements from list of dependecies change function will calculate and
// will return new resault and will hold it for later use

// for example lets make components that list array of elements

const App = () => {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');

  const filteredPlanets = planets.filter((planet) => planet.includes(query));

  return (
    <ul>
      {filteredPlanets.map((planet) => (
        <li key={planet}>{planet}</li>
      ))}
    </ul>
  );
};

// whenever array of planets or serched query will change const filteredPlanets
// will have to be calculated again which is normal behaviour, we dont need memonization for that
// lets takes to consideration that we add new state that hold clicks

const AppWithClicks = () => {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = planets.filter((planet) => planet.includes(query));

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </>
  );
};

// every time there will be clicked whole component will be calculatet even
// filteredPlanets even if planet and query didnt change
// to optimalize it we can add useMemo so state will be hold in memory and
// calculated faster when click changed

export const AppMemo = () => {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');
  const [clicks, setClicks] = useState(0);

  // here need to ad use memo so filtered planets will be remeber
  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    // here we add elements that when change we want to whole element to recalculate
    [planets, query]
  );

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </>
  );
};
