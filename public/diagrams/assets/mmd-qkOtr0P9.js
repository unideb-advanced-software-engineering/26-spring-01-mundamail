function n(e){switch(e){case"index":return`---
title: "Landscape view"
---
graph TB
  GovAgency[Gov Agency]
  User[fa:fa-user Web/Mobile Client]
  Edgelayer[edgelayer]
  Eventlayer[eventlayer]
  ProcessingLayer[ProcessingLayer]
  PersistenceLayer[PersistenceLayer]
  GovAgency -. "intergrates" .-> Edgelayer
  User -. "implements" .-> Edgelayer
  Edgelayer -.-> Eventlayer
  Eventlayer -.-> ProcessingLayer
  ProcessingLayer -.-> PersistenceLayer
`;case"systemContextDiagram":return`---
title: "C1: System Context"
---
graph TB
  GovAgency[Gov Agency]
  User[fa:fa-user Web/Mobile Client]
  Edgelayer[edgelayer]
  Eventlayer[eventlayer]
  ProcessingLayer[ProcessingLayer]
  PersistenceLayer[PersistenceLayer]
  GovAgency -. "intergrates" .-> Edgelayer
  User -. "implements" .-> Edgelayer
  Edgelayer -.-> Eventlayer
  Eventlayer -.-> ProcessingLayer
  ProcessingLayer -.-> PersistenceLayer
`;case"containerView":return`---
title: "C2: System Containers"
---
graph TB
  Edgelayer[edgelayer]
  Eventlayer[eventlayer]
  ProcessingLayer[ProcessingLayer]
  PersistenceLayer[PersistenceLayer]
  Edgelayer -.-> Eventlayer
  Eventlayer -.-> ProcessingLayer
  ProcessingLayer -.-> PersistenceLayer
`;case"eventLayerComponents":return`---
title: "C3: Event Layer - Components"
---
graph TB
  EventlayerIdentityServer[Identity Server]
  EventlayerRoleModule[RBAC Module]
  EventlayerEventBus[(Event Bus)]
`;case"processingLayerComponents":return`---
title: "C3: Processing Layer - Components"
---
graph TB
  ProcessingLayerInspector[Content Inspector]
  ProcessingLayerWorkers[Message Workers]
  ProcessingLayerBridge[REST --> SMTP Bridge]
  ProcessingLayerLogger[Audit Logger]
`;case"webClientStructure":return`---
title: "C4: Web/Mobile Client - Internal"
---
graph TB
  UserUserMobile[Mobile App]
  UserUserWeb[Web Client]
  UserAdmin[Admin Portal]
`;default:throw new Error("Unknown viewId: "+e)}}export{n as mmdSource};
