export const html = h => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = h;
    if (wrapper.childElementCount != 1)
        throw new Error('HTML can\'t have more or less than one root node.');
    return wrapper.children[0];
};
