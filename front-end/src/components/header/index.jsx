import React from "react";
import {Switch} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import grey from "@material-ui/core/colors/grey";
import "./css/header.css";
import "./css/all.css";
import {Link} from "react-router-dom";

const AntSwitch = withStyles((theme) => ({
	root: {
	  width: 28,
	  height: 16,
	  padding: 0,
	  display: 'flex',
	},
	switchBase: {
	  padding: 2,
	  color: grey[500],
	  '&$checked': {
		transform: 'translateX(12px)',
		color: theme.palette.common.white,
		'& + $track': {
		  opacity: 1,
		  backgroundColor: theme.palette.primary.main,
		  borderColor: theme.palette.primary.main,
		},
	  },
	},
	thumb: {
	  width: 12,
	  height: 12,
	  boxShadow: 'none',
	},
	track: {
	  border: `1px solid ${theme.palette.grey[500]}`,
	  borderRadius: 16 / 2,
	  opacity: 1,
	  backgroundColor: theme.palette.common.white,
	},
	checked: {},
  }))(Switch);
export default function Header({chLingua})
{
	const [state, setState]=React.useState(
		{
			checked: false,
			itaOp: 1,
			engOp: 0.5
		}
	);
	const handleChange = (event) => {
		setState(
			{
				checked:!state.checked,
				itaOp: state.engOp,
				engOp: state.itaOp
			}
		);
		chLingua();
	};
	return (
		<div>
			<header className="header">
			<div className="wrapper">
				<div className="logo dim">
				<img src="/header/img?img=logo" alt="logo" />
				</div>
				<div className="title dim">DICKENS IN EMILIA romagna</div>
				<nav className="nav dim">
				<img src="/header/img?img=bandiera&bandiera=ita" alt="italiano" style={{"opacity": state.itaOp}} />
						<div className="switch">
							<AntSwitch checked={state.checked} onChange={handleChange} name="checkedC" />
						</div>
						<img src="/header/img?img=bandiera&bandiera=eng" alt="english" style={{"opacity": state.engOp}} />
						<Link to="/emiliaRomagna"><i className="fas fa-home"></i></Link>
				</nav>
			</div>
			</header>
			<div className="space-top"></div>
			</div>
	);
};
