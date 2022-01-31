import React from 'react';
import sdata from "./Sdata.jsx";
import Card from "./Card.jsx";

const Amazon = () => {
    return(<>

        <Card 
        key={sdata[3].id}
            src={sdata[3].src}
            title={sdata[3].title}
            details={sdata[3].details}
        
        />
        </>
        
        );
};

export default Amazon;
