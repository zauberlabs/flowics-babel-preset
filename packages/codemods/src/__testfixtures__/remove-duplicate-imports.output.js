// hola q tal
import { List, Record, fromJS } from 'immutable';
import { PanelView, CHANGE_VIEW } from '../../../../../client/moderation-page/ducks/ui';
import type { MyType, MyOtherType } from '../../../../../client/moderation-page/ducks/ui';
import { INIT_PANEL, UPDATE_STATS } from '../../../../../client/moderation-page/ducks/panel';
import { getAuthor } from '../../renderer/duck'; // TODO change this

// case with a '* as pepe'
import * as pepe from 'moduleA';
import defaultPepe, { A, B } from 'moduleA';