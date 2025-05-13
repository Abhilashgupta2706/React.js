export default function TabButton(props) { // Object destructuring is also a way
    function handleClick() {
        console.log("Hellow World")
    }

    return (
        <li>
            {/* Adding paranthesis on function name will make it execute on element render =>handleClick() */}
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}
