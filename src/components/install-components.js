import Icon from './IconSvg'
import TopbarBox from './TopbarBox'
import ScrollList from './ScrollList'

const install = Vue => {
	Vue.component(Icon.name, Icon);
	Vue.component(TopbarBox.name, TopbarBox);
	Vue.component(ScrollList.name, ScrollList);
}

export default install

