const express = require('express'),      
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      config = require('./config/DB'),      
      userRoutes = require('./expressRoutes/userRoutes');
            
       
      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

      
      
      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      
      app.use(cookieParser());
      app.use(session({
        secret: '2C44-4D44-WppQ38S',
        resave: true,
        saveUninitialized: true,
        cookie: {
          expires: 600000
        }
      }));

      app.use('/users', userRoutes);
      
      
      

      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });