import { ExternalUrlMeetings } from '/imports/api/meetings';  // Make sure to create this collection
import Auth from '/imports/ui/services/auth';
import { makeCall } from '/imports/ui/services/api';
import NotesService from '/imports/ui/components/notes/service';

// This function will verify if the provided URL is valid. Adjust this to your needs
const isUrlValid = (url) => /^https.*$/.test(url);

// This function will start the display of the URL
const displayExternalUrlInIframe = (url) => {
  // Close Shared Notes if open.
  NotesService.pinSharedNotes(false);

  makeCall('startDisplayExternalUrl', url);  // This method should be created on the server
};

// This function will get the URL to be displayed
const getUrlToDisplay = () => {
  const meetingId = Auth.meetingID;
  const externalUrl = ExternalUrlMeetings
    .findOne({ meetingId }, { fields: { externalDisplayUrl: 1 } });

  return externalUrl && externalUrl.externalDisplayUrl;
};

export {
  isUrlValid,
  displayExternalUrlInIframe,
  getUrlToDisplay,
};
