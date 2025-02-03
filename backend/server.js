const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );
const bodyParser = require( "body-parser" );

const PORT = 8081;

const app = express();

app.use( bodyParser.json() );

app.listen( PORT, () => {
    console.log( `Server listening on http://localhost:${PORT}/` );
} );