import React from 'react'
import Project from '../layouts/project'
import { projects, projectTitle } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{projectTitle}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project id={x.id} url={x.url} name={x.name} skills={x.skills} description={x.description}/>
                )}
                </div>
            </div>

        
    
        </>
    )
}

export default Works