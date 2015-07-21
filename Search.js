'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Component,
} = React;

var SearchResults = require('./SearchResults');

class Search extends Component{
	constructor(props){
		super(props);
	}


	render(){


		return (
			<View style={styles.container}>
				
				<TextInput 
					onChangeText={(text) => this.setState({searchQuery: text})}
					style={styles.input}
					placeholder="Search Query" />
				<TouchableHighlight
					onPress={this.onSearchPressed.bind(this)}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Search	
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	onSearchPressed(){
		this.props.navigator.push({
			component: SearchResults,
			title: 'Results',
			passProps: {
				searchQuery: this.state.searchQuery
			}
		})
	}
}


var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		paddingTop: 100,
		alignItems: 'center',
		padding: 10
	},
	logo: {
		width: 66,
		height: 70
	},
	heading: {
		fontSize: 30,
		marginTop: 10
	},
	input: {
		height: 50,
		marginTop: 10,
		padding: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec'
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		alignSelf: 'stretch',
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText : {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center'
	},

})

module.exports = Search;