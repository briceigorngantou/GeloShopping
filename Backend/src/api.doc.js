import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0', // version
        info: {
            title: 'Online shop api', // title of the project
            version: '1.0.0', // version of the project
            description: 'online shop', // project description
            license: {
                name: 'MIT', // project licence
                url: 'https://spdx.org/licenses/MIT.html', // licence url
            },
            contact: {
                name: 'Ozagi', // project owner contact name
                url: 'https://github.com/nsamadavid', // project owner's personal website link or github profile link
                email: 'nsamadavidazaah@gmail.com', // project owner email address
            },
        },
        servers: [
            {
                url: 'https://localhost:8000', // api link
            },
        ],
    },
    apis: ['./routes/*.js'], // enterypoint of the routers in the project
};

// ## intialize the options to the swagger documentation function;
const specs = swaggerJsDoc(options);

export const swaggerDocs = (app, port) => {
    // Swagger Page
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

    // Documentation in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    });
    console.info(`Docs available at http://localhost:${port}/api/docs`);
};
