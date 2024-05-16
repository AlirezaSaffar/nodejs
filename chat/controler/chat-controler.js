
class chatcontroler{
static upload = async(req,res)=>{
    var id1= req.params.id1;
    var id2= req.params.id2;
    var name1= req.params.name1;
    var name2= req.params.name2;
    var tablename;
    if(id1>id2){
        tablename = name1+"-"+name2;
    }else{tablename = name2+"-"+name1;}
    var messages = datachat.getmessages(tablename);
    res.send(messages);
    res.send(tablename);

}

static refresh = async(req,res)=>{
    var respond;
var tablename=req.body.tablename;
var sender=req.body.sender;
var message= req.body.message;
var check = req.body.ch;
if(check){
  respond=  datachat.sendmessage(tablename,message,sender);
}else{
respond=datachat.update(tablename);
}
res.send(respond);

}


}
module.exports= chatcontroler