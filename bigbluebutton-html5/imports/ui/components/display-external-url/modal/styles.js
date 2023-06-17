import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2em;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:50%;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
`;

export const InputField = styled.input`
  margin: 1em 0;
 width:50%;
`;

export const StartButton = styled.button`
  margin-top: 1em;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
`;
