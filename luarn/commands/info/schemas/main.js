const mongoose = require("mongoose")

const main = new mongoose.Schema({
    	    Guild: String,
			User: String,
            Code: String,
})

module.exports = mongoose.model("mainn", main) 

