import React,{Component} from "react";

class Project extends Component{   
    constructor (){
        super();
        this.state={

        }
    }
    render(){
        // let a=this.props.imageSrc;
        return (
            <div className="project-item">
            <div className="project-info">
                <h2>{this.props.project.projectName}</h2>
                <p>{this.props.project.description} </p>
                <p className="project-type">{this.props.project.type} </p>
            </div>
            <div className="project-img">
            <img src = {import(this.props.project.imageSrc)} alt={this.props.project.imageAlt} />
            </div>
        </div> 
        )
    }
}
export default Project;
