const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);



/*
<div id="parent">
    <div id="child">
        <h1>I am h1 Tag</h1>
    </div>
</div>
*/

const parent1 = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {}, "I am h1 tag")
    )
)



/*
<div id="parent">
    <div id="child">
        <h1>I am h1 Tag</h1>
        <h2>I am h2 Tag</h2>
    </div>
</div>
*/

const parent2 = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    )
)



/*
<div id="parent">
    <div id="child1">
        <h1>I am h1 Tag</h1>
        <h2>I am h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 Tag</h1>
        <h2>I am h2 Tag</h2>
    </div>
</div>
*/

const parent3 = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, 
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    ),
    React.createElement("div", {id:"child2"}, 
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    )
]
)

root.render(parent3);