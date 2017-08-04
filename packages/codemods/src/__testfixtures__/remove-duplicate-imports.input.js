// hola q tal
import { List, Record, fromJS } from 'immutable';
import { PanelView } from '../../../../../client/moderation-page/ducks/ui';
import type { MyType } from '../../../../../client/moderation-page/ducks/ui';
import { INIT_PANEL, UPDATE_STATS } from '../../../../../client/moderation-page/ducks/panel';
import { CHANGE_VIEW } from '../../../../../client/moderation-page/ducks/ui';
import { getAuthor } from '../../renderer/duck'; // TODO change this
import type { MyOtherType } from '../../../../../client/moderation-page/ducks/ui';

// case with a '* as pepe'
import * as pepe from 'moduleA';
import { A, B} from 'moduleA';
import defaultPepe from 'moduleA';