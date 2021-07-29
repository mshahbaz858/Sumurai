import React from 'react'
import { Image } from 'react-bootstrap'
import Heading2Styled from '../../../pages/StyledComponent/Heading2Styled'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'

function Project({data}) {
    return (
        <div className='col-12 col-md-4 mb-4'>
            <div className="d-flex flex-column">
                <Image src={data.img} rounded />
                <Heading2Styled fontSize="24px" fontWeight="500" style={{marginBottom:'5px'}}>
                    {data.heading}
                </Heading2Styled>
                <ParaStyled MachineL='16px' >
                    Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.
                </ParaStyled>
            </div>
            
        </div> 
    )
}

export default Project
