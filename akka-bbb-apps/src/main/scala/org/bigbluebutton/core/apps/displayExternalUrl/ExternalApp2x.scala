package org.bigbluebutton.core.apps.externalurl

import akka.actor.ActorContext
import akka.event.Logging

class ExternalUrlApp2x(implicit val context: ActorContext)
  extends StartDisplayExternalUrlPubMsgHdlr
  with StopDisplayExternalUrlPubMsgHdlr {

  val log = Logging(context.system, getClass)

}
