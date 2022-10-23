import express from 'express';
import {Docker} from 'node-docker-api';

const port:number = 3000
const app:express.Application = express();
const docker:Docker = new Docker({ socketPath: '/var/run/docker.sock' });


app.set("view engine", "jade")

type Container_detail = {
    [key:string]: any
}

app.get('/', (req:express.Request, res:express.Response)=>{
    // res.render("")
    var data:number[] = [1,2,3]
    res.render("reg.jade", {"data": data});
    docker.container.list()
        .then((containers) => {
            let x = <Container_detail>containers[0].data
            // console.log(Object.prototype.toString.call(x))
            console.log(Object.keys(x))
            let x_keys = Object.keys(x);
            console.log(x.Names)
            
        })

});

app.listen(port, ()=>{
    console.log("")
});