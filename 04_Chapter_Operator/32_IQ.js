let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Out of Value";

console.log(`Response: ${responseTime}ms -${slaStatus}`);

// Templete literals

console.log(`what is SLA Time ? - ${sla}`); 
