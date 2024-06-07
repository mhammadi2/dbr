import React,{Component} from 'react'
import { Menu } from 'semantic-ui-react'

const styleLink = document.createElement("link"); 
styleLink.rel = "stylesheet"; 
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"; 
document.head.appendChild(styleLink); 

export default class MenuExampleBasic extends Component { 
state = {} 

btt = ({ name }) => this.setState({ activeItem: name }) 

render() { 
	const { gfg1 } = this.state 

	return ( 
	<Menu> 
		<Menu.Item 
		name='GeeksforGeeks'
		active={gfg1 === 'GeeksforGeeks'} 
		onClick={this.btt}
        > 
		GeeksforGeeks 
		</Menu.Item> 
		<Menu.Item 
		name='ReactJS'
		active={gfg1 === 'ReactJS'} 
		onClick={this.btt}> 
		ReactJS 
		</Menu.Item> 
		<Menu.Item 
		name='SemanticUI'
		active={gfg1 === 'SemanticUI'} 
		onClick={this.btt}> 
		SemanticUI 
		</Menu.Item> 
	</Menu> 
	) 
} 
}
