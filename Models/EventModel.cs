using System;

namespace ClientAppSample.Models
{
  public class EventModel
  {
    public EventModel()
    {

    }

    public EventModel(int? id, string name, string date, string address)
    {
      this.Id = id;
      this.EventName = name;
      this.EventDate = date;
      this.Address = address;
    }

    public int? Id { get; set; }
    public string EventName { get; set; }
    public string EventDate { get; set; }
    public string Address { get; set; }


  }

}
