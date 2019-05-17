import React, { Component } from 'react';

import rocket from '../../assets/images/rocket.svg'

import Project from '../../component/project/project';
import GetToApi from '../../controler/getToApi';
import './style.css';



class ProjectsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[]
        }
    }



    componentWillMount = async() =>{
        const res= await GetToApi('site/projects');
        console.log(res.data)
        this.setState({
            projects : res.data
        })
    }


    //
    // ------------------------------------------>
    //
    open = React.createRef()
    finish = React.createRef()

    openFinishFilter = (e) => {

        if (e.target.id === 'open') {
            e.target.style.backgroundColor = "rgb(0, 144, 207)"
            e.target.style.color = "#fff"
            this.finish.current.style.backgroundColor = "#f5f5f5"
            this.finish.current.style.color = "#888"
        }
        else {
            e.target.style.backgroundColor = "rgb(0, 144, 207)"
            e.target.style.color = "#fff"
            this.open.current.style.backgroundColor = "#f5f5f5"
            this.open.current.style.color = "#888"
        }
        console.log('wfe')

    }
    render() {


        const renderProjects = (
           this.state.projects ? this.state.projects.map((data,index) => {
           return <Project data ={data}/>
           }) : ''
        )
        return (
            <div className="projects" >
                <div className="P-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={rocket} alt="راکت" />
                            <div className="P-title-left">
                                <h2>پروژه ات را پیدا کن</h2>
                                <h1>شغلت رو بساز</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="P-body" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="P-filter" >
                                <div className="P-filter-left">
                                    <select selected="زمان">
                                        <option value="0">انتخاب زمان</option>
                                        <option value="A">زمان یک</option>
                                        <option value="B">زمان دو</option>
                                        <option value="C">زمان سه</option>
                                    </select>
                                </div>
                                <div className="P-filter-right">
                                    <div className="P-open-finish" >
                                        <p className="P-tab" onClick={this.openFinishFilter} id="open" ref={this.open}> فعال</p>
                                        <p className="P-tab" onClick={this.openFinishFilter} id="finish" ref={this.finish}>غیرفعال</p>
                                    </div>
                                    <select selected="دسته بندی">
                                        <option value="0">انتخاب دسته بندی</option>
                                        <option value="A">دسته اول</option>
                                        <option value="B">دسته دوم</option>
                                        <option value="C">سته سوم</option>
                                    </select>
                                </div>


                            </div>
                            <div className="P-results" >
                                <h1 className="P-result-title" >نمایش 789 نتیجه </h1>
                              {renderProjects}
                       

                            </div>
                            <div className="pagination" >
                                <p className="pagination-number">1</p>
                                <p className="pagination-number">2</p>
                                <p className="pagination-number pagination-number-selected">3</p>
                                <p className="pagination-number">4</p>
                                <p className="pagination-number">5</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectsComponent;