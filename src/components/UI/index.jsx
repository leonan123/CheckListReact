import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: calc(800px + 2rem);

  border: 0.5px solid #444444;
  border-radius: 0.5rem;

  header {
    border-bottom: 0.5px solid #444444;
  }

  main {
    span.info {
      opacity: 0.8;
      font-weight: 300;
    }
  }

  footer {
    border-top: 0.5px solid #444444;
    display: flex;
    justify-content: space-between;
    padding: 1rem calc(1.5rem - 0.7rem);
  }

  header,
  main {
    padding: 1rem 1.5rem;
  }
`;

export const Button = styled.button`
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 0.7rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  transition: background 0.2s;

  opacity: ${(props) => (props.withopacity ? 0.6 : 1)};

  svg {
    font-size: 1rem;
  }

  &:hover {
    background-color: #444444;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  gap: 1rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .input-group {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .label {
      flex: 1;
      word-break: break-all;
      transition: color 0.2s;
      resize: none;

      &:hover {
        color: #0c8ce9;
      }

      &.completed {
        text-decoration: line-through;
        opacity: 0.8;
      }
    }
  }

  .list-actions {
    display: flex;
    align-items: center;
    opacity: 0.8;
  }
`;
