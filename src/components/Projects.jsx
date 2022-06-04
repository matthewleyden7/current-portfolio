import React from 'react'
import ProjectCarousel2 from './ProjectCarousel2'
import { projects } from '../data'

const Projects = () => {
  return (
    <section id="projects">
    <div className='bg-slate-800 h-[1200px] w-screen flex flex-col pt-20'>
        <ProjectCarousel2 projects={projects}/>
        

    </div>
    
    </section>
  )
}

export default Projects