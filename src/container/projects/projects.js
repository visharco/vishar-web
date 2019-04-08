import React, { Component } from 'react';

import rocket from '../../assets/images/rocket.svg'

import Project from '../../component/project/project';

import './style.css';



class ProjectsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    open = React.createRef()
    finish = React.createRef()

    openFinishFilter = (e) => {

        if (e.target.id === 'open') {
            e.target.style.backgroundColor = "#f4f4f4"
            this.finish.current.style.backgroundColor = "#d0d0d0"
        }
        else {
            e.target.style.backgroundColor = "#f4f4f4"
            this.open.current.style.backgroundColor = "#d0d0d0"
        }
        console.log('wfe')

    }
    render() {
        return (
            <div className="projects" >
                <div className="P-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={rocket} />
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
                                    <select value="زمان">
                                        <option value="0">انتخاب زمان</option>
                                        <option value="A">زمان یک</option>
                                        <option value="B">زمان دو</option>
                                        <option value="C">زمان سه</option>
                                    </select>
                                </div>
                                <div className="P-filter-right">
                                    <div className="P-open-finish" >
                                        <p className="P-tab" onClick={this.openFinishFilter} id="open" ref={this.open}>باز</p>
                                        <p className="P-tab" onClick={this.openFinishFilter} id="finish" ref={this.finish}>تمام</p>
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
                                <Project />
                                <Project />
                                <Project />
                                <Project />
                                <Project />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectsComponent;