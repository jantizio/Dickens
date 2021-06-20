import React, {Component} from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

class Testo extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            isLoad:false,
            info:null,
            id: this.props.id,
            pagina:this.props.pagina,
            tipo:this.props.tipo,
            lingua: this.props.lingua
        };
    }
    fetchData=()=>
    {
        if(this.state.id&&this.state.lingua) axios.get("/"+this.state.pagina+"/"+this.state.tipo+"/"+this.state.id+"?lingua="+this.state.lingua).then(res=>this.setState({info:res.data,isLoad:true})).catch(err=>err);
    }
    componentDidMount=()=>this.fetchData();
    componentDidUpdate=(prevProps, prevState)=>
    {
        if(this.state.lingua!==prevState.lingua)
        {
            this.setState({isLoad:false,info:null});
            this.fetchData()
            this.render();
        }
    }
    render()
    {
        if(this.state.isLoad) return <p id={"txt"+this.state.id}>{ReactHtmlParser(this.state.info)}</p>;
        else return <p>Loading...</p>;
    }
}

export default Testo;