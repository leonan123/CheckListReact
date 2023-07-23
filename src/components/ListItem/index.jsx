import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Button, ListWrapper } from '../UI';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const ButtonAction = styled(Button)`
  padding: 0.3rem;

  svg {
    font-size: 1.3rem;
  }
`;

const ListItem = ({ item, handleSaveData, reorganizeList }) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const inputRef = useRef(null);

  const handleTaskCompleted = (ev) => {
    ev.target.checked ? setIsCompleted(true) : setIsCompleted(false);
  };

  const handleInputChange = (ev) => {
    handleSaveData({
      id: item.id,
      value: ev.target.innerHTML,
      isCompleted
    });
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.innerHTML = item.value ?? '';
    handleSaveData({ id: item.id, isCompleted });
  }, [isCompleted]);

  return (
    <ListWrapper>
      <div className="input-group">
        <input type="checkbox" onChange={(ev) => handleTaskCompleted(ev)} checked={item.isCompleted} />
        <div
          contentEditable={!isCompleted}
          suppressContentEditableWarning
          className={`label ${isCompleted && 'completed'}`}
          ref={inputRef}
          onInput={handleInputChange}
        ></div>
      </div>
      <div className="list-actions">
        <ButtonAction onClick={() => reorganizeList('down', item.id)}>
          <MdKeyboardArrowDown />
        </ButtonAction>
        <ButtonAction onClick={() => reorganizeList('up', item.id)}>
          <MdKeyboardArrowUp />
        </ButtonAction>
      </div>
    </ListWrapper>
  );
};

export default ListItem;
