import Icon from './IconSvg'
import TopbarBox from './TopbarBox'
import ScrollList from './ScrollList'
import Cell from './Cell'
import {showCircleLoading, hideCircleLoading} from './CircleLoading/index.js'

const install = Vue => {
	Vue.component(Icon.name, Icon);
	Vue.component(TopbarBox.name, TopbarBox);
	Vue.component(ScrollList.name, ScrollList);
	Vue.component(Cell.name, Cell);

	Vue.$showCircleLoading = Vue.prototype.$showCircleLoading = showCircleLoading;
	Vue.$hideCircleLoading = Vue.prototype.$hideCircleLoading = hideCircleLoading;
}

export default install

