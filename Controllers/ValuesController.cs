using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientAppSample.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClientAppSample.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {

    [HttpGet]
    [Route("GetEvents")]
    public IActionResult GetEvents()
    {
      List<EventModel> events = new List<EventModel>();
      events.Add(new EventModel() { Id = 1, EventName = "Calvin", EventDate = "12 Aug 2017", Address = "Main Street" });
      events.Add(new EventModel() { Id = 2, EventName = "Calvin", EventDate = "12 Aug 2017", Address = "Main Street" });
      events.Add(new EventModel() { Id = 3, EventName = "Calvin", EventDate = "12 Aug 2017", Address = "Main Street" });

      return Ok(events);
    }

    [HttpPost]
    [Route("SaveEvent")]
    public IActionResult SaveEvent([FromBody] EventModel eventModel)
    {
      if (eventModel.Id != null)
      {
        return Ok(eventModel);
      }
      eventModel.Id = 4;
      return Ok(eventModel);
    }
  }
}
