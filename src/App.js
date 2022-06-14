import ContentLoader from 'react-content-loader';

import List from './components/List';
import TextSkeleton from './components/TextSkeleton';
import Title from './components/Title';
import './index.scss';

function App() {
  return (
    <div className="App">
      <List />
      <div className="content">
        <Title />

        <TextSkeleton />
      </div>
    </div>
  );
}

export default App;
