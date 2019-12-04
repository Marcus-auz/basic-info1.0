const express =require('express');
const app =express();
const path =require('path');

const port=3000;
const options={
    root:path.join(__dirname,'public')
};

app.get('/',(req,res)=>{    
    res.sendfile('index.html',options); //index file sended with root path as second argument
});

app.get('/about',(req,res)=>{    
    res.sendfile('about.html',options); 
});

app.get('/contact',(req,res)=>{    
    res.sendfile('contact.html',options); 
});

app.use((req,res,next)=>{
    res.status(404).sendfile('404.html',options);
});

app.listen(port,()=>console.log(`server running at port ${port}`));