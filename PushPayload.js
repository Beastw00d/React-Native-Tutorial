'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Component,
  StyleSheet,
  ListView,
  Image,

} = React;

var moment = require('moment');

class PushPayload extends Component{
	constructor(props){
		super(props);

		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this.state = {
			dataSource: ds,
			pushEvent: props.pushEvent
		};
	}

	renderRow(rowData){
		return (
			<View style={{
				flex: 1,
				justifyContent: 'center',
				borderColor: '#D7D7D7',
				borderBottomWidth: 1,
				paddingTop: 20,
				paddingBottom: 20,
				padding: 10
			}}>
				<Text>{rowData.sha.substring(0,6)} - {rowData.message}</Text>
			</View>
		);
	}

	render() {
		return(
			<View style={{
				flex: 1,
				paddingTop: 80,
				justifyContent: 'flex-start',
				alignItems: 'center'
			}}>
				<Image 
					source={{uri: this.state.pushEvent.actor.avatar_url}}
					style={{
						height: 120,
						width: 120,
						borderRadius: 60
					}}
				/>

				<Text style={{
					paddingTop: 20,
					paddingBottom: 20,
					fontSize: 20
				}}>
					{moment(this.state.pushEvent.created_at).fromNow()}
				</Text>

				<Text style={{
					backgroundColor: '#fff',
					fontWeight: 600,
					paddingTop: 40,
					fontSize: 20
				}}>
					{this.state.pushEvent.actor.login}
				</Text>
				<Text style={{backgroundColor: '#fff'}}>
					at <Text style={{
							fontWeight: 600
						}}>
							{this.state.pushEvent.repo.name}
						</Text>
				</Text>

				<ListView
					contentInset={{
						top: -50
					}}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
				/>
				
			</View>
		);
	}
}

var styles = StyleSheet.create({
	bold: {
		fontWeight: '800',
		fontSize: 16
	}
});

module.exports = PushPayload;