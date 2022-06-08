import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ReportsdataService {

  constructor() { }
  state()
  {
    return [
      {"_id":"","name":""},
      {"_id":"6","name":"6"},
      {"_id":"7","name":"7"}
    ]
  }

city()
{
  return [
    {
      _id:6,
      "data":[
    {
      "_id": "005-N",
      "name": "005-N"
  },
  {
      "_id": "006-E",
      "name": "006-E"
  },
  {
      "_id": "007-N",
      "name": "007-N"
  },
  {
      "_id": "025-N",
      "name": "025-N"
  },
  {
      "_id": "033-S",
      "name": "033-S"
  },
  {
      "_id": "051-E",
      "name": "051-E"
  },
  {
      "_id": "053-E",
      "name": "053-E"
  },
  {
      "_id": "053-S",
      "name": "053-S"
  },
  {
      "_id": "054-S",
      "name": "054-S"
  },]}  
     
]
}
}
