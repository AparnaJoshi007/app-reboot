function Equalizer() {
  this.handleChange = function(e) {
    var value = e.target.value;
    var min = e.target.min;
    var max = e.target.max;
    e.target.className = this.getClassName(value, min, max);
  }

  this.getClassName = function(value, min, max) {
    var mid = max / 3;
    if(Number(value) >= Number(min) && Number(value) <= Number(-mid)) {
      return("vertical min");
    } else if(Number(value) > Number(-mid) && Number(value) <= Number(mid)) {
      return("vertical default");
    } else {
      return("vertical max");
    }
  }


  this.toggleDropdown = function() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  this.applyPreset = function(e) {
    var equalizerRange = document.querySelectorAll('input[type=range]');
    this.toggleDropdown();
    switch(e.target.text) {
      case 'Rock':  equalizerRange.forEach(function(range, index) {
                      range.value = range.max / (index+1) - 10;
                      range.className = this.getClassName(range.value, range.min, range.max);
                    }.bind(this));
                    break;
      case 'Pop':   equalizerRange.forEach(function(range, index) {
                      range.value = range.min * (index+1) / (index+2) + 40;
                      range.className = this.getClassName(range.value, range.min, range.max);
                    }.bind(this))
                    break;
      case 'Jazz':  equalizerRange.forEach(function(range, index) {
                      range.value = range.min / (index+1) + 10;
                      range.className = this.getClassName(range.value, range.min, range.max);
                    }.bind(this))
                    break;
      case 'Classical': equalizerRange.forEach(function(range, index) {
                        range.value = range.max * (index+1) / (index+2) - 40;
                        range.className = this.getClassName(range.value, range.min, range.max);
                      }.bind(this))
                    break;
      default: equalizerRange.forEach(function(range, index) {
                        range.value = 0;
                        range.className = this.getClassName(range.value, range.min, range.max);
                      }.bind(this))
                    break;
    }
  }
}

var _equalizer = new Equalizer();
