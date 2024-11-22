import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <a href="#top">Return to main page</a>
            {/* Hero Section */}
            <section id = "hero">
                <header>
                    <h1>Exploring Data Structure</h1>
                </header>
            </section>

            {/* Overview Section */}
            <section id="overview">
                <h2>Overview</h2>
                <div>
                    <p>
                        In this section, we will be exploring different data structures techniques as well as use-case scenarios for each of the structures.<br></br> 
                        Data structure is extremely important in computer science because they help programmers like us organize, manage, and store data efficiently.<br></br>
                        Understanding data structure will help in solving complex problems and optimizing processes that can speed up your future applications.<br></br>
                    </p>
                </div>
            </section>

            {/* Video Section */}
            <section id="video">
                <div>
                    <p>
                        Before we start, let's watch this video for a brief overview of data structures
                    </p>
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DuDz6B4cqVc?si=ocs_PUAzUYliZKmn" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br></br>
                </div>
            </section>

            <br></br>
            {/* Section 0 */}
            <section id="lecture">
                <h2>0. What is Data Structure</h2>
                {/* Image 1 */}
                <img src="src/img/Picture1.jpg" style={{ width: '500%', maxWidth: '600px' }} />
                <div>
                    <p>
                        A <b>data structure</b> is a storage method that is used to <b>store and organize data</b>.
                    </p>
                    <ul>
                        <li>A data structure can <b>arrange, process, retrieve, and store</b> data for computers to access and update efficiently.</li>
                    </ul>
                    <p>
                        Different methods of data structure:
                    </p>
                    <ul>
                        <li><b>Linear Data Structure</b>: Data structure in which data elements are arranged sequentially or linearly.</li>
                        <ul>
                            <li>Example: Array, Stack, Queue, Linked List</li>
                        </ul>
                        <li><b>Non-Linear Data Structure</b>: Data structures where data elements are not arranged sequentially or linearly.</li>
                        <ul>
                            <li>Example: Tree, Graph</li>
                        </ul>
                        <li><b>Static Data Structure</b>: Data structure with a fixed memory size, making it easier to temporarily store and access data.</li>
                        <ul>
                            <li>Example: Array</li>
                        </ul>
                        <li><b>Dynamic Data Structure</b>: Data structure with a dynamic (not fixed) memory size, allowing computers to randomly update during code runtime and help with overall efficiency.</li>
                        <ul>
                            <li>Example: Queue, Stack</li>
                        </ul>
                    </ul>
                </div>
            </section>

            {/* Activity 0 */}
            <section id="activities">
                <h3>Activities</h3>
                <ol>
                <li>What is data structure?</li>
                <li>Can a data structure be both Linear and Dynamic?</li>
                <li>List the data structures that are both Linear and Dynamic.</li>
                </ol>
            </section>
            
            <br></br>
            {/* Section 1 */}
            <section id="lecture">
                <h2>1. Array</h2>
                <div>
                    <p>
                        An <b>array</b> is a data structure that <b>stores data in a sequential order</b>.
                    </p>
                    <ul>
                        <li>A similar real-world representation of an array is stacking book on a bookshelf.</li>
                        <li>Each book can be stacked from left to right, in any specified order.</li>
                    </ul>
                    {/* Image 2 */}
                    <img src="src/img/Picture2.jpg" style={{ width: '500%', maxWidth: '600px' }} />
                    <p>
                        Array Terminology
                    </p>
                    <ul>
                        <li><b>Array index:</b> In an array, elements are identified by their indexes. Typical array index starts at 0</li>
                        <li><b>Array element</b>: In an array, each element is the item store inside the array, akin to each book stored on a bookshelf.</li>
                        <li><b>Array length</b>: The length of an array is the number of elements it can contain.</li>
                    </ul>
                    
                </div>
            </section>

            {/* Activity 1 */}
            <section id="activities">
                <h3>Activities</h3>
                <p>
                    Think of 10 objects, names, items, or anything that you like. Draw a sequence of ten boxes and number them starting from 0. <br></br>
                    Write the name of each of your items in each box, so that all 10 boxes have 10 items. <br></br>
                    Congratulations, you have just created an array. Identify the following:
                </p>
                <ol>
                <li>What is the index range (starting from 0 to the last box) of your array?</li>
                <li>What are the elements stored in your array? Name at least 3 along with its index.</li>
                </ol>
            </section>

            <br></br>
            {/* Section 2 */}
            <section id="lecture">
                <h2>2. Stacks</h2>
                <div>
                    <p>
                        A <b>stack</b> is a data structure that stores data in a <b>LIFO (Last In – First Out) order</b>.
                    </p>
                    <ul>
                        <li>Similar real-world example is a stack of dishes. </li>
                        <li>When dishes are stacked, they are often stacked on top of each other. The last dish is often place at the top of the stack, hence <b>“Last In”</b>.</li>
                        <li>When you start taking dishes from the stack, the same last dish is picked up first, hence <b>“First Out”</b>.</li>

                    </ul>
                </div>
            </section>

            {/* Section 3 */}
            <section id="lecture">
                <h2>3. Queue</h2>
                <div>
                    <p>
                        A <b>queue</b> is a data structure that stores data in a <b>FIFO (First In – First Out) order</b>.
                    </p>
                    <ul>
                        <li>Think of line of people in front of a store or a movie theater waiting to buy things they want.</li>
                        <li>The first person who enters first will be at the front of the line as more and more people line up behind him or her, hence <b>"First In”</b>.</li>
                        <li>That same person will also be the first to make a purchase and leave the line, hence <b>“First Out”</b>.</li>
                    </ul>
                </div>
                {/* Image 3 */}
                <img src="src/img/Picture3.jpg" style={{ width: '500%', maxWidth: '600px' }} />
            </section>

            {/* Activity 2&3 */}
            <section id="activities">
            <h3>Activities</h3>
            <div>
                <p>
                    In this activity, we will explore the use of stack and queue through a visualization.<br></br>
                    Click on the link below to get directed to the visualgo.net website.<br></br>
                    <p><a href="https://visualgo.net/en/list">VisuAlgo</a></p>
                </p>
                <p>
                For this activity, there are two terminologies that you need to know for stack:
                <ul>
                    <li>Push: an item is added to a stack is called push item. For example: Push 2 dishes will add 2 dishes to the top of the stack.</li>
                    <li>Pop: an item is retrieved from the stack is called pop item. For example: Pop 3 dishes will remove 3 dishes from the top of the stack.</li>
                </ul>
                <p>Instructions:</p>
                <ol>
                    <li>Visit the website and navigate around to see what's on it.</li>
                    <li>Select <b>"STACK"</b> on the menu bar. </li>
                    <li>Use the control bars on the left-hand side to simulate stack operations:</li>
                    <ul>
                        <li>Click the <b>"Push"</b> button and type the number of items to add.</li>
                        <li>Click the <b>"1x (Pop)"</b> button to remove one node, or <b>"Kx (Pop)"</b> and type the number of items (K) to remove.</li>
                    </ul>
                    <li>Complete the following tasks:</li>
                    <ul>
                        <li>Click "Empty" to start with an empty stack. Perform 3 turns of operations so that the stack has an even number of nodes each turn.</li>
                        <li>Click "Empty" to reset the stack and repeat the first task but with an odd number of nodes each turn.</li>
                    </ul>
                </ol>
                </p>
                <br></br>
                <p>
                Similarly, there are two terminologies you need to know for queue:
                <ul>
                    <li>Enqueue: Adding an item to a queue is called enqueue. For example: Enqueue 3 people means three people will enter dequeue</li>
                    <li>Dequeue: Removing an item at the front of the queue is called dequeue. For example: Dequeue 2 people means two people will leave the queue.</li>
                </ul>
                <p>Instructions:</p>
                <ol>
                    <li>Select <b>"QUEUE"</b> on the menu bar. </li>
                    <li>Use the control bars on the left-hand side to simulate stack operations:</li>
                    <ul>
                        <li>Click the <b>"Enqueue"</b> button and type the number of items to add.</li>
                        <li>Click the <b>"1x (Dequeue)"</b> button to remove one node, or <b>"Kx (Dequeue)"</b> and type the number of items (K) to remove.</li>
                    </ul>
                    <li>Complete the following tasks:</li>
                    <ul>
                        <li>Click "Empty" to start with an empty stack. Perform 3 turns of operations so that the stack has an even number of nodes each turn.</li>
                        <li>Click "Empty" to reset the stack and repeat the first task but with an odd number of nodes each turn.</li>
                    </ul>
                </ol>
                <p>Answer the following questions:</p>
                <ul>
                    <li> How did the stack and queue change after each operation?</li>
                    <li> What did you notice when adding or removing the nodes from the stack? How about the queue?</li>
                </ul>
                </p>

            </div>

            <br></br>
            {/* Section 4 */}
            <section id="lecture">
                <h2>4. Trees</h2>
                <div>
                    <p>
                        A <b>tree</b> is a data structure that stores data in a <b>hierarchical structure starting from the top node (root) down to the bottom nodes (leaf)</b>.
                    </p>
                    <ul>
                        <li>Trees data structure is often represented in reverse of a real-life tree, that is its <b>root</b> is at the top of the hierarchical structure, and subsequent nodes will grow out from this root. </li>
                        <li>Each node follows a hierarchical structure like a family, where each node that has two or more nodes branching out from it is called a <b>parent node</b>, while the nodes branching out are called the <b>children nodes</b>.</li>
                        <li>A <b>leaf node</b> is a node that has no children and is often the bottom node of the tree.</li>
                        <li>Inside a tree there will be multiple subtrees, where each parent node will be the root of its own <b>subtree</b>, and its children will make up the parts of that subtree.</li>
                        <li>Each node will have an associated <b>level</b> to it to indicate how far it is from the root node, and the root node itself will have a level of 0, indicating that it is the ancestor of all other nodes.</li>
                    </ul>
                </div>
                {/* Image 4 */}
                <img src="src/img/Picture4.jpg" style={{ width: '500%', maxWidth: '600px' }} />
            </section>

            {/* Activity 4 */}
            <section id="activities">
                <h3>Activities</h3>
                <p>
                    Watch the video and answer the following questions:
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Etpc_-br5rI?si=NHa5KVd63KU3NySl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <ol>
                <li>In a tree structure, what is the difference between a parent node, a child node, and a sibling node?</li>
                <li>How do you determine which nodes in a tree are leaf nodes</li>
                <li>How is the level of a node determined in a tree, and how does the depth of the tree relate to the number of levels?</li>
                </ol>
            </section>

            {/* Section 5 */}
            <section id="lecture">
                <h2>5. Graphs</h2>
                <div>
                    <p>
                        A <b>graph</b> is a data structure that stores data in a <b>map form, where each data is stored in a node call the vertex, while the connection between two vertices is called an edge</b>.
                    </p>
                    <ul>
                        <li>A <b>node</b> of the graph is a vertex that are used to store the data and are connected by <b>edges</b>. </li>
                        <li>An <b>edge</b> connected two nodes through a horizontal line. Edges can be either <b>directed edges</b>, meaning that there is only a single direction from one node to the other, 
                        or <b>undirected edges</b>, where there is no limitation on the directions.</li>
                        <li>When there is a <b>cycle</b> in a graph (all nodes are connected and a node is reachable from any other nodes) with undirected edge, that graph is called <b>Undirected Cyclic Graph</b>.</li>
                        <li>Similarly, a <b>Directed Cyclic Graph</b> is a graph with a cycle and directed edges.</li>
                        <li>For undirected graph, the <b>number of edges connected to a node</b> is its <b>degree</b>. </li>
                        <li>For a directed graph</li>
                        <ul>
                            <li>In-degree: Total number of incoming edges in a node.</li>
                            <li>Out-degree: Total number of outgoing edges in a node.</li>
                            <li>Total degree of a directed graph = 2 x the number of edges in a graph.</li>
                        </ul>
                    </ul>
                </div>
                {/* Image 5 */}
                <img src="src/img/Picture5.jpg" style={{ width: '500%', maxWidth: '600px' }} />

            </section>

            {/* Activity 5 */}
            <section id="activities">
                <h3>Activities</h3>
                <p>
                In this activity, we will be exploring the graphs and how it connects between things. <br></br>
                Prepare a large sheet of paper and a pen or pencil, start by drawing about 5-6 circles on the large sheet of paper, each one representing a different “city.” 
                <br></br><br></br>
                Pick a random city as your starting point. Can you draw a path from this city to all other cities with the least number of <b>undirected edges</b>? How about <b> directed edges</b>?<br></br>
                Once you’re done, answer the following questions:
                <ol>
                    <li>How many edges do they take to reach all other cities from your initial city?</li>
                    <li>Does your graph have any cycle? Why?</li>
                </ol>
                Now, adding more edges to your cities so that for each city, it can reach all other cities at 1 single edge. Do the same for your directed graph.<br></br>
                Once you’re done, answer the following questions:
                <ol>
                    <li>How many edges do you have more than the initial graph?</li>
                    <li>What is the simplest data structure in your opinion? What is the most complicated one?</li>
                </ol>
                </p>
            </section>

            {/* Reflection */}
            <section id="activities">
                <h2>Reflection</h2>
                <p>
                <ol>
                    <li>How many edges do you have more than the initial graph?</li>
                    <li>What is the simplest data structure in your opinion? What is the most complicated one?</li>
                </ol>
                </p>
            </section>


        </section>
    </div>
  )
}

export default App
