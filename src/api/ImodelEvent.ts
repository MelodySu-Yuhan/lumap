export enum ImodelEvent {
  ElementSelected,
  // more events will be supported
}

/*
 * Handles callbacks for all types of imodel event
 */
export const handleImodelEvent = (event: ImodelEvent) => {
  switch (event) {
    case ImodelEvent.ElementSelected:
      // colors selected elements red
      //EmphasizeElementManager.runAction(ActionType.Override);
      console.log('This event is not yet supported');
    default:
      console.log('This event is not yet supported');
  }
};
