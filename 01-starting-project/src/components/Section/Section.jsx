import React from 'react'

export default function Section({ title, children, ...props }) { // Get all the other props (Forwarded/Proxy props)
    return (
        // Add all the extra props to the element  
        <section {...props}> 
            <h2>{title}</h2>
            {children}
        </section>
    );
}
