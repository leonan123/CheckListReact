import { useEffect, useState } from 'react';
import { PiEyeClosedLight, PiEyeLight, PiPlusLight } from 'react-icons/pi';
import { Button, Container } from './components/UI';

import ListItem from './components/ListItem';

function App() {
  const [eyeIsClosed, setEyeIsClosed] = useState(false);
  const [data, setData] = useState([]);

  const handleToggleCompletedTask = () => {
    setEyeIsClosed(!eyeIsClosed);
  };

  const handleAddTask = () => {
    const randomId = Math.floor(Math.random() * new Date());
    setData([...data, { id: randomId, isCompleted: false }]);
  };

  const handleSaveData = ({ id, value, isCompleted }) => {
    console.log(value);
    const newData = data.map((task) => {
      if (task.id === id) {
        task.value = value?.length ? value : task.value;
        task.isCompleted = isCompleted;
      }

      return task;
    });

    sessionStorage.setItem('task', JSON.stringify(newData));
    setData(newData);
  };

  const reorganizeList = (arrow, id) => {
    let currentIndex = data.findIndex((task) => task.id === id);
    const nextIndex = arrow === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex < 0) return;

    const objectToMove = data.splice(currentIndex, 1)[0];
    data.splice(nextIndex, 0, objectToMove);

    setData([...data]);
  };

  useEffect(() => {
    const task = sessionStorage.getItem('task');
    if (task) {
      setData(JSON.parse(task));
    }
  }, []);

  return (
    <Container>
      <header>
        <h1>My checklist</h1>
      </header>
      <main>
        {!data.length && <span className="info">Sua lista de tarefas está vazia...</span>}
        {data && !eyeIsClosed
          ? data.map((task) => {
              return (
                <ListItem key={task.id} item={task} handleSaveData={handleSaveData} reorganizeList={reorganizeList} />
              );
            })
          : data &&
            data.map((task) => {
              return (
                !task.isCompleted && (
                  <ListItem key={task.id} item={task} handleSaveData={handleSaveData} reorganizeList={reorganizeList} />
                )
              );
            })}
      </main>
      <footer>
        <Button onClick={handleToggleCompletedTask} withopacity="true">
          {eyeIsClosed ? <PiEyeClosedLight /> : <PiEyeLight />}
          Completed {data.filter((task) => !!task.isCompleted).length} of
          {' ' + data.length}
        </Button>
        <Button onClick={handleAddTask}>
          <PiPlusLight />
          Add Task
        </Button>
      </footer>
    </Container>
  );
}

export default App;
