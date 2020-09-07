let http = require('http'); //imported a inbuitl module
let url = require('url');
let querymodule = require('querystring');
let fs = require('fs');


let server = http.createServer( function(req, res){
        let path = url.parse(req.url).pathname;
        let query = url.parse(req.url).query;
          
    
   if(path==='/home'){
        res.setHeader('content-type','text/html');//set the header
        res.writeHead(200,{'content-type':'text/html'})
        res.write("welcome to server by nodejs");
        res.write("<h1>this is home page</h1>");
        res.write(`
           <html>
           <body>
           <form action ="http://localhost:3000/user" method="GET">
             <label>Username:</label>
             <input type ="text" name="user" /><br/>
              <label>Password:</label>
             <input type ="password" name="password" /><br/>
            <button type="submit">Sign up</button>
           </form>
           
           </body>
           
           </html>
        
        `) //configuring my response structure
        res.end(); //send response to the client
    }

    else if(path ==='/user' && req.method==='GET'){  //handling get request
        console.log(query);
       console.log(querymodule.parse(query).user, querymodule.parse(query).password);
       fs.appendFile('./msg.html', '<h1>element</h1>',function (err){
           if(!err){
               res.write('<h1>write operation done</h1>');
               res.end();
               
           }
           

            })
        
        // res.write("<h1>welcome to user page</h1>");
        // res.write("<h1>user details</h1>"); //configuring my response structure
        // res.end(); //send response to the client
    }
    else if(path==="/user" && req.method==='POST'){
        let data='';

        fs.readFile('./content.html','utf8',(err,data)=>{
            res.write(data);
            res.end();
            

        })
        req.on('data',(chunks)=>{
            data+=chunks;//appending the chunks
            console.log(chunks);
            

        })

        req.on('end',()=>{
            console.log(data);
            console.log(querymodule.parse(data)
            );
           
            
        })
    //    res.write('<h1>Post request body</h1>');
    //    res.end();

    }

    else{

       res.write("<h1>default response</h1>");
       res.end();

    }
  
 
  
})

server.listen(3000);
console.log('server started at port 3000');
