import React from 'react'; 
function Project() {
    return (
        <div className = "main">
            <div className = "mainComponent">
                <div className = "project">
                        {/*center part where most of the content goes */}
                        <div className = "projectMain">
                            <div className = "projectMainTop">
                                {/*
                                 -- Image here 
                                 -- Add feature where as you scroll te page goes up 
                                 -- Add back button to main project section 
                                 -- There is a slight fade at the bottom of the image to transiiton into the text color type vibes 
                                */} 
                            </div>
                            {/*Main Content */}
                            <div className = "projectMainMiddle">
                                <div className = "middleItem">
                                    {/* Left Scroll Thing */}
                                </div>
                                <div classname = "middleItem">
                                    <div className = "projectMainSection" alt="intro">
                                        
                                        
                                        {/* Iterates through Project List with the project description with the database being this: 
                                        -- Name, Year, Role, Collaborator Names in Array, TLDR Description, Tools Used, GitHub Link, Youtube Link, 
                                        */}
                        
                                    </div>
                                    <div className = "projectMainSection" alt="research">
                                    
                                    </div>
                                    <div className = "projectMainSection" alt="process"> 
                                    
                                    </div>
                                    <div className = "projectMainSection" alt="results">

                                    </div>
                                    <div classname = "projectMainSection" alt = "reflection">

                                    </div>
                                    <div className = "projectMainSection" alt="question">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className = "projectMainFooter">
                                {/*Next project vibes */}
                            </div>
                           
                        </div>

                    
                </div>
            </div>
        </div>
    );
}
export default Project; 