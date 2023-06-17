import React, { Component } from 'react';
import { withModalMounter } from '/imports/ui/components/common/modal/service';
import { defineMessages, injectIntl } from 'react-intl';
import { ModalContainer, CloseButton, InputField, StartButton } from './styles';
import { isUrlValid, displayExternalUrlInIframe } from '/imports/ui/components/display-external-url/service';

const intlMessages = defineMessages({
  start: {
    id: 'app.externalVideo.start',
    description: 'Start displaying external URL',
  },
  urlError: {
    id: 'app.externalUrlDisplay.urlError',
    description: 'Invalid URL error',
  },
  input: {
    id: 'app.externalVideo.input',
    description: 'URL input',
  },
  urlInput: {
    id: 'app.externalUrlDisplay.urlInput',
    description: 'URL input field placeholder',
  },
  title: {
    id: 'app.externalUrlDisplay.title',
    description: 'Modal title',
  },
  close: {
    id: 'app.externalVideo.close',
    description: 'Close',
  },
  note: {
    id: 'app.externalUrlDisplay.noteLabel',
    description: 'Provides hint about displaying external URL',
  },
});

class ExternalURLModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      displaying: false,
    };

    this.startDisplayHandler = this.startDisplayHandler.bind(this);
    this.updateURLHandler = this.updateURLHandler.bind(this);
  }

  startDisplayHandler() {
    const { closeModal } = this.props;
    const { url } = this.state;

  if (isUrlValid(url)) {
    displayExternalUrlInIframe(url);
  } else {
    // Handle invalid url
    console.log(`Invalid URL: ${url}`);
  }
  closeModal();

  }

  updateURLHandler(ev) {
    this.setState({ url: ev.target.value });
  }

  render() {
    const { intl, closeModal } = this.props;
    console.log("Intl prop:", this.props.intl);  // Add this line
    const { url } = this.state;
    return (
      <ModalContainer onRequestClose={closeModal}>
        <CloseButton onClick={closeModal}>{intl.formatMessage(intlMessages.close)}</CloseButton>
      {/* <h2>{intl.formatMessage(intlMessages.title)}</h2>*/}
         <h2>Display an external URL</h2>
        <InputField
          autoFocus
          id="url-modal-input"
          onChange={this.updateURLHandler}
          onPaste={this.pasteURLHandler} 
          name="url-modal-input"
          placeholder={intl.formatMessage(intlMessages.urlInput)}
          disabled={this.state.displaying}
        />
        <StartButton
          onClick={this.startDisplayHandler}
          disabled={!url}
          style={{cursor: "pointer"}}
        >
         Start
        </StartButton>
      </ModalContainer>
    );
  }
}

export default injectIntl(withModalMounter(ExternalURLModal));
