console.log('Live');

prt_matrix = (m, count)=>{
    matrix[1].innerHTML+='Adjacency Matrix'+'<br>';
    matrix[1].innerHTML+="&nbsp "+":";
    for(let k=0; k<count; k++)
            matrix[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
         
            for(let l=0 ;l<count; l++)
         { matrix[1].innerHTML+="<br>"+(l+1)+":";
            
             for(let m=0; m<count; m++)
             {  
                 matrix[1].innerHTML+= "&nbsp" + arr2[l][m] + "&nbsp";
             }}
}
//Intro
var curr;
var tab = document.getElementsByClassName('part');
for(let i=0; i<tab.length; i++)
{

    tab[i].addEventListener('click',()=>{
         curr = i;
        document.getElementById('P'+(curr)).classList.remove('temp');
        for(let j=0; j<tab.length; j++)
        {
            if(j!==curr)
            {
                document.getElementById('P'+(j)).classList.add('temp');
            }
        }
    });

}
// Reset part Try 4

document.getElementById('reset').addEventListener('click',()=>{
console.log(curr);
if(curr===1)
{
    arr1=[];
    document.getElementById('verticesp1').value=null;
    document.getElementById('formp1').style.visibility="visible";
    document.getElementById('formp12').style.visibility='hidden';
    document.getElementsByClassName('matrixp1')[0].innerHTML="";
    document.getElementsByClassName('matrixp1')[1].innerHTML="";
    document.getElementsByClassName('solutionp1')[0].innerHTML="";
}

if(curr === 2)
{
    arr2=[];
    document.getElementById('vertices').value=null;
    document.getElementById('form').style.visibility="visible";
    document.getElementById('form2').style.visibility="hidden";
    document.getElementsByClassName('matrix')[0].innerHTML="";
    document.getElementsByClassName('matrix')[1].innerHTML="";
    let sol = document.getElementsByClassName('solution')[0].innerHTML="";
}

if(curr === 3)
{
    arr3=[];
    document.getElementById('vertices3').value=null;
    document.getElementById('p3form').style.visibility="visible";
    document.getElementById('form32').style.visibility='hidden';
    document.getElementsByClassName('matrix3')[0].innerHTML="";
    document.getElementsByClassName('matrix3')[1].innerHTML="";
    document.getElementById('solution3').innerHTML="";
}

if(curr === 4)
{
    arr4=[];
    document.getElementById('vertices4').value=null;
    document.getElementById('p4form').style.visibility="visible";
    document.getElementById('form42').style.visibility='hidden';
    document.getElementsByClassName('matrix4')[0].innerHTML="";
    document.getElementsByClassName('matrix4')[1].innerHTML="";
    document.getElementById('solution4').innerHTML="";
}
if(curr === 5)
{
    itm=[];
    temp=[];
    document.getElementById('cc').value=null;
    document.getElementById('itv').value=null;
    document.getElementById('itw').value=null;
    document.getElementById('item-list').innerHTML="";
    document.getElementById('solution5').innerHTML="";
}
});
//Mode
document.body.style.backgroundColor="white";
document.getElementById('mode').addEventListener('click',()=>{
 console.log('Mode Logs');
 console.log(`Color Changed`);
    if(document.body.style.backgroundColor==='white')
    {
        document.body.style.backgroundColor="black";
        document.getElementById('mode').innerHTML="LightMode";
    }
    else
    {
        document.body.style.backgroundColor="white";
        document.getElementById('mode').innerHTML="DarkMode";
    }

});


//Section1
var vertex_count1=0;
var arr1;
var matrix1 = document.getElementsByClassName('matrixp1');

document.getElementById('Submitp1').addEventListener('click', ()=>{
vertex_count1 = document.getElementById('verticesp1').value;

if(vertex_count1>0)
document.getElementById('formp1').style.visibility="hidden";
else if (vertex_count1==0)
vertex_count1 = document.getElementById('verticesp1').value=2;
else 
vertex_count1=document.getElementById('verticesp1').value*=-1
if(document.getElementById('formp1').style.visibility="hidden")
{
document.getElementById('formp12').style.visibility='visible';
window.alert('Cities are considered as connected.');
} 

arr1=new Number(Array(vertex_count1));

for (let i = 0; i < vertex_count1; i++) { 
arr1[i] = new Number(Array(vertex_count1)); 

for(let j=0; j<vertex_count1; j++)
{
    arr1[i][j] = 0;
    if(i!==j)
        arr1[i][j] = 1;
}  
}
matrix1[0].innerHTML="<h1> City-Count:"+vertex_count1+"</h1>";
// printing matrix
matrix1[1].innerHTML+='Adjacency Matrix'+'<br>';
    matrix1[1].innerHTML+="&nbsp "+":";
    for(let k=0; k<vertex_count1; k++)
            matrix1[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
         
            for(let l=0 ;l<vertex_count1; l++)
         { matrix1[1].innerHTML+="<br>"+(l+1)+":";
            
             for(let m=0; m<vertex_count1; m++)
             {  
                 matrix1[1].innerHTML+= "&nbsp" + arr1[l][m] + "&nbsp";
             }}

});

document.getElementById('Submitp12').addEventListener('click',()=>{

    let i = document.getElementById('vertexp11').value-1;
    let j = document.getElementById('vertexp12').value-1;
    
    let weight1 = Number(document.getElementById('weightp1').value);

    if(weight1<0)
        {
            weight1 = weight1*-1;
            window.alert("Negative Values shall be converted to Positive!!!");
        }

        if(weight1!=null)
         {
            arr1[i][j] = weight1;  
            arr1[j][i] = weight1;
         } 

     matrix1[1].innerHTML="";
    // printing matrix
matrix1[1].innerHTML+='Adjacency Matrix'+'<br>';
matrix1[1].innerHTML+="&nbsp "+":";
for(let k=0; k<vertex_count1; k++)
        matrix1[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
     
        for(let l=0 ;l<vertex_count1; l++)
     { matrix1[1].innerHTML+="<br>"+(l+1)+":";
        
         for(let m=0; m<vertex_count1; m++)
         {  
             matrix1[1].innerHTML+= "&nbsp" + arr1[l][m] + "&nbsp";
         }}


document.getElementById('vertexp11').value=null;
document.getElementById('vertexp12').value=null;
document.getElementById('weightp1').value=null;
});

var TSP=[];
var visited1 = new Array();

// TSP Greedy Code part
tsp=function(arr, count, src)
{   let min = [null, null, Infinity];
    console.log('Travelling Salesman logs');
    console.log(visited1.length);
    while(visited1.length!==count-1)
    {   console.log(visited1.length);
        visited1.push(src);
        console.log(`src:${src}`);
        
        for(let i=0; i<count; i++)
        {
            console.log(`${arr[src][i]},${visited1.indexOf(i)},${min[2]}`);
            if(arr[src][i]<min[2] && visited1.indexOf(i)===-1 )
            {
                min[0]=src;
                min[1]=i;
                min[2] = arr[src][i];
                console.log(`MinChoice:${min}`);
            }
        }
        if(min[1]!==null)
            TSP.push(min); 
            
       src = min[1]; 
       console.log(`src:${src}`);
       min = [null, null, Infinity];
    }
    for(let i=0; i<TSP.length; i++)
    console.log(`TSP[${i}]:${TSP[i]}`);
    // solutionp1
    document.getElementsByClassName('solutionp1')[0].innerHTML="Route:"+"&nbsp"+(TSP[0][0]+1);
    
    for(let i=0; i<TSP.length; i++)
    {

    document.getElementsByClassName('solutionp1')[0].innerHTML+="->"+(TSP[i][1]+1)+"("+TSP[i][2]+")";
    }
    console.log(`Final:${TSP[0][0]},${TSP.length-1},${TSP[TSP.length-1][0]}`);
    document.getElementsByClassName('solutionp1')[0].innerHTML+="->"+(TSP[0][0]+1)+"("+arr[TSP[0][0]][TSP[TSP.length-1][1]]+")";
}


document.getElementById('Submitp13').addEventListener('click',()=>{
let src1 = document.getElementById('Source1').value-1;

if(src1<0)
src1 *=-1;

if(src1>vertex_count1 )
    {document.getElementById('Source1').value=1;
        src1 = 0;}
TSP=[];
visited1=[];
tsp(arr1, vertex_count1, src1);

});



//Section2
var vertex_count2=0;
var arr2;
var matrix = document.getElementsByClassName('matrix');

document.getElementById('Submit').addEventListener('click',()=>{
    
     vertex_count2 = document.getElementById('vertices').value;
    
    if(vertex_count2>0)
        document.getElementById('form').style.visibility="hidden";
    else if (vertex_count2==0)
       vertex_count2 = document.getElementById('vertices').value=2;
    else 
        vertex_count2=document.getElementById('vertices').value*=-1
    if(document.getElementById('form').style.visibility="hidden")
     {
        document.getElementById('form2').style.visibility='visible';
        
     } 

    console.log(vertex_count2); 
     arr2=new Number(Array(vertex_count2));

    for (let i = 0; i < vertex_count2; i++) { 
        arr2[i] = new Number(Array(vertex_count2)); 
        
        for(let j=0; j<vertex_count2; j++)
        {
            arr2[i][j] = 0;
        }  
    }
    matrix[0].innerHTML="<h1> Vertex Count:"+vertex_count2+"</h1>";
    prt_matrix(matrix, vertex_count2);

});

document.getElementById('Submit2').addEventListener('click',()=>{

        let i = document.getElementById('vertex1').value-1;
        let j = document.getElementById('vertex2').value-1;
        
        let weight = Number(document.getElementById('weight').value);

        if(weight<0)
            {
                weight = weight*-1;
                window.alert("Negative Values shall be converted to Positive!!!");
            }

            if(weight!=null)
             {
                arr2[i][j] = weight;  
                arr2[j][i] = weight;
             } 
         matrix[1].innerHTML="";
        prt_matrix(matrix, vertex_count2);

    document.getElementById('vertex1').value=null;
    document.getElementById('vertex2').value=null;
    document.getElementById('weight').value=null;
});

//Prim's Code Section
Prims = (arr2)=>{
var source=0;
console.log('Prims Data log!!!');
console.log(vertex_count2);
console.log(source);

var MST=[];
var edges =[];
var visited=[];
var minEdge=[null, null, Infinity];
while(MST.length != vertex_count2-1)
{
    visited.push(source);

    for(var r=0; r<vertex_count2; r++)
    {
        if(arr2[source][r] !==0){
            edges.push([source, r, arr2[source][r]]);
        }
    }

    for(var e=0; e<edges.length; e++){
        if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) { 
            minEdge = edges[e]; 
        }
    }
    edges.splice(edges.indexOf(minEdge),1);
    MST.push(minEdge);

    source=minEdge[1];
    console.log(source);

    minEdge=[null, null, Infinity];
}

solution = document.getElementsByClassName('solution');
if(vertex_count2>1)
{
    solution[0].innerHTML="<br>MST Edges <br>"+"Vertex1 ->"+"&nbsp "+"Vertex2 : "+" &nbsp"+"Edge-Weight";
    for(var j=0; j<MST.length; j++)
    {
        if(MST[j][2]==Infinity)
            {   
                window.alert('Matrix weights are all zeroes...')
                break;
            }
        solution[0].innerHTML+="<br>";
        solution[0].innerHTML+=(MST[j][0]+1)+" &nbsp-> "+(MST[j][1]+1)+" &nbsp: "+(MST[j][2]);
        console.log(MST[j]);

    }
}
else
solution[0].innerHTML="There is only one vertex in the Graph!!!<br>You May Reset Now or Move to some other Section.<br>ThankYou.";
}
document.getElementById('Submit3').addEventListener('click',()=>{

    Prims(arr2);
    
});

//Section3

var vertex_count3=0;
var arr3=[];
var matrix3 = document.getElementsByClassName('matrix3');
var edge=[];

document.getElementById('Submitp3').addEventListener('click',()=>{
    
     vertex_count3 = document.getElementById('vertices3').value;
    
    if(vertex_count3>0)
        document.getElementById('p3form').style.visibility="hidden";
    else if (vertex_count3==0)
       vertex_count3 = document.getElementById('vertices3').value=2;
    else 
        vertex_count3=document.getElementById('vertices3').value*=-1
    if(document.getElementById('p3form').style.visibility="hidden")
     {
        document.getElementById('form32').style.visibility='visible';
        
     } 

     arr3=new Number(Array(vertex_count3));

    for (let i = 0; i < vertex_count3; i++) { 
        arr3[i] = new Number(Array(vertex_count3)); 
        
        for(let j=0; j<vertex_count3; j++)
        {
            arr3[i][j] = 0;
        }  
    }
    matrix3[0].innerHTML="<h1> Vertex Count:"+vertex_count3+"</h1>";
    matrix3[1].innerHTML+='Adjacency Matrix'+'<br>';
         matrix3[1].innerHTML+="&nbsp "+":";
         for(let k=0; k<vertex_count3; k++)
                 matrix3[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
              
                 for(let l=0 ;l<vertex_count3; l++)
              { matrix3[1].innerHTML+="<br>"+(l+1)+":";
                 
                  for(let m=0; m<vertex_count3; m++)
                  {  
                      matrix3[1].innerHTML+= "&nbsp" + arr3[l][m] + "&nbsp";
                  }}
});



document.getElementById('Submit23').addEventListener('click',()=>{

        let i = document.getElementById('vertex13').value-1;
        let j = document.getElementById('vertex23').value-1;
        
        let weight3 = Number(document.getElementById('weight3').value);

        if(weight3<0)
            {
                weight3 = weight3*-1;
                window.alert("Negative Values shall be converted to Positive!!!");
            }

            if(weight3!=null)
             {  
                arr3[i][j] = weight3;  
                arr3[j][i] = weight3;
            } 
         matrix3[1].innerHTML="";
         matrix3[1].innerHTML+='Adjacency Matrix'+'<br>';
         matrix3[1].innerHTML+="&nbsp "+":";
         for(let k=0; k<vertex_count3; k++)
                 matrix3[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
              
                 for(let l=0 ;l<vertex_count3; l++)
              { matrix3[1].innerHTML+="<br>"+(l+1)+":";
                 
                  for(let m=0; m<vertex_count3; m++)
                  {  
                      matrix3[1].innerHTML+= "&nbsp" + arr3[l][m] + "&nbsp";
                  }}
    document.getElementById('vertex13').value=null;
    document.getElementById('vertex23').value=null;
    document.getElementById('weight3').value=null;
});

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union

}
//Kruskal's Code Part
function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

kruskal=(arr, count, ed)=>{
console.log("kruskal's Data log!!!");
    var forest= new Set();
    var mst=[];

for(let i=0; i<ed.length; i++)
{
    console.log(ed[i]);
}
 

for(let i=0; i<vertex_count3; i++)
    {
       let temp = new Set();
       temp.add(i);

       forest.add(temp);
    }
 
var q_index=0;
if(ed.length>0)
while(q_index!=ed.length)
{
    console.log(forest.size);
    let flag=0;
    for(let item of forest)
    {
        if(item.has(ed[q_index][0]))
        {   
            for(let item1 of forest)
                {
                    if(item1.has(ed[q_index][1]) && item1!=item)
                        {
                            temp = union(item, item1);
                            console.log(temp);
                            forest.delete(item);
                            forest.delete(item1);
                            forest.add(temp);
                            for(let item3 of forest)
                                console.log(item3);
                            flag = 1;
                            mst.push(ed[q_index]);
                            break;
                        }
                }
            if(flag)
            break;    
        }
    }
    q_index = q_index + 1;
    console.log(q_index);
}

if(count>1)
{solution3=document.getElementById('solution3');
    solution3.innerHTML="<br>MST Edges <br>"+"Vertex1 ->"+"&nbsp "+"Vertex2 : "+" &nbsp"+"Edge-Weight";
    for(var j=0; j<mst.length; j++)
    {
        solution3.innerHTML+="<br>";
        solution3.innerHTML+=(mst[j][0]+1)+" &nbsp-> "+(mst[j][1]+1)+" &nbsp: "+(mst[j][2]);
        console.log(mst[j]);
    }
}
else
solution3.innerHTML="There is only one vertex in the Graph!!!<br>You May Reset Now or Move to some other Section.<br>ThankYou.";

}


document.getElementById('Submitp33').addEventListener('click',()=>{

    for(let i=0; i<vertex_count3; i++)
        for(let j=0; j<vertex_count3;j++)
            {
                if(arr3[i][j]!==0)
                {
                    edge.push([i, j, arr3[i][j]]);

                    for(let k=edge.length-2; k>0; k--)
                    {
                        if(edge[edge.length-1][2] < edge[k][2])
                        {
                            temp = edge[edge.length-1];
                            edge[edge.length-1] = edge[k];
                            edge[k] = temp;
                        }
                        else break;
                    }
                }
            }
    kruskal(arr3, vertex_count3, edge);
});


// Section 4
var vertex_count4=0;
var arr4=[];
var matrix4 = document.getElementsByClassName('matrix4');

document.getElementById('Submitp4').addEventListener('click',()=>{
    
     vertex_count4 = document.getElementById('vertices4').value;
    
    if(vertex_count4>0)
        document.getElementById('p4form').style.visibility="hidden";
    else if (vertex_count4==0)
       vertex_count4 = document.getElementById('vertices4').value=2;
    else 
        vertex_count4=document.getElementById('vertices4').value*=-1
    if(document.getElementById('p4form').style.visibility="hidden")
     {
        document.getElementById('form42').style.visibility='visible';
        
     } 

     arr4=new Number(Array(vertex_count4));

    for (let i = 0; i < vertex_count4; i++) { 
        arr4[i] = new Number(Array(vertex_count4)); 
        
        for(let j=0; j<vertex_count4; j++)
        {
            arr4[i][j] = 0;
        }  
    }
    matrix4[0].innerHTML="<h1> Vertex Count:"+vertex_count4+"</h1>";
    matrix4[1].innerHTML+='Adjacency Matrix'+'<br>';
         matrix4[1].innerHTML+="&nbsp "+":";
         for(let k=0; k<vertex_count4; k++)
                 matrix4[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
              
                 for(let l=0 ;l<vertex_count4; l++)
              { matrix4[1].innerHTML+="<br>"+(l+1)+":";
                 
                  for(let m=0; m<vertex_count4; m++)
                  {  
                      matrix4[1].innerHTML+= "&nbsp" + arr4[l][m] + "&nbsp";
                  }}

});

document.getElementById('Submit24').addEventListener('click',()=>{

        let i = document.getElementById('vertex14').value-1;
        let j = document.getElementById('vertex24').value-1;
        
        let weight4 = Number(document.getElementById('weight4').value);

        if(weight4<0)
            {
                weight4 = weight4*-1;
                window.alert("Negative Values shall be converted to Positive!!!");
            }

            if(weight4!=null)
             {  
                arr4[i][j] = weight4;  
                arr4[j][i] = weight4;
            } 
         matrix4[1].innerHTML="";
         matrix4[1].innerHTML+='Adjacency Matrix'+'<br>';
         matrix4[1].innerHTML+="&nbsp "+":";
         for(let k=0; k<vertex_count4; k++)
                 matrix4[1].innerHTML+="&nbsp" + (k+1) + "&nbsp";
              
                 for(let l=0 ;l<vertex_count4; l++)
              { matrix4[1].innerHTML+="<br>"+(l+1)+":";
                 
                  for(let m=0; m<vertex_count4; m++)
                  {  
                      matrix4[1].innerHTML+= "&nbsp" + arr4[l][m] + "&nbsp";
                  }}
    document.getElementById('vertex14').value=null;
    document.getElementById('vertex24').value=null;
    document.getElementById('weight4').value=null;
});
//Dijkstra's Code Part
dj= function(arr, src, count)
{
    console.log("Dijkstras's logs");
    let minEdge=[null, null, Infinity];
    let edge=[];
    let spt=[];
    let vstd=[];
    let parent=[];
    
    let weight=new Array(count);
    weight[src] = 0;

    let temp_src = src;

    for(let i=0; i<weight.length; i++)
    {
        if(i!==src)
            weight[i]=Infinity;
    }

    while(spt.length != count-1)
    {
        console.log(`Source:${src}`);
        vstd.push(src);
    
        for(let r=0; r<count; r++)
        {
            if(r!== src && arr4[src][r] !==0){
                if(weight[r] > (arr4[src][r]+weight[src]) || weight[r] == undefined)
                {
                    weight[r] = Number(arr4[src][r]) +weight[src];
                    edge.push([src, r, weight[r]]);
                    console.log(`AdjEdge:${src}->${r}:${arr[src][r]}`);
                    if(weight[parent[r]]>weight[src] || weight[parent[r]]===undefined)
                        parent[r] = src;
                }
            }
        }
    
        for(let i=0; i<vstd.length; i++)
            console.log(`Visited${i}:${vstd[i]}`);
        for(let e=0; e<edge.length; e++){
            console.log(`MEdge${e}:${edge[e]}`);
            console.log(`SPT:${vstd.indexOf(edge[e][1])}`);

            if (edge[e][2] < minEdge[2] && vstd.indexOf(edge[e][1]) === -1)  
                {
                    if(edge[e][2] === arr[edge[e][0]][edge[e][1]]){
                    console.log(`src:${parent[edge[e][1]]}:weight:${weight[parent[edge[e][1]]]}`);

                    if((edge[e][2]+weight[src])<(edge[e][2]+weight[parent[edge[e][1]]]))
                    edge[e][2] = edge[e][2] + weight[src];}
                    minEdge = edge[e]; 
                }
        }
        console.log(`minEdge:${minEdge}`);
        edge.splice(edge.indexOf(minEdge),1);
        spt.push(minEdge);
        
        src=minEdge[1];
        
    
        minEdge=[null, null, Infinity];
    }

    if(count>1)
    {let solution4=document.getElementById('solution4')
        solution4.innerHTML="<br>MST Edges <br>"+"Source ->"+"&nbsp "+"Vertex : "+" &nbsp"+"Edge-Weight";
        for(let j=0; j<spt.length; j++)
        {
            solution4.innerHTML+="<br>";
            solution4.innerHTML+=(temp_src+1)+" &nbsp-> "+(spt[j][1]+1)+" &nbsp: "+(spt[j][2]);
        }
    }
    else
    solution4.innerHTML="There is only one vertex in the Graph!!!<br>You May Reset Now or Move to some other Section.<br>ThankYou.";
    
}

document.getElementById('Submitp43').addEventListener('click',()=>{

    let source = document.getElementById('source').value-1;
    

    if(source>(vertex_count4-1) || source <0)
        {
            window.alert('Invalid vallue of Source will be treated as vertex 1');
            document.getElementById('source').value=1
            source=0;
        }
        console.log(source);

       dj(arr4, source, vertex_count4); 

});


//Section5

var itm=new Array();
var temp=new Array();

document.getElementById('item-button').addEventListener('click',()=>{

    let iv = Number(document.getElementById('itv').value);

    let iw = Number(document.getElementById('itw').value);
    console.log(iv, iw);
    if(iv<0)
        {
            iv = iv * -1;
            window.alert('Negative values will be converted to positive');
        }
    if(iw <0)
        {
            iw = iw * -1;
            window.alert('Negative weights will be treated as Positive');
        }        
        itm.push([iv, iw]);
        temp.push([iv, iw]);
        document.getElementById('item-list').innerHTML="---:Item Remaining:---";
        document.getElementById('item-list').innerHTML+="<br>Item-Nos."+"&nbsp"+":"+"&nbsp"+"Value"+"&nbsp"+":"+"&nbsp"+"Weight";
     
     for(let i=0; i<itm.length; i++)
     {  
        document.getElementById('item-list').innerHTML+="<br>item["+(i+1)+"]&nbsp"+":"+"&nbsp"+temp[i][0]+"&nbsp"+":"+"&nbsp"+temp[i][1];
     }
     document.getElementById('itv').value=null;
     document.getElementById('itw').value=null;
});

//KnapSack Code part
knapSack=function(im, wt)
{
    let taken=new Array();
    console.log('Knapsack Logs');
    console.log(`Carrying Capacity:${wt}`);
    let max=[null, null];
    while(1)
    {
   
        for(let i=0; i<im.length; i++)
            {
                console.log(im[i]);
                if(im[i][0] > max[0] && wt>=im[i][1])
                {
                    max = im[i];
                    console.log(`max:${max}, Weight:${wt}`);
                }
            }
        if(max[1] === null)
            {
                console.log(`No more valid values`);
                break;
            }
        else{
            taken.push(max);
            wt = wt - max[1];
            im.splice(im.indexOf(max),1);
            max =[null, null];
        }
                
    }

    if(taken.length!==0)
    {
        document.getElementById('solution5').innerHTML="<br>Taken Items:Item Value:Item Weight";
        for(let i=0; i<taken.length; i++)
        {
            console.log(`Taken[${i}]:${taken[i]}`);
            document.getElementById('solution5').innerHTML+="<br>Item["+(i+1)+"]:"+taken[i][0]+"&nbsp"+":"+"&nbsp"+taken[i][1];
        }
    }
}

document.getElementById('Answer').addEventListener('click',()=>{

    let weight=document.getElementById('cc').value;
    if(itm.length === 0)
        {
            window.alert('Store is Empty');
        }
    else
        knapSack(itm, weight);
        document.getElementById('item-list').innerHTML="Item-Nos."+"&nbsp"+":"+"&nbsp"+"Value"+"&nbsp"+":"+"&nbsp"+"Weight";
     
     if(itm.length === 0)
        document.getElementById('item-list').innerHTML="All Item were Taken";
        else   
     for(let i=0; i<itm.length; i++)
     {
        console.log(itm[i]);
        document.getElementById('item-list').innerHTML+="<br>item["+(i+1)+"]&nbsp"+":"+"&nbsp"+itm[i][0]+"&nbsp"+":"+"&nbsp"+itm[i][1];
     }

     if(taken.length === 0 && itm.length === 0)
        document.getElementById('solution5').innerHTML="<br> No item were Taken From the Store";
});