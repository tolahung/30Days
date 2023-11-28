
function save(data){
    localStorage.setItem('miniProject', JSON.stringify(data));
}
// saveData(demoData);

function load(){
    return JSON.parse(localStorage.getItem('miniProject'));
}
// console.log(load());

function Item({nameItem}){
    return (
            <div className="item">
                <a href="../../day1/day1.html">{nameItem}</a>
            </div>
    )
}

function Content(){
    return(
        <div id="wrapper">
        <button>
            <a className="clickPj" href="./form.html">
                Add mini project
            </a>
        </button> 
        <div id="container">
            {data.map(element =>(
             <Item nameItem = {element.name} />
           ))} 
        </div>
    </div>
    )
}

const data = load();

function App(){
    return (
        <div>
             <Content />
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'));