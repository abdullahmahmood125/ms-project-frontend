import {Action} from "@ngrx/store";

export const ConfigActionTypes = {
  SET_PAGE_TITLE: '[set page title]',
};


export class SetPageTitleAction implements Action {
  public type: string = ConfigActionTypes.SET_PAGE_TITLE;

  constructor(public payload: any = null) {
  }
}

export type ConfigActions = SetPageTitleAction;
