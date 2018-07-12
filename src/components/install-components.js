import Icon from './IconSvg'
import TopbarBox from './TopbarBox'

const install = Vue => {
	Vue.component(Icon.name, Icon);
	Vue.component(TopbarBox.name, TopbarBox);
}

export default install

