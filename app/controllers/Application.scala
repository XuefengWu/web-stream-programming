package controllers

import play.api.mvc._
import play.api.libs._
import play.api.libs.iteratee._
import play.api.libs.concurrent.Promise
import java.util.concurrent.TimeUnit
import play.api.libs.concurrent.Execution.Implicits._

object Application extends Controller {

  def spline = Action {
    Ok(views.html.spline("Your new application is ready."))
  }

  def multi = Action {
    Ok(views.html.multi("Your new application is ready."))
  }

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def cpu = Action {
    Ok.chunked(Streams.getCPU &> EventSource()).as(EVENT_STREAM)
  }

  def memory =  Action {
    Ok.chunked(Streams.getHeap &> EventSource()).as(EVENT_STREAM)
  }

  def monitoring = Action {
    Ok.chunked(
        Streams.getCPU.map("c:"+ _ ) >-
        Streams.getHeap.map("m:"+_ )  &>
        EventSource()).as(EVENT_STREAM)
  }
}



object Streams {

  val getHeap = Enumerator.generateM {
    Promise.timeout(
      Some(Runtime.getRuntime().freeMemory() * 100 / Runtime.getRuntime().totalMemory()).map(_.toString),
      1000, TimeUnit.MILLISECONDS)
  }

  private val cpu = new models.CPU()

  val getCPU = Enumerator.generateM {
    Promise.timeout(
      Some((cpu.getCpuUsage()*10000).round).map(_.toString),
      100, TimeUnit.MILLISECONDS)
  }

}