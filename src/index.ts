import express from 'express';
import {Docker} from 'node-docker-api';
import path from 'path';

const port: number = 3000
const docker: Docker = new Docker({ socketPath: '/var/run/docker.sock' });
const app: express.Application = express();
let bs_path: string = path.resolve(__dirname, '..', 'node_modules/bootstrap/dist/')
console.log(bs_path)
app.use("/bootstrap", express.static(bs_path))


app.set("view engine", "jade")

type Container_detail = {
    [key:string]: any
}

// app.get('/', (req:express.Request, res:express.Response)=>{
//     // res.render("")
//     let services: string[] = []
//     docker.container.list()
//         .then((containers) => {
//             containers.forEach(container => {
//                 let c = <Container_detail>container
//                 // console.log(c.data.Labels)
//                 services += c.data.Labels
//             })
//             // console.log(Object.prototype.toString.call(x))
//             // console.log(Object.keys(x))
//             // let x_keys = Object.keys(x);
//             // console.log(x.Names)
            
//         })
//     console.log(services)
//     res.render("reg.jade", {"services": services});

// });

app.get('/', async (req:express.Request, res:express.Response)=>{
    // res.render("")
    let services: string[] = []
    let containers = await docker.container.list()
    containers.forEach(container => {
        let c = <Container_detail>container
        // console.log(c.data.Labels)
        console.log(c.data.Labels)
        services += c.data.Labels
    })

    console.log(services)
    res.render("reg.jade", {"services": services});

});

app.listen(port, ()=>{
    console.log("")
});