import React, {Component} from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import PROXY from "../proxy.js";
import {Link} from "react-router-dom";

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
        if(this.state.id&&this.state.lingua) axios.get(PROXY+"/"+this.state.pagina+"/"+this.state.tipo+"/"+this.state.id+"?lingua="+this.state.lingua).then(res=>this.setState({info:res.data,isLoad:true})).catch(err=>err);
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
    sostituzione=(string)=>
    {
        string=string.split("|");
        for(let i=0;i<string.length;i++)
        {
            string[i]=ReactHtmlParser(string[i]);
            for(let j=0;j<string[i].length;j++)
            {
                if(string[i][j]==="$")
                {
                    let splittato=string[i].split("$");
                    string[i]=(<Link to={splittato[0]}>{splittato[1]}</Link>);
                }
            }
        }
        return string;
    }
    render()
    {
        if(this.state.isLoad) return <p id={"txt"+this.state.id}>{this.sostituzione(this.state.info)}</p>;
        else return <p>Loading...</p>;
    }
}

export default Testo;