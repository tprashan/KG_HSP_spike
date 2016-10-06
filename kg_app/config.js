var env = process.env.ENV;

var config = {
	dev: {
        app:{
            redirect_uri: "http://localhost:3000/loginPage"
        },
    		service : {
    			host: "http://localhost",
    			port: "8000",
          userdetails: "/users"
		    }
	    }
};
module.exports = config.dev;
