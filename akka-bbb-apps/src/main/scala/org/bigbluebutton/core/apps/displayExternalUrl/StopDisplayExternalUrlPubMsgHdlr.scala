package org.bigbluebutton.core.apps.externalurl

import org.bigbluebutton.common2.msgs._
import org.bigbluebutton.core.apps.{ ExternalUrlModel, PermissionCheck, RightsManagementTrait }
import org.bigbluebutton.core.bus.MessageBus
import org.bigbluebutton.core.running.LiveMeeting
import org.bigbluebutton.core2.message.senders.MsgBuilder

trait StopDisplayExternalUrlPubMsgHdlr extends RightsManagementTrait {
  this: ExternalUrlApp2x =>

  def handle(msg: StopDisplayExternalUrlPubMsg, liveMeeting: LiveMeeting, bus: MessageBus): Unit = {
    log.info("Received StopDisplayExternalUrlPubMsg meetingId={}", liveMeeting.props.meetingProp.intId)

    ExternalUrlModel.clear(liveMeeting.externalUrlModel)

    //broadcastEvent
    val msgEvent = MsgBuilder.buildStopDisplayExternalUrlEvtMsg(liveMeeting.props.meetingProp.intId, msg.header.userId)
    bus.outGW.send(msgEvent)
  }
}
