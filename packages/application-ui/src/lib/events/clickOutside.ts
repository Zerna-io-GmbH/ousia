export const clickOutside = (node) => {
    const handleClick = (event) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('click_outside'));
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            console.log("destroy");
            document.removeEventListener('click', handleClick, true);
        }
    };
}