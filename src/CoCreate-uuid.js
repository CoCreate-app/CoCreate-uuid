
const CoCreateUUID = {
  attribute: 'data-uuid',

  init: function(container) {
    
    const __container = container || document
    if (!__container.querySelectorAll) {
			return;
		}
		
		let elements = __container.querySelectorAll(`[${this.attribute}]`);
		const self = this;
		elements.forEach(el => {
		  const len = parseInt(el.getAttribute(self.attribute)) || 36;
		  const uuid = self.generateID(len)
		  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = uuid;		    
		  } else {
		    el.innerHTML = uuid;
		  }
		})
  },
  
  generateID: function(length = 36) {
    let d = new Date().getTime();
    let d2 = (window.performance && window.performance.now && (window.performance.now()*1000)) || 0;
    let pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    
    if (length <= pattern.length) {
      pattern = pattern.substr(0, length);
    } else {
      let add_len = length - pattern.length;
      let sub_pattern = "-xxxyyxxx";
      
      let group_n = Math.floor(add_len / sub_pattern.length);
      
      for (let i = 0; i < group_n; i++) {
        pattern += sub_pattern;
      }
      
      group_n = add_len - group_n * sub_pattern.length;
      pattern += sub_pattern.substr(0, group_n);
    }
    
    let uuid = pattern.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            var r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            var r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
  },
  

}

CoCreateUUID.init();

export default CoCreateUUID;