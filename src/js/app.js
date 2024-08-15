export default function getHealthStatus(object) {
    let healthStatus = null;
  
    if (object.health > 50) {
      healthStatus = 'healthy';
    } else if (object.health > 15) {
      healthStatus = 'wounded';
    } else {
      healthStatus = 'critical';
    }
  
    return healthStatus;
  }