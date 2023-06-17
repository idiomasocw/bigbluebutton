import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withModalMounter } from '/imports/ui/components/common/modal/service';
import DisplayExternalURLModal from './component';

const DisplayExternalURLModalContainer = props => <DisplayExternalURLModal {...props} />;

export default withModalMounter(withTracker(({ mountModal }) => ({
  closeModal: () => {
    mountModal(null);
  },
  // Other props you might want to pass to DisplayExternalURLModal
}))(DisplayExternalURLModalContainer));
