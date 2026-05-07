function e(n){switch(n){case"index":return`@startuml
title "Landscape view"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<GovAgency>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam person<<User>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
skinparam rectangle<<Edgelayer>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<Eventlayer>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<ProcessingLayer>>{
  BackgroundColor #428a4f
  FontColor #FFFFFF
  BorderColor #428a4f
}
skinparam rectangle<<PersistenceLayer>>{
  BackgroundColor #a35829
  FontColor #FFFFFF
  BorderColor #a35829
}
rectangle "==Gov Agency\\n\\nREST CLIENT" <<GovAgency>> as GovAgency
person "==Web/Mobile Client\\n\\nUser & Admin Interfaces" <<User>> as User
rectangle "==edgelayer" <<Edgelayer>> as Edgelayer
rectangle "==eventlayer" <<Eventlayer>> as Eventlayer
rectangle "==ProcessingLayer" <<ProcessingLayer>> as ProcessingLayer
rectangle "==PersistenceLayer" <<PersistenceLayer>> as PersistenceLayer

GovAgency .[#777777,thickness=2].> Edgelayer : "<color:#777777>intergrates<color:#777777>"
User .[#777777,thickness=2].> Edgelayer : "<color:#777777>implements<color:#777777>"
Edgelayer .[#777777,thickness=2].> Eventlayer
Eventlayer .[#777777,thickness=2].> ProcessingLayer
ProcessingLayer .[#777777,thickness=2].> PersistenceLayer
@enduml
`;case"systemContextDiagram":return`@startuml
title "C1: System Context"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<GovAgency>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam person<<User>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
skinparam rectangle<<Edgelayer>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<Eventlayer>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<ProcessingLayer>>{
  BackgroundColor #428a4f
  FontColor #FFFFFF
  BorderColor #428a4f
}
skinparam rectangle<<PersistenceLayer>>{
  BackgroundColor #a35829
  FontColor #FFFFFF
  BorderColor #a35829
}
rectangle "==Gov Agency\\n\\nREST CLIENT" <<GovAgency>> as GovAgency
person "==Web/Mobile Client\\n\\nUser & Admin Interfaces" <<User>> as User
rectangle "==edgelayer" <<Edgelayer>> as Edgelayer
rectangle "==eventlayer" <<Eventlayer>> as Eventlayer
rectangle "==ProcessingLayer" <<ProcessingLayer>> as ProcessingLayer
rectangle "==PersistenceLayer" <<PersistenceLayer>> as PersistenceLayer

GovAgency .[#777777,thickness=2].> Edgelayer : "<color:#777777>intergrates<color:#777777>"
User .[#777777,thickness=2].> Edgelayer : "<color:#777777>implements<color:#777777>"
Edgelayer .[#777777,thickness=2].> Eventlayer
Eventlayer .[#777777,thickness=2].> ProcessingLayer
ProcessingLayer .[#777777,thickness=2].> PersistenceLayer
@enduml
`;case"containerView":return`@startuml
title "C2: System Containers"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Edgelayer>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<Eventlayer>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<ProcessingLayer>>{
  BackgroundColor #428a4f
  FontColor #FFFFFF
  BorderColor #428a4f
}
skinparam rectangle<<PersistenceLayer>>{
  BackgroundColor #a35829
  FontColor #FFFFFF
  BorderColor #a35829
}
rectangle "==edgelayer" <<Edgelayer>> as Edgelayer
rectangle "==eventlayer" <<Eventlayer>> as Eventlayer
rectangle "==ProcessingLayer" <<ProcessingLayer>> as ProcessingLayer
rectangle "==PersistenceLayer" <<PersistenceLayer>> as PersistenceLayer

Edgelayer .[#777777,thickness=2].> Eventlayer
Eventlayer .[#777777,thickness=2].> ProcessingLayer
ProcessingLayer .[#777777,thickness=2].> PersistenceLayer
@enduml
`;case"eventLayerComponents":return`@startuml
title "C3: Event Layer - Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<EventlayerIdentityServer>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<EventlayerRoleModule>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam queue<<EventlayerEventBus>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
rectangle "==Identity Server\\n\\nOAuth 2.0 , LDAP/SAML" <<EventlayerIdentityServer>> as EventlayerIdentityServer
rectangle "==RBAC Module\\n\\nRole-based access control" <<EventlayerRoleModule>> as EventlayerRoleModule
queue "==Event Bus\\n\\nTopics: msg.inbound, msg.outbound, msg.audit, msg.dlq" <<EventlayerEventBus>> as EventlayerEventBus
@enduml
`;case"processingLayerComponents":return`@startuml
title "C3: Processing Layer - Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ProcessingLayerInspector>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<ProcessingLayerWorkers>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<ProcessingLayerBridge>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<ProcessingLayerLogger>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
rectangle "==Content Inspector\\n\\nBlocks .exe .bat .sh at ingestion point" <<ProcessingLayerInspector>> as ProcessingLayerInspector
rectangle "==Message Workers\\n\\nAsync consumers, DLQ, Retry & backoff logic" <<ProcessingLayerWorkers>> as ProcessingLayerWorkers
rectangle "==REST --> SMTP Bridge\\n\\nTranslates REST calls to IMAP/SMTP commands" <<ProcessingLayerBridge>> as ProcessingLayerBridge
rectangle "==Audit Logger\\n\\nTamper-evident log All API calls & admin events" <<ProcessingLayerLogger>> as ProcessingLayerLogger
@enduml
`;case"webClientStructure":return`@startuml
title "C4: Web/Mobile Client - Internal"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<UserUserMobile>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<UserUserWeb>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<UserAdmin>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
rectangle "==Mobile App\\n\\nNative mobile interface" <<UserUserMobile>> as UserUserMobile
rectangle "==Web Client\\n\\nBrowser-based UI" <<UserUserWeb>> as UserUserWeb
rectangle "==Admin Portal\\n\\nAdministrative interface" <<UserAdmin>> as UserAdmin
@enduml
`;default:throw new Error("Unknown viewId: "+n)}}export{e as pumlSource};
