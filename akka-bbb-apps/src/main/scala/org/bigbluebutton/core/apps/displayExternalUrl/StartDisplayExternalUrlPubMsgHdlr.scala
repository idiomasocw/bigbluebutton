package org.bigbluebutton.core.apps.externalurl

import org.bigbluebutton.common2.msgs._
import org.bigbluebutton.core.apps.{ ExternalUrlModel, PermissionCheck, RightsManagementTrait }
import org.bigbluebutton.core.bus.MessageBus
import org.bigbluebutton.core.running.LiveMeeting
import org.bigbluebutton.core.apps.screenshare.ScreenshareApp2x.{ requestBroadcastStop }

trait StartDisplayExternalUrlPubMsgHdlr extends RightsManagementTrait {
  this: ExternalUrlApp2x =>

  def handle(msg: StartDisplayExternalUrlPubMsg, liveMeeting: LiveMeeting, bus: MessageBus): Unit = {
    log.info("Received StartDisplayExternalUrlPubMsg meetingId={} url={}", liveMeeting.props.meetingProp.intId, msg.body.externalUrl)

    def broadcastEvent(msg: StartDisplayExternalUrlPubMsg) {

      val routing = Routing.addMsgToClientRouting(MessageTypes.DIRECT, liveMeeting.props.meetingProp.intId, "nodeJSapp")
      val envelope = BbbCoreEnvelope(StartDisplayExternalUrlEvtMsg.NAME, routing)
      val header = BbbClientMsgHeader(StartDisplayExternalUrlEvtMsg.NAME, liveMeeting.props.meetingProp.intId, msg.header.userId)

      val body = StartDisplayExternalUrlEvtMsgBody(msg.body.externalUrl)
      val event = StartDisplayExternalUrlEvtMsg(header, body)
      val msgEvent = BbbCommonEnvCoreMsg(envelope, event)
      bus.outGW.send(msgEvent)
    }

    // You can add here further checks based on your needs.

    ExternalUrlModel.setURL(liveMeeting.externalUrlModel, msg.body.externalUrl)
    broadcastEvent(msg)
  }
}
