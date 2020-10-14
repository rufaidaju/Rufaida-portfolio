import React,{Component} from "react";

class Project extends Component{   
    constructor (){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div className="project-item">
            <div className="project-info">
                <h2>{this.props.project.projectName}</h2>
                <p>{this.props.project.description} </p>
                <p className="project-type">{this.props.project.type} </p>
                <p>
                    <a href={this.props.project.projectLink} target="_blank" rel="noopener noreferrer">Github</a>
                </p>
            </div>
            <div className="project-img">
            <img src = {this.props.project.imageSrc} alt={this.props.project.imageAlt} />
            </div>
        </div> 
        )
    }
}
export default Project;
