function n(e){switch(e){case"index":return`direction: down

GovAgency: {
  label: "Gov Agency"
}
User: {
  label: "Web/Mobile Client"
  shape: person
}
Edgelayer: {
  label: "edgelayer"
}
Eventlayer: {
  label: "eventlayer"
}
ProcessingLayer: {
  label: "ProcessingLayer"
}
PersistenceLayer: {
  label: "PersistenceLayer"
}

GovAgency -> Edgelayer: "intergrates"
User -> Edgelayer: "implements"
Edgelayer -> Eventlayer
Eventlayer -> ProcessingLayer
ProcessingLayer -> PersistenceLayer
`;case"systemContextDiagram":return`direction: down

GovAgency: {
  label: "Gov Agency"
}
User: {
  label: "Web/Mobile Client"
  shape: person
}
Edgelayer: {
  label: "edgelayer"
}
Eventlayer: {
  label: "eventlayer"
}
ProcessingLayer: {
  label: "ProcessingLayer"
}
PersistenceLayer: {
  label: "PersistenceLayer"
}

GovAgency -> Edgelayer: "intergrates"
User -> Edgelayer: "implements"
Edgelayer -> Eventlayer
Eventlayer -> ProcessingLayer
ProcessingLayer -> PersistenceLayer
`;case"containerView":return`direction: down

Edgelayer: {
  label: "edgelayer"
}
Eventlayer: {
  label: "eventlayer"
}
ProcessingLayer: {
  label: "ProcessingLayer"
}
PersistenceLayer: {
  label: "PersistenceLayer"
}

Edgelayer -> Eventlayer
Eventlayer -> ProcessingLayer
ProcessingLayer -> PersistenceLayer
`;case"eventLayerComponents":return`direction: down

EventlayerIdentityServer: {
  label: "Identity Server"
}
EventlayerRoleModule: {
  label: "RBAC Module"
}
EventlayerEventBus: {
  label: "Event Bus"
  shape: queue
}
`;case"processingLayerComponents":return`direction: down

ProcessingLayerInspector: {
  label: "Content Inspector"
}
ProcessingLayerWorkers: {
  label: "Message Workers"
}
ProcessingLayerBridge: {
  label: "REST --> SMTP Bridge"
}
ProcessingLayerLogger: {
  label: "Audit Logger"
}
`;case"webClientStructure":return`direction: down

UserUserMobile: {
  label: "Mobile App"
}
UserUserWeb: {
  label: "Web Client"
}
UserAdmin: {
  label: "Admin Portal"
}
`;default:throw new Error("Unknown viewId: "+e)}}export{n as d2Source};
