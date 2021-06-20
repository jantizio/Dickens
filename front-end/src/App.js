/*import logo from './logo.svg';
import './App.css';*/
import React, {Component} from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Testo from "./components/testo";
import Multi from "./components/multiComponent";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component
{
	constructor()
	{
		super();
		this.state=
		{
			lingua:"ita",
			chLingua:()=>
			{
				if(this.state.lingua==="ita") this.state.lingua="eng";
				else this.state.lingua="ita";
				this.child.setState({lingua:this.state.lingua})
			}
		};
	}
	render()
	{
		return (
			<Router>
				<Header chLingua={this.state.chLingua} />
					<Switch>
						<Route exact path="/bologna" component={()=><Multi lingua={this.state.lingua} pagina={"bologna"} ref={ref=>this.child=ref} />} />
						<Route exact path="/byron" component={()=><Multi lingua={this.state.lingua} pagina={"byron"} ref={ref=>this.child=ref} />} />
						<Route exact path="/carracci" component={()=><Multi lingua={this.state.lingua} pagina={"carracci"} ref={ref=>this.child=ref} />} />
						<Route exact path="/certosa" component={()=><Multi lingua={this.state.lingua} pagina={"certosa"} ref={ref=>this.child=ref} />} />
						<Route exact path="/dickens" component={()=><Multi lingua={this.state.lingua} pagina={"dickens"} ref={ref=>this.child=ref} />} />
						<Route exact path="/domenichino" component={()=><Multi lingua={this.state.lingua} pagina={"domenichino"} ref={ref=>this.child=ref} />} />
						<Route exact path="/torri" component={()=><Multi lingua={this.state.lingua} pagina={"torri"} ref={ref=>this.child=ref} />} />
						<Route exact path="/emiliaRomagna" component={()=><Multi lingua={this.state.lingua} pagina={"emiliaRomagna"} ref={ref=>this.child=ref} />} />
						<Route exact path="/tour" component={()=><Multi lingua={this.state.lingua} pagina={"tour"} ref={ref=>this.child=ref} />} />
						<Route exact path="/meridiana" component={()=><Multi lingua={this.state.lingua} pagina={"meridiana"} ref={ref=>this.child=ref} />} />
						<Route exact path="/moda" component={()=><Multi lingua={this.state.lingua} pagina={"moda"} ref={ref=>this.child=ref} />} />
						<Route exact path="/pellegrino" component={()=><Multi lingua={this.state.lingua} pagina={"pellegrino"} ref={ref=>this.child=ref} />} />
						<Route exact path="/campagna" component={()=><Multi lingua={this.state.lingua} pagina={"campagna"} ref={ref=>this.child=ref} />} />
						<Route exact path="/pinacoteca" component={()=><Multi lingua={this.state.lingua} pagina={"pinacoteca"} ref={ref=>this.child=ref} />} />
						<Route exact path="/pontificio" component={()=><Multi lingua={this.state.lingua} pagina={"pontificio"} ref={ref=>this.child=ref} />} />
						<Route exact path="/reni" component={()=><Multi lingua={this.state.lingua} pagina={"reni"} ref={ref=>this.child=ref} />} />
						<Route exact path="/ringraziamenti" component={()=><Multi lingua={this.state.lingua} pagina={"ringraziamenti"} ref={ref=>this.child=ref} />} />
						<Route exact path="/rossini" component={()=><Multi lingua={this.state.lingua} pagina={"rossini"} ref={ref=>this.child=ref} />} />
						<Route exact path="/sibaud" component={()=><Multi lingua={this.state.lingua} pagina={"sibaud"} ref={ref=>this.child=ref} />} />
						<Route exact path="/storia" component={()=><Multi lingua={this.state.lingua} pagina={"storia"} ref={ref=>this.child=ref} />} />
						<Redirect to="/emiliaRomagna" />
					</Switch>
				<Footer />
			</Router>
		)
	}
}

export default App;
