import React from 'react'; 
import Sidebar from 'Sidebar' 

function Page() {
    return (
        <div>
            <Sidebar />
            {/* Page content goes here */}
            <h1>Welcome to the page!</h1>
            <p>This is some content on the page.</p>
        </div>
    );
}

export default Page;
