import { EActions } from '../../types/enum';
import { BaseAction } from '../action';
import * as Types from '../../types/types';

/**
 * This action is responsible for typing / pasting text wherever the user currently is
 */
export default class ASendText extends BaseAction { 
  protected id: EActions = EActions.INSERT_TYPE_PASTE_TEXT;

  public get data(): any {
    const actiionConfig: Types.ISendTextConfig = this.arguments[0];
    const { text, moveCursorLeft } = actiionConfig;

    return {
      "BTTMoveCursorLeftBy" : `${moveCursorLeft}`,
      "BTTStringToType" : `${text || 0}`,
    };
  }
}