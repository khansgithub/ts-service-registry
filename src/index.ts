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

// app.get('/', async (req:express.Request, res:express.Response)=>{
//     let services: string[] = []
//     let containers = await docker.container.list()
//     containers.forEach(container => {
//         let c = <Container_detail> container
//         let service_name: string = c.data.Labels.service_name
//         services.push(service_name)
//     })

//     console.log(services)
//     res.render("reg.jade", {"services": services});

// });

app.listen(port, ()=>{
    console.log("")
});