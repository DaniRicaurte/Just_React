 let yearData = {
      year: 2022,

      printYear: function() {
        console.log(this.year)

        setTimeout(function() {
            console.log("After 2 seconds");
          console.log(this.year);
        }, 1000)
      }
    }
    yearData.printYear() 
