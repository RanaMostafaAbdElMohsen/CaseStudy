# Case Study for Uni-directional Voice Note Service
### Implemented by Rana Mostafa 

## Functionalities Implemented so far

- Customer subscribes to a journey in order to receive voice-notes from the captain running this journey

- Customer receive multiple voice notes from the same captain as long as the rider; however status is still waiting for the bus 

- Customer listen to voice note

- Send voice notes to all customers who have booked this journey; however currently waiting in the next bus stops

- The ability to know how many customers received the voice note; however how many of them have listened to the voice note 

## Deliverables

### Hand sketch of the system design
Link: https://drive.google.com/open?id=1hOvU4mKCigkRPUqM5F1lqt_8kDk2CIc4
### API EndPoints Skeleton
https://github.com/RanaMostafaAbdElMohsen/Uni-directional-VoiceNote-Service/wiki/API-EndPoints-Skeleton
### API Documentation and Sample calls
https://github.com/RanaMostafaAbdElMohsen/Uni-directional-VoiceNote-Service/wiki/API-Documentation-and-Sample-calls
### Implementation of the service on a github public repo with commented code
Node.js code inside App folder
### Detailed Readme file with technical justification of the system design, DB architecture or any areas that needs explanation


## Technical Justification 

System design :

Architecture of project is MVC [ model - view - controller ] associated with database
DB architecture is MYSQL database with 5 tables

  - Customer Table
  - Driver Table
  - Journey Table
  - playedvoicenote Table
  - voicenote Table
  
Database ER Diagram:
- link: https://drive.google.com/open?id=1z9mR9QoaWVSHgeDu5INU2EgyfIlGjitt

Demo :

- Link : https://drive.google.com/file/d/19mMPPAgOqu_JKTCOgX-2cK7TtkWMsDRo/view?usp=sharing

Future Work & Enhancements : 
- saving voicenotes as a blob inside db ; however since it is a voice uni-directional service - I believe the concentration within scope is more concentrated on broadcasting itself
