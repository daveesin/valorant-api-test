 function AgentDetails({ selectedAgent }) {
    return(
        <div>
            <h1>Agent Details</h1>
            <p>{selectedAgent.displayName}</p>
        </div>
        
    );
 }

 export default AgentDetails;