export default function TabButton({ children, onSelect, isSelected }) { // Props is also a way, Only children prop name is fixed rest can can be as per the need

    return (
        <li>
            {/* Adding paranthesis on function name will make it execute on element render =>handleClick() */}
            <button className={isSelected ? "active" : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}
