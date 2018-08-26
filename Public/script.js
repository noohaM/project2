

document.getElementById("post").onclick = function () 
{ 
    var NewPost = new XMLHttpRequest();
NewPost.open("POST", "http://localhost:3000/posts/", true);
NewPost.setRequestHeader('Content-Type', 'application/json');
NewPost.send(JSON.stringify({
    "title": Title,
    "body": "HackedByCrown",
    "userId": 1
}));

}
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '100%';
tbl.setAttribute('border', '1');
var tbdy = document.createElement('tbody');
function TableHeader()
{

    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 4; j++) {
            if (i == 2 && j == 1) {
                break
            } else {
                if(j == 0)
                Header = "#Id";
                if(j == 1)
                Header = "#Title";
                if(j == 2)
                Header = "#Body"
                if(j == 3)
                Header = "#UserId"
                var Header;
                var th = document.createElement('th');
                th.appendChild(document.createTextNode(Header))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(th)
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}
function CreateTable()
{
    for (var i = 0; i < 1; i++) {
        var tr2 = document.createElement('tr');   
        for (var j = 0; j < 4; j++) {
            if (i == 2 && j == 1) {
                break
            } else {
                if(j == 0)
                UserData = Data.id;
                if(j == 1)
                UserData = Data.title;
                if(j == 2)
                UserData = Data.body;
                if(j == 3)
                UserData = Data.userId;
                var UserData;
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(UserData))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr2.appendChild(td)
            }
        }
        tbdy.appendChild(tr2);
    }

}

    function addElement(parentId, elementTag, elementId, html) {
        // Adds an element to the document
        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.innerHTML = html;
        p.appendChild(newElement);
    }
var PostNum = 0;
var PostNumStr = PostNum+"";
setInterval(GetData, 100);
document.getElementById("addNewPost").onclick = function()
{
    if(xhr.open.status != 404){
    if(Data.id > PostNum && xhr.open.status != 404)
    PostNum++;
    if(PostNum <=1){
    TableHeader();
}
    CreateTable();
}
}
    var fileId = 0; // used by the addFile() function to keep track of IDs
    function addFile() {
        fileId++; // increment fileId to get a unique ID for the new element
        var html = '<td>comments</td> ';
        addElement(html);
    }

var Data
var xhr = new XMLHttpRequest();
function GetData()
{
    
// we defined the xhr

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        Data = data;

    }

};
var Num = 1;
if(xhr.open.status == 404)
Num = -1;
xhr.open('GET', "http://localhost:3000/posts/"+(PostNum+Num) +"", true);
xhr.send();
}